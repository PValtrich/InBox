import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useLocalSearchParams } from "expo-router";

type QuestionItem = {
  id: string;
  title: string;
  isCorrect?: boolean;
};

export default function Final() {
  const { acertos, questNum, titulo } = useLocalSearchParams();
  const acertosNumber = Number(acertos);
  const questNumNumber = Number(questNum);
  const porcentagem = Number(((acertosNumber / questNumNumber) * 100).toFixed(2));
  const erros = questNumNumber - acertosNumber;

  const DATA: QuestionItem[] = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "• Ligações iônicas, covalentes e metálicas",
      isCorrect: true,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "• Hibridização dos orbitais",
      isCorrect: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "• Forças de Van der Waals",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d77",
      title: "• Densidade, ponto de fusão e ponto de ebulição",
      isCorrect: true,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d54",
      title: "• Solubilidade",
      isCorrect: false,
    },
  ];
  const Item = ({ item }: { item: QuestionItem }) => (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
      <Text
        style={{
          fontSize: 18,
          color:
            item.isCorrect === true
              ? "#00bf63"
              : item.isCorrect === false
              ? "#ff3131" 
              : "#aaa",
        }}
      >
        {item.title} -{" "}
        {item.isCorrect === true
          ? "Correta"
          : item.isCorrect === false
          ? "Incorreta"
          : "Não Respondida"}
      </Text>
    </View>
  );

  console.log("Params recebidos:", { acertos, questNum, titulo });

  if (acertos && questNum) {
    return (
      <SafeAreaView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Resultado:</Text>
          <View>
            {porcentagem <= 69 ? (
              <Text>
                Você acertou menos de 70% do teste, considere estudar mais sobre este conteúdo.
              </Text>
            ) : (
              <Text>Parabéns, seu nível nesse conteúdo é ótimo!</Text>
            )}
          </View>
          <View>
            <Text>Porcentagem: {porcentagem}%</Text>
            <Text>{acertos} questões corretas</Text>
            <Text>{erros} questões incorretas</Text>
          </View>

          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return <ActivityIndicator />;
  }
}