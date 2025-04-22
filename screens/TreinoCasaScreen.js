import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  StyleSheet,
} from 'react-native';

import TreinosCasaIniciante from '../data/TreinosCasaIniciante';
import TreinosCasaIntermediario from '../data/TreinosCasaIntermediario';
import TreinosCasaAvancado from '../data/TreinosCasaAvancado';

const diasSemana = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];

const gruposMusculares = {
  segunda: 'Glúteos',
  terça: 'Costas, Ombros e Braços',
  quarta: 'Quadríceps',
  quinta: 'Abdômen',
  sexta: 'Posterior de Coxa',
};

const nomeFormatado = {
  segunda: 'Segunda-feira',
  terça: 'Terça-feira',
  quarta: 'Quarta-feira',
  quinta: 'Quinta-feira',
  sexta: 'Sexta-feira',
};

export default function TreinoCasaScreen({ onVoltar, nivel }) {
  const [diaSelecionado, setDiaSelecionado] = useState('segunda');
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [statusTreinos, setStatusTreinos] = useState({});

  const mudarStatus = (index) => {
    const estados = ['nao', 'andamento', 'feito'];
    const chave = `${nivel}_${diaSelecionado}_${index}`;
    const atual = statusTreinos[chave] || 'nao';
    const proximo = estados[(estados.indexOf(atual) + 1) % estados.length];
    setStatusTreinos({ ...statusTreinos, [chave]: proximo });
  };

  const coresStatus = {
    nao: '#666',
    andamento: '#facc15',
    feito: '#22c55e',
  };

  const formatarStatus = (valor) => {
    switch (valor) {
      case 'andamento':
        return 'Em andamento';
      case 'feito':
        return 'Feito';
      case 'nao':
      default:
        return 'Não iniciado';
    }
  };

  const getTreinosPorNivel = () => {
    if (nivel === 'intermediario') return TreinosCasaIntermediario;
    if (nivel === 'avancado') return TreinosCasaAvancado;
    return TreinosCasaIniciante;
  };

  const treinos = getTreinosPorNivel();

  const grupoMuscularAtual =
    nivel === 'iniciante' && diaSelecionado === 'quarta'
      ? 'Bíceps e Abdomen'
      : gruposMusculares[diaSelecionado];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onVoltar}>
          <Text style={styles.voltar}>{'< Voltar'}</Text>
        </TouchableOpacity>

        <Text style={styles.subtitulo}>Treino Longo // Treino Curto</Text>
        <Text style={styles.titulo}>Casa</Text>

        <TouchableOpacity
          style={styles.dropdownToggle}
          onPress={() => setDropdownAberto(!dropdownAberto)}
        >
          <Text style={styles.dropdownTexto}>
            {nomeFormatado[diaSelecionado]} - {grupoMuscularAtual}
          </Text>
          <Text style={styles.seta}>{dropdownAberto ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {dropdownAberto && (
          <View style={styles.dropdownLista}>
            {diasSemana.map((dia) =>
              treinos[dia] ? (
                <TouchableOpacity
                  key={dia}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setDiaSelecionado(dia);
                    setDropdownAberto(false);
                  }}
                >
                  <Text style={styles.dropdownTexto}>
                    {nomeFormatado[dia]} - {(nivel === 'iniciante' && dia === 'quarta')
                      ? 'Bíceps e Abdomen'
                      : gruposMusculares[dia]}
                  </Text>
                </TouchableOpacity>
              ) : null
            )}
          </View>
        )}

        {(treinos[diaSelecionado]?.exercicios || treinos[diaSelecionado] || []).map(
          (ex, index) => {
            const chave = `${nivel}_${diaSelecionado}_${index}`;
            const statusAtual = statusTreinos[chave] || 'nao';
            return (
              <View key={index} style={styles.card}>
                <Text style={styles.nome}>{ex.nome}</Text>
                <Text style={styles.texto}>
                  Séries: {ex.series} | Repetições: {ex.repeticoes}
                </Text>
                <Text style={styles.texto}>Descrição: {ex.descricao}</Text>
                <Text style={styles.texto}>Equipamento: {ex.equipamento}</Text>

                <View style={styles.botoesContainer}>
                  {Array.isArray(ex.video) ? (
                    <>
                      {ex.video[0] && (
                        <TouchableOpacity
                          style={styles.verButton}
                          onPress={() => Linking.openURL(ex.video[0])}
                        >
                          <Text style={styles.verButtonText}>▶ VER EXECUÇÃO 1</Text>
                        </TouchableOpacity>
                      )}
                      {ex.video[1] && (
                        <TouchableOpacity
                          style={styles.verButton}
                          onPress={() => Linking.openURL(ex.video[1])}
                        >
                          <Text style={styles.verButtonText}>▶ VER EXECUÇÃO 2</Text>
                        </TouchableOpacity>
                      )}
                      {ex.video[2] && (
                        <TouchableOpacity
                          style={styles.verButton}
                          onPress={() => Linking.openURL(ex.video[2])}
                        >
                          <Text style={styles.verButtonText}>▶ VER EXECUÇÃO 3</Text>
                        </TouchableOpacity>
                      )}
                    </>
                  ) : (
                    <TouchableOpacity
                      style={styles.verButton}
                      onPress={() => Linking.openURL(ex.video)}
                    >
                      <Text style={styles.verButtonText}>▶ VER EXECUÇÃO</Text>
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    style={[styles.statusButton, { backgroundColor: coresStatus[statusAtual] }]}
                    onPress={() => mudarStatus(index)}
                  >
                    <Text style={styles.statusButtonText}>{formatarStatus(statusAtual)}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    backgroundColor: '#111',
    flexGrow: 1,
    paddingVertical: 30,
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    maxWidth: 500,
    paddingHorizontal: 20,
  },
  voltar: {
    fontFamily: 'Inter_400Regular',
    color: '#ccc',
    marginBottom: 10,
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
  dropdownToggle: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  dropdownTexto: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    fontSize: 16,
  },
  seta: {
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    fontSize: 16,
  },
  dropdownLista: {
    backgroundColor: '#222',
    borderRadius: 8,
    marginBottom: 15,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  card: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  nome: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    marginBottom: 8,
  },
  texto: {
    fontFamily: 'Inter_400Regular',
    color: '#ccc',
    marginBottom: 5,
  },
  botoesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 8,
  },
  verButton: {
    backgroundColor: '#ec4899',
    padding: 10,
    borderRadius: 6,
  },
  verButtonText: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
  statusButton: {
    padding: 10,
    borderRadius: 6,
  },
  statusButtonText: {
    fontFamily: 'Inter_700Bold',
    color: '#fff',
    textTransform: 'capitalize',
  },
});
