import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, Alert } from "react-native";
import styled from "styled-components/native";
import { CheckBox } from "react-native-elements";
import { apiConfig } from "@/utils/axios";
import { useLocalSearchParams } from "expo-router";

type Questao = {
  id: string;
  enunciado: string;
  imagem: string;
  alternativa_a: string;
  alternativa_b: string;
  alternativa_c: string;
  alternativa_d: string;
  alternativa_e: string;
  correta: string; // A letra da resposta correta, por exemplo, "a", "b", etc.
  nivel: string;
};

export default function Question() {
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<{ [key: string]: number | null }>(
    {}
  );
  const [score, setScore] = useState<number | null>(null);
  const params = useLocalSearchParams<{ matter: string }>();

  useEffect(() => {
    const materia = params.matter;

    if (!materia) {
      console.error("Nenhuma matéria foi selecionada!");
      setLoading(false);
      return;
    }

    console.log("ID da matéria selecionada:", materia);

    // Buscar questões relacionadas à matéria
    apiConfig
      .get(`/teste/${materia}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setQuestoes(res.data);
        } else {
          console.error("Formato inesperado da resposta:", res.data);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar exercícios:", error);
      })
      .finally(() => setLoading(false));
  }, [params.matter]);

  const handleSelect = (questionId: string, index: number) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [questionId]: index,
    }));
  };

  const handleSubmit = () => {
    // Verificar as respostas
    let correctAnswers = 0;

    questoes.forEach((questao) => {
      const selectedIndex = selected[questao.id];
      const alternativas = [
        questao.alternativa_a,
        questao.alternativa_b,
        questao.alternativa_c,
        questao.alternativa_d,
        questao.alternativa_e,
      ];
      const corretaIndex = ["a", "b", "c", "d", "e"].indexOf(
        questao.correta.toLowerCase()
      );

      if (selectedIndex === corretaIndex) {
        correctAnswers++;
      }
    });

    // Mostrar pontuação final
    setScore(correctAnswers);
    Alert.alert(
      "Resultado",
      `Você acertou ${correctAnswers} de ${questoes.length} questões!`
    );
  };

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#29CAFE" />
        <LoadingText>Carregando questões...</LoadingText>
      </LoadingContainer>
    );
  }

  if (questoes.length === 0) {
    return (
      <Container>
        <MessageText>Nenhuma questão encontrada.</MessageText>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          <Title>QUESTÕES</Title>
        </Content>

        {questoes.map((questao) => (
          <Section key={questao.id}>
            <SectionCard>
              <SectionTitle>
                <StyledTitle>{questao.enunciado}</StyledTitle>
              </SectionTitle>
              <SectionContent>
                {[
                  questao.alternativa_a,
                  questao.alternativa_b,
                  questao.alternativa_c,
                  questao.alternativa_d,
                  questao.alternativa_e,
                ]
                  .filter((alt) => alt !== null && alt !== undefined)
                  .map((alt, index) => (
                    <CheckBoxContainer key={index}>
                      <CheckBox
                        checked={selected[questao.id] === index}
                        onPress={() => handleSelect(questao.id, index)}
                        checkedColor="#06b700"
                        uncheckedColor="#636C76"
                        iconType="material"
                        checkedIcon="check-box"
                        uncheckedIcon="check-box-outline-blank"
                      />
                      <AlternativeText>{alt}</AlternativeText>
                    </CheckBoxContainer>
                  ))}
              </SectionContent>
            </SectionCard>
          </Section>
        ))}

        <ButtonContainer>
          <Button onPress={handleSubmit}>
            <ButtonText>FINALIZAR TESTE</ButtonText>
          </Button>
        </ButtonContainer>
      </ScrollView>
    </Container>
  );
}

// Estilos dos componentes

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  align-items: center;
  margin-top: 40px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #636c76;
  font-weight: 500;
`;

const Section = styled.View`
  align-items: center;
  width: 100%;
`;

const SectionCard = styled.View`
  width: 90%;
  background-color: #f6f6f6;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.View`
  width: 100%;
`;

const SectionContent = styled.View`
  width: 100%;
  border-radius: 5px;
`;

const StyledTitle = styled.Text`
  font-size: 20px;
  color: #636c76;
  text-align: left;
  flex-shrink: 1;
  margin-bottom: 15px;
`;

const AlternativeText = styled.Text`
  font-size: 18px;
  color: #636c76;
  margin-left: -10px;
  flex-wrap: wrap;
  width: 90%;
`;

const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: -20px;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background-color: #43b05c;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MessageText = styled.Text`
  font-size: 18px;
  color: #636c76;
  text-align: center;
  margin-top: 20px;
`;

const LoadingText = styled.Text`
  font-size: 18px;
  color: #636c76;
  margin-top: 10px;
`;
