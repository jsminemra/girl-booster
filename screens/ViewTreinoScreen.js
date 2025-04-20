import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { globalContainer } from '../styles/globalStyles';

const treinos = {
  casa: {
    iniciante: {
      segunda: [
        {
          nome: 'Agachamento Livre',
          video: 'https://www.youtube.com/shorts/iSePrZvXDu0',
          series: '4',
          repeticoes: '10-12',
          descricao: 'Padrão do agachamento livre sem equipamento.',
        },
        {
          nome: 'Agachamento Afundo',
          video: 'https://www.youtube.com/watch?v=Q72gWsXKFGA',
          series: '3',
          repeticoes: '10-12',
          descricao: 'Afundo alternado com peso corporal.',
        },
      ],
      quarta: [
        {
          nome: 'Rosca Bíceps com Garrafa',
          video: 'https://www.youtube.com/watch?v=OhU7r8jdJ_M',
          series: '3',
          repeticoes: '10-12',
          descricao: 'Usar garrafa de água como peso.',
        },
      ],
      sexta: [
        {
          nome: 'Stiff',
          video: 'https://www.youtube.com/watch?v=aWChfydo6rg',
          series: '4',
          repeticoes: '12-15',
          descricao: 'Stiff com peso improvisado.',
        },
      ],
    },
  },
};

export default function ViewTreinoScreen({ nome, local = 'casa', nivel = 'iniciante' }) {
  const dados = treinos[local]?.[nivel] || {};

  return (
    <ScrollView contentContainerStyle={globalContainer.container}>
      <Text style={styles.title}>Treino {nivel.toUpperCase()} em {local.toUpperCase()}</Text>
      <Text style={styles.subtitle}>Olá, {nome}! Aqui está sua divisão da semana:</Text>

      {Object.keys(dados).map((dia) => (
        <View key={dia} style={styles.diaBox}>
          <Text style={styles.diaTitle}>{dia.toUpperCase()}</Text>
          {dados[dia].map((ex, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.nome}>{ex.nome}</Text>
              <Text style={styles.txt}>Séries: {ex.series} | Repetições: {ex.repeticoes}</Text>
              <Text style={styles.txt}>{ex.descricao}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(ex.video)}>
                <Text style={styles.botao}>▶ Ver execução no YouTube</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#ccc',
    marginBottom: 20,
    textAlign: 'center',
  },
  diaBox: {
    marginBottom: 25,
    width: '100%',
  },
  diaTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    color: '#22C55E',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  txt: {
    fontFamily: 'Inter_400Regular',
    color: '#ccc',
    fontSize: 13,
    marginBottom: 5,
  },
  botao: {
    fontFamily: 'Inter_700Bold',
    color: '#4FD1C5',
    fontSize: 13,
  },
});
