import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalContainer } from '../styles/globalStyles';

export default function EstiloTreinoScreen({ onEscolherNivel }) {
  return (
    <View style={globalContainer.container}>
      <Text style={styles.title}>Escolha seu estilo de treino</Text>

      <TouchableOpacity style={styles.card} onPress={() => onEscolherNivel('iniciante')}>
        <Text style={styles.icon}>🧯</Text>
        <Text style={styles.cardText}>Treino Iniciante</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => onEscolherNivel('intermediario')}>
        <Text style={styles.icon}>🏋️</Text>
        <Text style={styles.cardText}>Treino Intermediário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => onEscolherNivel('avancado')}>
        <Text style={styles.icon}>🔥</Text>
        <Text style={styles.cardText}>Treino Avançado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  cardText: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  icon: {
    fontSize: 30,
  },
});
