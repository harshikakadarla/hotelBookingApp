import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.7:5000/login', { username, password });
      Alert.alert('Success', response.data.message);
      console.log('sucess')
      navigation.navigate('Home', { user: response.data.user }); 
    } catch (error) {
      console.log('entered catch')
      if (error.response) {
        Alert.alert('Error', error.response.data.error);
      } else {
        Alert.alert('Error', 'Network error');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '100%', padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5 },
  button: { padding: 10, backgroundColor: 'blue', borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16 },
  link: { marginTop: 20, color: 'blue' },
});

export default LoginScreen;


