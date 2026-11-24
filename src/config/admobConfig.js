/**
 * Google AdMob Configuration
 * Stores Ad Unit IDs and behavior settings
 */

export const AdMobConfig = {
  // Toggle testing mode (set false for production store releases)
  isTesting: false,

  // Production Ad Unit IDs (Provided by Google AdMob Console)
  production: {
    appId: 'ca-app-pub-4890313674539327~7104584458',
    banner: 'ca-app-pub-4890313674539327/9528491258',
    interstitial: 'ca-app-pub-4890313674539327/8753456476',
    rewarded: 'ca-app-pub-4890313674539327/6062965529'
  },

  // Official Google Sample Ad Unit IDs for Safe Local Testing
  test: {
    appId: 'ca-app-pub-3940256099942544~3347511713',
    banner: 'ca-app-pub-3940256099942544/6300978111',
    interstitial: 'ca-app-pub-3940256099942544/1033173712',
    rewarded: 'ca-app-pub-3940256099942544/5224354917'
  },

  // Policy-Friendly Frequency & Experience Settings
  behavior: {
    interstitialLevelInterval: 3, // Trigger interstitial every 3 completed levels
    interstitialMinCooldownSec: 75, // Minimum 75s between interstitial ads
    bannerMarginBottom: 0 // Pixel offset from bottom
  }
};
