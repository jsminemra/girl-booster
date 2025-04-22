import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageWidth = Math.min(screenWidth * 0.95, 400); // 95% da tela ou no máximo 400px
const imageHeight = (imageWidth / 935) * 622; // proporção original da imagem

export default function LocalTreinoScreen({ onEscolherLocal, onVoltar }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onVoltar}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Onde você vai</Text>
        <Text style={styles.subtitle}>treinar hoje?</Text>
      </View>

      <TouchableOpacity
        onPress={() => onEscolherLocal('academia')}
        style={styles.card}
      >
        <Image
          source={require('../assets/images/acad.png')}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onEscolherLocal('casa')}
        style={styles.card}
      >
        <Image
          source={require('../assets/images/casa.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  voltar: {
    fontFamily: 'Inter_400Regular',
    color: '#888',
    fontSize: 16,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 24,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    fontSize: 18,
    marginTop: 4,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: 12,
  },
});
