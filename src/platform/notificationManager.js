import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const DAILY_NOTIFICATION_ID = 1001;
const TEST_NOTIFICATION_ID = 9999;
const CHANNEL_ID = 'rotatle_daily_reminders';

class NotificationManager {
  constructor() {
    this.channelCreated = false;
  }

  /**
   * Initialize notification channels (Android)
   */
  async init() {
    if (typeof window === 'undefined') return;

    if (Capacitor.isNativePlatform()) {
      try {
        await LocalNotifications.createChannel({
          id: CHANNEL_ID,
          name: 'Daily Puzzle Reminders',
          description: 'Notifications for new daily puzzles in Rotatle',
          importance: 4, // High importance
          visibility: 1, // Public on lockscreen
          vibration: true,
          lights: true
        });
        this.channelCreated = true;
      } catch (e) {
        console.warn('Failed to create notification channel:', e);
      }
    }
  }

  /**
   * Check if notification permission is currently granted
   * @returns {Promise<boolean>}
   */
  async hasPermission() {
    if (typeof window === 'undefined') return false;

    if (Capacitor.isNativePlatform()) {
      try {
        const check = await LocalNotifications.checkPermissions();
        return check.display === 'granted';
      } catch (e) {
        return false;
      }
    }

    if (typeof window.Notification !== 'undefined') {
      return window.Notification.permission === 'granted';
    }

    return false;
  }

  /**
   * Request standard in-app notification permission (strictly bypassing system alarm settings)
   * @returns {Promise<boolean>}
   */
  async requestPermission() {
    if (typeof window === 'undefined') return false;

    if (Capacitor.isNativePlatform()) {
      try {
        // Request only 'display' permission to avoid any system settings redirect
        const result = await LocalNotifications.requestPermissions();
        return result.display === 'granted';
      } catch (e) {
        console.warn('Error requesting notification permission:', e);
        return false;
      }
    }

    if (typeof window.Notification !== 'undefined') {
      try {
        const perm = await window.Notification.requestPermission();
        return perm === 'granted';
      } catch (e) {
        return false;
      }
    }

    return false;
  }

  /**
   * Schedule recurring daily reminder at specified hour (default 9:00 AM)
   * Content is pure clean text with zero emojis/icons.
   * @param {number} hour - 24hr format (e.g. 9 for 9:00 AM)
   * @param {number} minute - minute (default 0)
   */
  async scheduleDailyReminder(hour = 9, minute = 0) {
    if (typeof window === 'undefined') return false;

    const granted = await this.hasPermission();
    if (!granted) {
      const allowed = await this.requestPermission();
      if (!allowed) return false;
    }

    if (!this.channelCreated) {
      await this.init();
    }

    if (Capacitor.isNativePlatform()) {
      try {
        // Cancel existing daily reminder before rescheduling
        await this.cancelDailyReminder();

        await LocalNotifications.schedule({
          notifications: [
            {
              id: DAILY_NOTIFICATION_ID,
              title: 'Rotatle Daily Challenge',
              body: "Today's daily puzzle is now live. Solve it to maintain your streak!",
              channelId: CHANNEL_ID,
              smallIcon: 'ic_stat_rotatle',
              iconColor: '#38BDF8',
              schedule: {
                on: {
                  hour: hour,
                  minute: minute
                },
                allowWhileIdle: true
              },
              autoCancel: true
            }
          ]
        });
        return true;
      } catch (e) {
        console.error('Failed to schedule daily notification:', e);
        return false;
      }
    }

    return true;
  }

  /**
   * Cancel scheduled daily reminder
   */
  async cancelDailyReminder() {
    if (typeof window === 'undefined') return;

    if (Capacitor.isNativePlatform()) {
      try {
        await LocalNotifications.cancel({
          notifications: [{ id: DAILY_NOTIFICATION_ID }]
        });
      } catch (e) {}
    }
  }

  /**
   * Send test notification with a delay (default 5 seconds)
   * Content is pure clean text with zero emojis/icons.
   * @param {number} delaySeconds
   * @returns {Promise<boolean>}
   */
  async sendTestReminder(delaySeconds = 5) {
    if (typeof window === 'undefined') return false;

    const granted = await this.hasPermission();
    if (!granted) {
      const allowed = await this.requestPermission();
      if (!allowed) return false;
    }

    if (!this.channelCreated) {
      await this.init();
    }

    const title = 'Rotatle Test Reminder';
    const body = 'Daily reminders are enabled. Puzzles unlock every day at 9:00 AM.';

    if (Capacitor.isNativePlatform()) {
      try {
        await LocalNotifications.cancel({
          notifications: [{ id: TEST_NOTIFICATION_ID }]
        });

        const fireAt = new Date(Date.now() + delaySeconds * 1000);
        await LocalNotifications.schedule({
          notifications: [
            {
              id: TEST_NOTIFICATION_ID,
              title: title,
              body: body,
              channelId: CHANNEL_ID,
              smallIcon: 'ic_stat_rotatle',
              iconColor: '#38BDF8',
              schedule: {
                at: fireAt,
                allowWhileIdle: true
              },
              autoCancel: true
            }
          ]
        });
        return true;
      } catch (e) {
        console.error('Failed to trigger test notification:', e);
        return false;
      }
    }

    // Web / Browser Fallback
    if (typeof window.Notification !== 'undefined' && window.Notification.permission === 'granted') {
      setTimeout(() => {
        try {
          if (navigator.serviceWorker && navigator.serviceWorker.controller) {
            navigator.serviceWorker.ready.then(registration => {
              registration.showNotification(title, { body: body, tag: 'rotatle-test' });
            });
          } else {
            new window.Notification(title, { body: body });
          }
        } catch (e) {
          console.warn('Web notification failed:', e);
        }
      }, delaySeconds * 1000);
      return true;
    }

    return false;
  }
}

export const notificationManager = new NotificationManager();
