import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!name || !email || !phone || !password || !confirmPassword) {
            Alert.alert('خطأ', 'يرجى تعبئة جميع الحقول');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('خطأ', 'كلمتا المرور غير متطابقتين');
            return;
        }
        // هنا يمكنك إضافة منطق التسجيل الفعلي
        Alert.alert('تم', 'تم إنشاء الحساب بنجاح!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>إنشاء حساب جديد</Text>
            <TextInput
                style={styles.input}
                placeholder="الاسم الكامل"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="البريد الإلكتروني"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="رقم الجوال"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="كلمة المرور"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="تأكيد كلمة المرور"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>تسجيل</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#E6F3F7',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 32,
        fontWeight: 'bold',
        color: '#222',
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 12,
        marginBottom: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'right',
    },
    button: {
        backgroundColor: '#00AEEF',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginTop: 12,
        marginBottom: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});