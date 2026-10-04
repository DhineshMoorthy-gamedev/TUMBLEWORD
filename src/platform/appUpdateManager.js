import { Capacitor } from '@capacitor/core';
import {
  AppUpdate,
  AppUpdateAvailability,
  FlexibleUpdateInstallStatus
} from '@capawesome/capacitor-app-update';

class AppUpdateManager {
  constructor() {
    this.cachedInfo = null;
    this.isDownloading = false;
    this.isDownloaded = false;
    this.listenerHandle = null;
    this._listeners = [];
  }

  /**
   * Check if native app update is available
   * @returns {Promise<{available: boolean, info: object|null, reason?: string}>}
   */
  async checkForUpdate() {
    if (!Capacitor.isNativePlatform()) {
      return {
        available: false,
        info: null,
        reason: 'WEB_PLATFORM'
      };
    }

    try {
      const info = await AppUpdate.getAppUpdateInfo();
      this.cachedInfo = info;

      // Check if update is downloaded already but not installed
      if (info.installStatus === FlexibleUpdateInstallStatus.DOWNLOADED) {
        this.isDownloaded = true;
        return {
          available: true,
          downloaded: true,
          info
        };
      }

      const isAvailable = info.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE;
      return {
        available: isAvailable,
        downloaded: false,
        info
      };
    } catch (err) {
      console.warn('AppUpdateManager: checkForUpdate failed:', err);
      return {
        available: false,
        info: null,
        error: err
      };
    }
  }

  /**
   * Listen to flexible download progress & status
   * @param {(state: {status: string, percent: number, bytesDownloaded: number, totalBytes: number}) => void} callback
   */
  async setupFlexibleListener(callback) {
    if (!Capacitor.isNativePlatform()) return;

    if (callback) {
      this._listeners.push(callback);
    }

    if (this.listenerHandle) return;

    try {
      this.listenerHandle = await AppUpdate.addListener('onFlexibleUpdateStateChange', state => {
        let percent = 0;
        if (state.bytesDownloaded && state.totalBytesToDownload && state.totalBytesToDownload > 0) {
          percent = Math.min(100, Math.round((state.bytesDownloaded / state.totalBytesToDownload) * 100));
        }

        if (state.installStatus === FlexibleUpdateInstallStatus.DOWNLOADING) {
          this.isDownloading = true;
          this.isDownloaded = false;
        } else if (state.installStatus === FlexibleUpdateInstallStatus.DOWNLOADED) {
          this.isDownloading = false;
          this.isDownloaded = true;
        }

        const payload = {
          installStatus: state.installStatus,
          percent,
          bytesDownloaded: state.bytesDownloaded || 0,
          totalBytes: state.totalBytesToDownload || 0,
          isDownloaded: this.isDownloaded,
          isDownloading: this.isDownloading
        };

        this._listeners.forEach(cb => {
          try {
            cb(payload);
          } catch (e) {
            console.error('AppUpdate listener callback error:', e);
          }
        });
      });
    } catch (e) {
      console.warn('AppUpdateManager: setupFlexibleListener failed:', e);
    }
  }

  /**
   * Start downloading flexible update
   */
  async startFlexibleUpdate() {
    if (!Capacitor.isNativePlatform()) {
      window.open('https://play.google.com/store/apps/details?id=com.olaidigitalstudios.rotatle', '_blank');
      return;
    }

    try {
      this.isDownloading = true;
      return await AppUpdate.startFlexibleUpdate();
    } catch (err) {
      console.warn('AppUpdateManager: startFlexibleUpdate failed:', err);
      // Fallback to store page
      await this.openStoreListing();
      throw err;
    }
  }

  /**
   * Complete flexible update by restarting app
   */
  async completeFlexibleUpdate() {
    if (!Capacitor.isNativePlatform()) return;

    try {
      await AppUpdate.completeFlexibleUpdate();
    } catch (err) {
      console.error('AppUpdateManager: completeFlexibleUpdate failed:', err);
    }
  }

  /**
   * Fallback to open Play Store listing
   */
  async openStoreListing() {
    try {
      if (Capacitor.isNativePlatform()) {
        await AppUpdate.openAppStore({ androidPackageName: 'com.olaidigitalstudios.rotatle' });
      } else {
        window.open('https://play.google.com/store/apps/details?id=com.olaidigitalstudios.rotatle', '_blank');
      }
    } catch (e) {
      window.open('https://play.google.com/store/apps/details?id=com.olaidigitalstudios.rotatle', '_blank');
    }
  }
}

export const appUpdateManager = new AppUpdateManager();
export { FlexibleUpdateInstallStatus, AppUpdateAvailability };
