import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tabs } from 'expo-router';
import { useEffect, useState } from 'react';
import Splash from '../splash';

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await AsyncStorage.getItem('authToken');
      } catch (e) {
        console.error(e);
      } finally {
        setIsReady(true);
      }
    };
    prepare();
  }, []);

  if (!isReady) {
    return <Splash />;
  }

  return (
    <Tabs
      screenOptions={({ route }) => {
        // حساب ما إذا كان هذا التاب هو الرئيسية
        const isHome = route.name === 'home/index';

        return {
          tabBarIcon: ({ color, size }) => {
            // تصغير حجم الأيقونات قليلاً لتناسب الشاشة
            const iconSize = isHome ? size : size - 2;

            if (route.name === 'home/index') {
              return <Ionicons name="home-outline" size={iconSize} color={color} />;
            }
            if (route.name === 'cart/index') {
              return <Ionicons name="cart-outline" size={iconSize} color={color} />;
            }
            if (route.name === 'profile/index') {
              return <Ionicons name="person-outline" size={iconSize} color={color} />;
            }
            if (route.name === 'login/index') {
              return <Ionicons name="log-in-outline" size={iconSize} color={color} />;
            }
            if (route.name === 'register/index') {
              return <Ionicons name="person-add-outline" size={iconSize} color={color} />;
            }
            if (route.name === 'offers/index') {
              return <Ionicons name="pricetag-outline" size={iconSize} color={color} />;
            }
            if (route.name === 'e-medicin/index') {
              return <Ionicons name="pulse-outline" size={iconSize} color={color} />;
            }
            return null;
          },
          tabBarLabel: (() => {
            // تقصير أسماء التابات الطويلة
            if (route.name === 'home/index') return 'الرئيسية';
            if (route.name === 'cart/index') return 'السلة';
            if (route.name === 'profile/index') return 'حسابي';         // تم تقصيرها
            if (route.name === 'login/index') return 'الدخول';          // تم تقصيرها
            if (route.name === 'register/index') return 'التسجيل';      // تم تقصيرها
            if (route.name === 'offers/index') return 'العروض';
            if (route.name === 'e-medicin/index') return 'الطبيب';      // تم تقصيرها
            return '';
          })(),
          tabBarActiveTintColor: '#00AEEF',
          tabBarInactiveTintColor: '#888',
          headerShown: false,
          // أنماط شريط التابات
          tabBarStyle: {
            height: 65,  // زيادة الارتفاع قليلاً
            paddingBottom: 12,
            paddingHorizontal: 2,  // هوامش جانبية صغيرة
          },
          // أنماط عناصر التاب
          tabBarItemStyle: {
            flex: 1,
            marginHorizontal: 1,   // هوامش صغيرة بين التابات
            paddingHorizontal: 0,
            maxWidth: isHome ? 60 : 50,  // حد أقصى لعرض التاب
          },
          // أنماط نص التاب
          tabBarLabelStyle: {
            fontSize: isHome ? 10 : 9,  // حجم خط أصغر
            fontWeight: isHome ? '700' : '500',
            marginTop: 1,  // تقليل المسافة بين الأيقونة والنص
            textAlign: 'center',
          },
          // إخفاء تاب index
          tabBarButton: route.name === 'index' ? () => null : undefined,
        };
      }}
    >
      {/* ترتيب التابات - الرئيسية في المنتصف */}
      <Tabs.Screen name="register/index" />
      <Tabs.Screen name="e-medicin/index" />
      <Tabs.Screen name="offers/index" />
      <Tabs.Screen name="home/index" />  {/* الرئيسية في المنتصف */}
      <Tabs.Screen name="profile/index" />
      <Tabs.Screen name="cart/index" />
      <Tabs.Screen name="login/index" />

      {/* إخفاء التاب الرئيسي */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { width: 0, height: 0, display: 'none' },
        }}
      />
    </Tabs>
  );
}