import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (nome && email) {
      onLogin(nome, email);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image
          source={require('../assets/images/LOGO 1.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Faça seu</Text>
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu primeiro nome"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Email de compra"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar meu treino</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginBox: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 0,
  },
  loginTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 30,
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 6,
    fontFamily: 'Inter_400Regular',
  },
  button: {
    backgroundColor: '#22C55E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 16,
  },
});
