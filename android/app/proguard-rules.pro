# Project specific ProGuard / R8 rules for ROTATLE (Capacitor Android)

# 1. Line numbers & Attributes for Google Play Console Deobfuscation
-keepattributes SourceFile,LineNumberTable
-keepattributes InnerClasses,EnclosingMethod
-keepattributes Signature
-keepattributes *Annotation*

# 2. WebView & JavaScript Interface Bridges
-keepattributes JavascriptInterface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keepclassmembers class * extends android.webkit.WebViewClient {
    public void *(android.webkit.WebView, java.lang.String);
    public void *(android.webkit.WebView, java.lang.String, android.graphics.Bitmap);
}
-keepclassmembers class * extends android.webkit.WebChromeClient {
    public void *(android.webkit.WebView, java.lang.String);
}

# 3. Capacitor Core & Plugin Interfaces
-keep class com.getcapacitor.** { *; }
-keep interface com.getcapacitor.** { *; }
-keepclassmembers class * extends com.getcapacitor.Plugin {
    public <methods>;
}
-keepclassmembers class * {
    @com.getcapacitor.PluginMethod public *;
    @com.getcapacitor.annotation.CapacitorPlugin public *;
}
-keep class com.getcapacitor.Bridge { *; }
-keep class com.getcapacitor.Plugin { *; }
-keep class com.getcapacitor.PluginHandle { *; }
-keep class com.getcapacitor.JSObject { *; }
-keep class com.getcapacitor.JSArray { *; }
-keep class com.getcapacitor.BridgeActivity { *; }

# 4. Cordova Compatibility Layer
-keep class org.apache.cordova.** { *; }
-keep interface org.apache.cordova.** { *; }
-keepclassmembers class * extends org.apache.cordova.CordovaPlugin {
    public <methods>;
}

# 5. Local App & Custom Plugins (MainActivity & AdMobPlugin)
-keep class com.olaidigitalstudios.rotatle.** { *; }
-keepclassmembers class com.olaidigitalstudios.rotatle.** { *; }

# 6. Google Mobile Ads (AdMob) & Play Services
-keep class com.google.android.gms.ads.** { *; }
-keep interface com.google.android.gms.ads.** { *; }
-keep class com.google.android.gms.common.** { *; }
-keep class com.google.android.gms.tasks.** { *; }
-keep class com.google.android.play.core.** { *; }
-keep class com.android.billingclient.** { *; }

# 7. Benign Warning Suppression
-dontwarn com.google.android.gms.**
-dontwarn com.google.errorprone.annotations.**
-dontwarn org.apache.cordova.**
