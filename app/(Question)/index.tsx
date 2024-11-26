import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { CheckBox } from "react-native-elements";
import { apiConfig } from "@/utils/axios";
import { useRouter, useLocalSearchParams } from "expo-router";

export type Questao = {
  id: string;
  enunciado: string;
  imagem: string; // URL da imagem vinda do banco
  alternativa_a: string;
  alternativa_b: string;
  alternativa_c: string;
  alternativa_d: string;
  alternativa_e: string;
  correta: string; // Assume que é "a", "b", "c", etc.
  nivel: string;
};

export default function Question() {
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<{ [key: string]: number | null }>({});
  const router = useRouter();
  const params = useLocalSearchParams<{ matter: string }>();

  const allQuestionsAnswered = Object.keys(selected).length === questoes.length;

  useEffect(() => {
    const materia = params.matter;

    if (!materia) {
      console.error("Nenhuma matéria foi selecionada!");
      setLoading(false);
      return;
    }

    console.log("ID da matéria selecionada:", materia);

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

  const finalizarTeste = () => {
    const corretasTemp: Questao[] = [];
    const incorretasTemp: Questao[] = [];

    questoes.forEach((questao) => {
      const respostaUsuario = selected[questao.id];
      const indexCorreta = questao.correta.charCodeAt(0) - 97; // "a" -> 0, "b" -> 1, etc.
      if (respostaUsuario === indexCorreta) {
        corretasTemp.push(questao);
      } else {
        incorretasTemp.push(questao);
      }
    });

    console.log("Corretas:", corretasTemp);
    console.log("Incorretas:", incorretasTemp);

    router.push({
      pathname: "/(result)",
      params: {
        corretas: JSON.stringify(corretasTemp),
        incorretas: JSON.stringify(incorretasTemp),
      },
    });
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

              {/* Renderizando a imagem apenas se a URL não for vazia */}
              {questao.imagem && questao.imagem.trim() !== "" && (
                <QuestionImage
                  source={{ uri: questao.imagem }}
                  resizeMode="contain"
                />
              )}

              <SectionContent>
                {[questao.alternativa_a, questao.alternativa_b, questao.alternativa_c, questao.alternativa_d, questao.alternativa_e]
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

        <FinalizeButton
          onPress={finalizarTeste}
          disabled={!allQuestionsAnswered}
        >
          <ButtonText>
            {allQuestionsAnswered ? "FINALIZAR TESTE" : "RESPONDA TODAS AS QUESTÕES"}
          </ButtonText>
        </FinalizeButton>
      </ScrollView>
    </Container>
  );
}

const QuestionImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

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

const FinalizeButton = styled.TouchableOpacity<{ disabled: boolean }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) => (props.disabled ? "#c4c4c4" : "#43b05c")};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 20px auto;
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