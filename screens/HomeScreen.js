import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageWidth = Math.min(screenWidth * 0.95, 400);
const imageHeight = imageWidth / (933 / 621);

export default function HomeScreen({ nome, email, onLogout, onAcessarTreino }) {
  return (
    <View style={styles.fullscreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box}>
          <View style={styles.card}>
            <Text style={styles.welcome}>
              Seja bem-vinda, <Text style={styles.bold}>{nome}</Text> 💪
            </Text>
            <Text style={styles.email}>Seu e-mail: {email}</Text>
          </View>

          <Text style={styles.subTitle}>A sua evolução está aqui 👇</Text>

          <TouchableOpacity onPress={onAcessarTreino} style={styles.imageCard}>
            <Image
              source={require('../assets/images/cliqueaqui.png')}
              style={[styles.mainImage, { width: imageWidth, height: imageHeight }]}
            />
          </TouchableOpacity>

          <Text style={styles.kitTitle}>Kit Corpinho de Verão</Text>

          <TouchableOpacity style={styles.kitCard}>
            <Image
              source={require('../assets/images/girlhack.png')}
              style={styles.kitIcon}
            />
            <View>
              <Text style={styles.kitLabel}>Girl</Text>
              <Text style={styles.kitText}>hack</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.kitCard}>
            <Image
              source={require('../assets/images/bumbummodelado.png')}
              style={styles.kitIcon}
            />
            <View>
              <Text style={styles.kitLabel}>Desafio</Text>
              <Text style={styles.kitText}>bumbum modelado</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.kitCard}>
            <Image
              source={require('../assets/images/receitas.png')}
              style={styles.kitIcon}
            />
            <View>
              <Text style={styles.kitLabel}>100 Receitas</Text>
              <Text style={styles.kitText}>Cetogênicas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutText}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: '#111',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  box: {
    width: '100%',
    maxWidth: 400,
  },
  card: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  welcome: {
    fontFamily: 'Inter_400Regular',
    color: '#ccc',
    fontSize: 14,
  },
  email: {
    fontFamily: 'Inter_400Regular',
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  bold: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
  subTitle: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  imageCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  mainImage: {
    resizeMode: 'cover',
    borderRadius: 12,
  },
  kitTitle: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  kitCard: {
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    gap: 10,
  },
  kitIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  kitLabel: {
    fontFamily: 'Inter_400Regular',
    color: '#ccc',
    fontSize: 12,
  },
  kitText: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#f55',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  logoutText: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
});
