import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>تسجيل الدخول</Text>

      <TextInput
        placeholder="اسم المستخدم أو البريد الإلكتروني"
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="كلمة المرور"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>دخول</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>هل نسيت كلمة المرور؟</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>إنشاء حساب جديد</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F3F7',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#00AEEF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#007AFF',
    textAlign: 'center',
    marginVertical: 8,
  },
});