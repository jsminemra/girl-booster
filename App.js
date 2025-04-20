import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import LocalTreinoScreen from './screens/LocalTreinoScreen';
import CasaNivelScreen from './screens/CasaNivelScreen';
import AcademiaNivelScreen from './screens/AcademiaNivelScreen';
import TreinoCasaScreen from './screens/TreinoCasaScreen';
import TreinoAcademiaScreen from './screens/TreinoAcademiaScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const [telaAtual, setTelaAtual] = useState('login');
  const [usuario, setUsuario] = useState({ nome: '', email: '' });
  const [localSelecionado, setLocalSelecionado] = useState('');
  const [nivelSelecionado, setNivelSelecionado] = useState('');

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" style={{ flex: 1, backgroundColor: '#111' }} />;
  } else {
    SplashScreen.hideAsync();
  }

  // Login
  const handleLogin = (nome, email) => {
    setUsuario({ nome, email });
    setTelaAtual('home');
  };

  const handleLogout = () => {
    setUsuario({ nome: '', email: '' });
    setTelaAtual('login');
  };

  const handleAcessarTreino = () => {
    setTelaAtual('localTreino');
  };

  const handleEscolherLocal = (local) => {
    setLocalSelecionado(local);
    if (local === 'casa') {
      setTelaAtual('casaNivel');
    } else if (local === 'academia') {
      setTelaAtual('academiaNivel');
    }
  };

  const handleEscolherNivel = (nivel) => {
    setNivelSelecionado(nivel);
    if (localSelecionado === 'casa') {
      setTelaAtual('treinoCasa');
    } else if (localSelecionado === 'academia') {
      setTelaAtual('treinoAcademia');
    }
  };

  const voltarHome = () => setTelaAtual('home');
  const voltarParaLocalTreino = () => setTelaAtual('localTreino');
  const voltarParaNivelCasa = () => setTelaAtual('casaNivel');
  const voltarParaNivelAcademia = () => setTelaAtual('academiaNivel');

  if (telaAtual === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (telaAtual === 'home') {
    return (
      <HomeScreen
        nome={usuario.nome}
        email={usuario.email}
        onLogout={handleLogout}
        onAcessarTreino={handleAcessarTreino}
      />
    );
  }

  if (telaAtual === 'localTreino') {
    return (
      <LocalTreinoScreen
        onEscolherLocal={handleEscolherLocal}
        onVoltar={voltarHome}
      />
    );
  }

  if (telaAtual === 'casaNivel') {
    return (
      <CasaNivelScreen
        onEscolherNivel={handleEscolherNivel}
        onVoltar={voltarParaLocalTreino}
      />
    );
  }

  if (telaAtual === 'academiaNivel') {
    return (
      <AcademiaNivelScreen
        onEscolherNivel={handleEscolherNivel}
        onVoltar={voltarParaLocalTreino}
      />
    );
  }

  if (telaAtual === 'treinoCasa') {
    return (
      <TreinoCasaScreen
        nivel={nivelSelecionado}
        onVoltar={voltarParaNivelCasa}
      />
    );
  }

  if (telaAtual === 'treinoAcademia') {
    return (
      <TreinoAcademiaScreen
        nivel={nivelSelecionado}
        onVoltar={voltarParaNivelAcademia}
      />
    );
  }

  return <View />;
}
