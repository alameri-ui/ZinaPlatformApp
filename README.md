# منصة زينة — تطبيق الجوال

تطبيق React Native / Expo لإدارة منصة زينة للتجارة الإلكترونية.

## التثبيت

```bash
npm install -g @expo/cli eas-cli
npm install
```

## التشغيل

```bash
npx expo start
```

## إعداد API

رابط الـ API: https://api.zinaapp.com

يُضبط في ملف `.env`:
```
EXPO_PUBLIC_API_URL=https://api.zinaapp.com
```

## البناء (EAS Build)

```bash
eas build --platform android --profile preview  # APK
eas build --platform ios --profile preview      # IPA
eas build --platform all                        # كلاهما
```
