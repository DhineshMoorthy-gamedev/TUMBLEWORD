/**
 * Google AdMob Manager
 * Integrates Banner, Interstitial, and Rewarded Video Ads via Custom Native AdMobPlugin
 * (matching Grid Leap native layout & bottom placement) with universal fallback
 */

import { AdMobConfig } from '../config/admobConfig.js';
import { inAppPurchaseManager } from './inAppPurchaseManager.js';
import { PlatformService } from './platformService.js';

export class AdMobManager {
  constructor() {
    this.initialized = false;
    this.isSupported = PlatformService.hasAds;
    this.bannerActive = false;
    this.interstitialReady = false;
    this.rewardedReady = false;
    this.lastInterstitialTime = 0;
    this.levelsCompletedCount = 0;
    this._pendingRewardedCallback = null;
  }

  get _nativePlugin() {
    return window.Capacitor?.Plugins?.AdMobPlugin || null;
  }

  /**
   * Helper to get active Ad Unit ID based on test mode
   * @param {'banner'|'interstitial'|'rewarded'} type
   * @returns {string}
   */
  getAdUnitId(type) {
    const isTest = AdMobConfig.isTesting;
    return isTest ? AdMobConfig.test[type] : AdMobConfig.production[type];
  }

  /**
   * Initialize AdMob SDK and attach lifecycle listeners
   */
  async init() {
    if (!this.isSupported) {
      console.log('[AdMob] Running on web/desktop environment. AdMob native SDK bypassed.');
      return;
    }

    if (this.initialized) return;

    try {
      if (this._nativePlugin) {
        await this._nativePlugin.initialize();
        this._setupNativeEventListeners();
        this.initialized = true;
        console.log('[AdMob] Native AdMobPlugin initialized successfully.');
      } else {
        // Fallback to community plugin if native custom plugin is not present
        const { AdMob } = await import('@capacitor-community/admob');
        await AdMob.initialize({ initializeForTesting: AdMobConfig.isTesting });
        this.initialized = true;
      }

      // Preload initial ads if player has not purchased Remove Ads
      if (!inAppPurchaseManager.isAdsRemoved()) {
        await this.showBanner();
        this.prepareInterstitial();
        this.prepareRewardedAd();
      }
    } catch (err) {
      console.warn('[AdMob] Initialization error:', err);
    }
  }

  /**
   * Setup native event listeners for custom plugin
   */
  _setupNativeEventListeners() {
    if (!this._nativePlugin) return;

    try {
      this._nativePlugin.addListener('onRewardEarned', (data) => {
        console.log('[AdMob] User earned reward:', data);
        if (this._pendingRewardedCallback) {
          const cb = this._pendingRewardedCallback;
          this._pendingRewardedCallback = null;
          cb(true, { type: 'Hint', amount: 1 });
        }
      });

      this._nativePlugin.addListener('onRewardDismissed', (data) => {
        console.log('[AdMob] Rewarded ad dismissed:', data);
        this.rewardedReady = false;
        if (this._pendingRewardedCallback) {
          const cb = this._pendingRewardedCallback;
          this._pendingRewardedCallback = null;
          cb(data?.rewardEarned || false, null);
        }
        // Preload next rewarded ad
        this.prepareRewardedAd();
      });

      this._nativePlugin.addListener('onInterstitialDismissed', () => {
        console.log('[AdMob] Interstitial dismissed.');
        this.interstitialReady = false;
        this.lastInterstitialTime = Date.now();
        this.prepareInterstitial();
      });

      this._nativePlugin.addListener('onInterstitialFailed', (err) => {
        console.warn('[AdMob] Interstitial failed:', err);
        this.interstitialReady = false;
        setTimeout(() => this.prepareInterstitial(), 20000);
      });
    } catch (e) {
      console.warn('[AdMob] Setup listeners error:', e);
    }
  }

  /**
   * Display Adaptive Banner Ad at bottom
   */
  async showBanner() {
    if (!this.isSupported || inAppPurchaseManager.isAdsRemoved()) return;

    try {
      const adUnitId = this.getAdUnitId('banner');
      if (this._nativePlugin) {
        await this._nativePlugin.showBanner({ adUnitId });
        this.bannerActive = true;
      } else {
        const { AdMob, BannerAdSize, BannerAdPosition } = await import('@capacitor-community/admob');
        await AdMob.showBanner({
          adId: adUnitId,
          adSize: BannerAdSize.ADAPTIVE_BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: 0,
          isTesting: AdMobConfig.isTesting
        });
        this.bannerActive = true;
      }
    } catch (err) {
      console.warn('[AdMob] Show banner error:', err);
    }
  }

  /**
   * Hide Banner Ad (e.g. when Remove Ads is purchased)
   */
  async hideBanner() {
    if (!this.isSupported) return;

    try {
      if (this._nativePlugin) {
        await this._nativePlugin.hideBanner();
        this.bannerActive = false;
      } else {
        const { AdMob } = await import('@capacitor-community/admob');
        await AdMob.hideBanner();
        await AdMob.removeBanner();
        this.bannerActive = false;
      }
    } catch (err) {
      console.warn('[AdMob] Hide banner error:', err);
    }
  }

  /**
   * Preload an Interstitial Ad in the background
   */
  async prepareInterstitial() {
    if (!this.isSupported || inAppPurchaseManager.isAdsRemoved()) return;

    try {
      const adUnitId = this.getAdUnitId('interstitial');
      if (this._nativePlugin) {
        const res = await this._nativePlugin.loadInterstitial({ adUnitId });
        if (res && res.ready) {
          this.interstitialReady = true;
        }
      }
    } catch (err) {
      console.warn('[AdMob] Prepare interstitial error:', err);
    }
  }

  /**
   * Notify level completion and conditionally display Interstitial Ad
   * @param {boolean} [force=false]
   * @returns {Promise<boolean>} Whether interstitial was shown
   */
  async onLevelCompleted(force = false) {
    if (!this.isSupported || inAppPurchaseManager.isAdsRemoved()) return false;

    this.levelsCompletedCount++;
    const interval = AdMobConfig.behavior.interstitialLevelInterval;
    const minCooldown = AdMobConfig.behavior.interstitialMinCooldownSec * 1000;
    const timeSinceLast = Date.now() - this.lastInterstitialTime;

    const isIntervalMet = (this.levelsCompletedCount % interval === 0);
    const isCooldownMet = timeSinceLast >= minCooldown;

    if (force || (isIntervalMet && isCooldownMet)) {
      return await this.showInterstitial();
    }
    return false;
  }

  /**
   * Show Interstitial Ad if prepared
   * @returns {Promise<boolean>}
   */
  async showInterstitial() {
    if (!this.isSupported || inAppPurchaseManager.isAdsRemoved()) return false;

    try {
      if (!this.interstitialReady) {
        await this.prepareInterstitial();
      }
      if (this._nativePlugin) {
        await this._nativePlugin.showInterstitial();
        this.interstitialReady = false;
        this.lastInterstitialTime = Date.now();
        return true;
      }
      return false;
    } catch (err) {
      console.warn('[AdMob] Show interstitial error:', err);
      return false;
    }
  }

  /**
   * Preload Rewarded Video Ad in the background
   */
  async prepareRewardedAd() {
    if (!this.isSupported) return;

    try {
      const adUnitId = this.getAdUnitId('rewarded');
      if (this._nativePlugin) {
        const res = await this._nativePlugin.loadRewardedAd({ adUnitId });
        if (res && res.ready) {
          this.rewardedReady = true;
        }
      }
    } catch (err) {
      console.warn('[AdMob] Prepare rewarded ad error:', err);
    }
  }

  /**
   * Show Rewarded Video Ad and callback when reward is granted
   * @param {(granted: boolean, reward: object|null) => void} onRewardCallback
   */
  async showRewardedAd(onRewardCallback) {
    // If on web/desktop or ads removed, immediately grant reward seamlessly
    if (!this.isSupported || inAppPurchaseManager.isAdsRemoved()) {
      if (onRewardCallback) onRewardCallback(true, { type: 'Hint', amount: 1 });
      return;
    }

    this._pendingRewardedCallback = onRewardCallback;

    try {
      if (!this.rewardedReady) {
        await this.prepareRewardedAd();
      }
      if (this._nativePlugin) {
        await this._nativePlugin.showRewardedAd();
        this.rewardedReady = false;
      } else {
        // Fallback
        if (this._pendingRewardedCallback) {
          const cb = this._pendingRewardedCallback;
          this._pendingRewardedCallback = null;
          cb(true, { type: 'Hint', amount: 1 });
        }
      }
    } catch (err) {
      console.warn('[AdMob] Show rewarded ad error:', err);
      if (this._pendingRewardedCallback) {
        const cb = this._pendingRewardedCallback;
        this._pendingRewardedCallback = null;
        cb(true, { type: 'Hint', amount: 1 });
      }
      this.prepareRewardedAd();
    }
  }
}

export const admobManager = new AdMobManager();
