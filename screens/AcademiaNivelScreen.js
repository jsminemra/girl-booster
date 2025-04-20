import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AcademiaNivelScreen({ onEscolherNivel, onVoltar }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onVoltar} style={styles.voltar}>
          <Text style={styles.voltarTexto}>← Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.subtitulo}>Escolha seu</Text>
        <Text style={styles.titulo}>estilo de treino</Text>

        <TouchableOpacity style={styles.botao} onPress={() => onEscolherNivel('iniciante')}>
          <Text style={styles.emoji}>🔥</Text>
          <Text style={styles.botaoTexto}>
            Treino <Text style={styles.negrito}>Iniciante</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => onEscolherNivel('intermediario')}>
          <Text style={styles.emoji}>✈️</Text>
          <Text style={styles.botaoTexto}>
            Treino <Text style={styles.negrito}>Intermediário</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => onEscolherNivel('avancado')}>
          <Text style={styles.emoji}>🚀</Text>
          <Text style={styles.botaoTexto}>
            Treino <Text style={styles.negrito}>Avançado</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  wrapper: {
    width: '100%',
    maxWidth: 500,
    paddingHorizontal: 20,
  },
  voltar: {
    marginBottom: 20,
  },
  voltarTexto: {
    fontFamily: 'Inter_400Regular',
    color: '#ccc',
    fontSize: 16,
  },
  subtitulo: {
    fontFamily: 'Inter_400Regular',
    color: '#aaa',
    fontSize: 14,
  },
  titulo: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  emoji: {
    fontSize: 28,
    marginRight: 15,
  },
  botaoTexto: {
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    fontSize: 16,
  },
  negrito: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
});
