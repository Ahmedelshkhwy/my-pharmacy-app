import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PRIMARY = '#23B6C7';
const PINK = '#E94B7B';
const BG = '#E6F3F7';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarBox}>
        <Image
          source={{ uri: 'https://placehold.co/120x120?text=User' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>اسم المستخدم</Text>
        <Text style={styles.email}>user@email.com</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <Ionicons name="person-outline" size={22} color={PRIMARY} style={styles.icon} />
          <Text style={styles.rowText}>تعديل البيانات الشخصية</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons name="lock-closed-outline" size={22} color={PRIMARY} style={styles.icon} />
          <Text style={styles.rowText}>تغيير كلمة المرور</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons name="cart-outline" size={22} color={PRIMARY} style={styles.icon} />
          <Text style={styles.rowText}>طلباتي</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons name="log-out-outline" size={22} color={PINK} style={styles.icon} />
          <Text style={[styles.rowText, { color: PINK }]}>تسجيل الخروج</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    padding: 20,
  },
  avatarBox: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 28,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#e0e0e0',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PRIMARY,
    marginBottom: 4,
  },
  email: {
    fontSize: 15,
    color: '#888',
    marginBottom: 2,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  rowText: {
    fontSize: 16,
    color: '#222',
    fontWeight: '600',
  },
  icon: {
    marginRight: 16,
  },
});