/**
 * In-App Purchase Manager for ROTATLE
 * Integrates Google Play Billing via @capgo/native-purchases
 */

import { Capacitor } from '@capacitor/core';
import { NativePurchases, PURCHASE_TYPE } from '@capgo/native-purchases';
import { isAdsRemoved, setAdsRemoved } from '../utils/storage.js';
import { PlatformService } from './platformService.js';

export const IAP_PRODUCT_IDS = {
  REMOVE_ADS: 'rotatle_remove_ads',
};

class InAppPurchaseManager {
  constructor() {
    this.isNative = PlatformService.hasIAP;
    this.billingSupported = false;
    this.initialized = false;
  }

  /**
   * Initialize In-App Purchases connection & check billing availability
   * @returns {Promise<boolean>}
   */
  async init() {
    if (this.initialized) return this.billingSupported;
    this.initialized = true;

    if (!this.isNative) {
      console.log('InAppPurchaseManager: Running on web platform (billing mock mode)');
      return false;
    }

    try {
      const { isBillingSupported } = await NativePurchases.isBillingSupported();
      this.billingSupported = Boolean(isBillingSupported);
      console.log('InAppPurchaseManager: Billing supported =', this.billingSupported);

      if (this.billingSupported) {
        // Attempt silent background restore to check previous purchases
        this.restorePurchases(true).catch(e => {
          console.warn('InAppPurchaseManager: Background restore error:', e);
        });
      }

      return this.billingSupported;
    } catch (err) {
      console.warn('InAppPurchaseManager: isBillingSupported check failed:', err);
      this.billingSupported = false;
      return false;
    }
  }

  /**
   * Check if user currently has ad-free status
   * @returns {boolean}
   */
  isAdsRemoved() {
    return isAdsRemoved();
  }

  /**
   * Launch native Google Play purchase flow for Remove Ads
   * @returns {Promise<{ success?: boolean, cancelled?: boolean, alreadyOwned?: boolean, error?: any }>}
   */
  async purchaseRemoveAds() {
    if (this.isAdsRemoved()) {
      return { success: true, alreadyOwned: true };
    }

    if (!this.isNative) {
      // In web development / browser, simulate successful purchase for testing
      setAdsRemoved(true);
      return { success: true, webMock: true };
    }

    try {
      if (!this.billingSupported) {
        await this.init();
      }

      if (!this.billingSupported) {
        return { error: 'Billing is not supported on this device' };
      }

      const transaction = await NativePurchases.purchaseProduct({
        productIdentifier: IAP_PRODUCT_IDS.REMOVE_ADS,
        productType: PURCHASE_TYPE.INAPP,
      });

      console.log('InAppPurchaseManager: Purchase transaction successful:', transaction);
      setAdsRemoved(true);
      return { success: true, transaction };
    } catch (err) {
      // Check for user cancellation
      const errString = String(err?.message || err || '').toLowerCase();
      if (
        errString.includes('cancel') ||
        errString.includes('user_canceled') ||
        errString.includes('cancelled') ||
        errString.includes('1') // BillingResponseCode.USER_CANCELED
      ) {
        console.log('InAppPurchaseManager: User cancelled purchase flow');
        return { cancelled: true };
      }

      // Check for item already owned
      if (errString.includes('already_owned') || errString.includes('7')) {
        console.log('InAppPurchaseManager: Product already owned');
        setAdsRemoved(true);
        return { success: true, alreadyOwned: true };
      }

      console.error('InAppPurchaseManager: Purchase failed:', err);
      return { error: err };
    }
  }

  /**
   * Restore previous in-app purchases
   * @param {boolean} [isSilent=false]
   * @returns {Promise<{ restored: boolean, count: number }>}
   */
  async restorePurchases(isSilent = false) {
    if (!this.isNative) {
      return { restored: false, count: 0 };
    }

    try {
      const res = await NativePurchases.restorePurchases();
      console.log('InAppPurchaseManager: restorePurchases result:', res);

      // Check if remove_ads is in restored customer info or transactions
      let hasRemoveAds = false;
      if (res?.customerInfo?.activeSubscriptions?.includes(IAP_PRODUCT_IDS.REMOVE_ADS) ||
          res?.customerInfo?.nonSubscriptionTransactions?.some(t => t.productIdentifier === IAP_PRODUCT_IDS.REMOVE_ADS) ||
          res?.items?.some(item => item.productIdentifier === IAP_PRODUCT_IDS.REMOVE_ADS)) {
        hasRemoveAds = true;
      }

      if (hasRemoveAds) {
        setAdsRemoved(true);
        return { restored: true, count: 1 };
      }

      return { restored: false, count: 0 };
    } catch (err) {
      if (!isSilent) {
        console.warn('InAppPurchaseManager: restorePurchases failed:', err);
      }
      return { restored: false, count: 0 };
    }
  }
}

export const inAppPurchaseManager = new InAppPurchaseManager();
