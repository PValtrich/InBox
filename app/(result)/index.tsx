import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Questao } from "../(question)";

const ResultScreen = () => {
  const { corretas, incorretas} = useLocalSearchParams<{
    corretas: string, incorretas: string
  }>();

  let corretasParsed = [];
  let incorretasParsed = [];

  try {
    corretasParsed = JSON.parse(corretas);
    incorretasParsed = JSON.parse(incorretas);
  } catch (error) {
    console.error("Erro ao parsear os parâmetros:", error);
  }

  console.log("Corretas recebidas:", corretasParsed);
  console.log("Incorretas recebidas:", incorretasParsed);

  const totalQuestoes = corretasParsed.length + incorretasParsed.length;
  const porcentagemAcertos =
    totalQuestoes > 0 ? ((corretasParsed.length / totalQuestoes) * 100).toFixed(2) : "0";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>

      <View style={styles.card}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{porcentagemAcertos}%</Text>
        </View>
        <Text style={styles.resultText}>
          Você acertou {corretasParsed.length} de {totalQuestoes} questões.
        </Text>
      </View>

      <Text style={styles.studyMore}>
        {parseFloat(porcentagemAcertos) < 50
          ? "Estude mais, você consegue melhorar!"
          : "Parabéns pelo ótimo desempenho!"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#636c76",
  },
  card: {
    width: "90%",
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#43b05c",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  circleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  resultText: {
    fontSize: 16,
    textAlign: "center",
    color: "#636c76",
  },
  studyMore: {
    fontSize: 16,
    color: "#ff6347",
    textAlign: "center",
    marginTop: 20,
  },
});

export default ResultScreen;