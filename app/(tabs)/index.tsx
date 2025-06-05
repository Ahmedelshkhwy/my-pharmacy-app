// هذا الملف يقوم بتوجيه المستخدم إلى الصفحة الرئيسية
import { Redirect } from 'expo-router';

// يجب أن نضيف هذا التعليق لمنع expo-router من جعله تاب
// @ts-ignore-next-line
export const unstable_settings = {
  isHidden: true, // هذا يخبر expo-router أن لا يجعل هذا المسار تاب
};

export default function Index() {
  // توجيه المستخدم تلقائياً إلى الصفحة الرئيسية
  return <Redirect href="/(tabs)/home" />;
}

