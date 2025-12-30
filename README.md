# Messenger SSL Pinning Bypass

Frida script to bypass SSL certificate pinning in Facebook Messenger Android

## Requirements

- Frida 17.5.2
- Rooted Android device or emulator
- Facebook Messenger v537.0.0.52.109 (com.facebook.orca)

Working on Android 16 BP2A arm64-v8a with Magisk 30.6

## Usage

```bash
frida -U -l bypass_ssl_messenger.js -f com.facebook.orca
```

## Resources

- [Frida Documentation](https://frida.re/)
- [APK Download](https://www.apkmirror.com/apk/facebook-2/messenger/facebook-messenger-537-0-0-52-109-release/)