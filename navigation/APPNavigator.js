import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 🧠 هنا هنستورد الشاشات اللي هنستخدمها (ممكن تبدأ بـ Home مثلاً)
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'الرئيسية' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;