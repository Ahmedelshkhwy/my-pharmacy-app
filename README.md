# 💊 My Pharmacy App

تطبيق صيدلية متكامل لإدارة الطلبات، العملاء، الفروع، والتوصيل باستخدام React Native و Node.js.

---

## 📱 الواجهة (Frontend)
- *اللغة*: JavaScript / TypeScript
- *الإطار*: React Native + Expo
- *التصميم*: Tailwind CSS (NativeWind)
- *المميزات*:
  - شاشة تسجيل دخول وتسجيل جديد
  - شاشة المنتجات والأدوية
  - صفحة تفاصيل المنتج
  - نظام Tabs لسهولة التنقل
  - دعم تحديد الموقع الجغرافي

---

## ⚙ الخلفية (Backend)
- *اللغة*: JavaScript (Node.js)
- *الإطار*: Express.js
- *قاعدة البيانات*: MongoDB (باستخدام Mongoose)
- *المجلدات*:
  - config: إعداد الاتصال بقاعدة البيانات
  - controllers: وظائف المعالجة
  - routes: تحديد المسارات (API)
  - models: تعريفات الجداول
  - middleware: التحقق من التوكن والصلاحيات

---

## 🗃 قاعدة البيانات (Database Schema)
- Users (العملاء)
- Orders (الطلبات)
- Products (الأدوية)
- Branches (الفروع)

---

## 🚀 طريقة التشغيل
```bash
# تشغيل الواجهة الأمامية (Frontend)
cd app
npx expo start

# تشغيل الخادم (Backend)
cd backend
node server.js
