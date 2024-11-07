import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { CheckBox } from 'react-native-elements';
import { Link as ExpoRouterLink } from 'expo-router'

const TestAtom = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: '',
        title: 'Modelos atômicos',
        text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        matter: 1,
        alternatives: ["Dalton", "Thomson", "Rutherford", "Bohr", "Não Sei"]
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: '',
        title: 'Estrutura Atômica',
        text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        matter: 2,
        alternatives: ["Nêutrons", "Prótons", "Elétrons", "Quarks", "Não Sei"]
    }
];

export default function Question() {
    const [selected, setSelected] = useState<{ [key: string]: number | null }>({});

    const handleSelect = (testId: string, index: number) => {
        setSelected((prevSelected) => ({
            ...prevSelected,
            [testId]: index
        }));
    };

    return (
        <Container>
            <ScrollView>
                <Content>
                    <Title>PROPRIEDADES DA MATÉRIA</Title>                  
                </Content>

                {TestAtom.map((test) => (
                    <Section key={test.id}>
                        <SectionCard>
                            <SectionTitle>
                                <StyledTitle>{test.title}</StyledTitle>
                            </SectionTitle>
                            <SectionContent>
                                {test.alternatives.map((alt, index) => (
                                    <CheckBoxContainer key={index}>
                                        <CheckBox
                                            checked={selected[test.id] === index}
                                            onPress={() => handleSelect(test.id, index)}
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
                <SectionLinik href="/(result)" style={{marginTop: 20, marginLeft: 20}}>
                    <Button>
                    <ButtonText>ADICIONAR</ButtonText>
                    </Button>
                </SectionLinik>
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
    color: #636C76;
    font-weight: 500;
`;

const Section = styled.View`
    align-items: center;
    width: 100%;
`;

const SectionCard = styled.View`
    width: 90%;
    background-color: #F6F6F6;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px;
    align-items: center;
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
    color: #636C76;
    text-align: left;
    flex-shrink: 1;
    margin-bottom: 15px;
`;

const AlternativeText = styled.Text`
    font-size: 18px;
    color: #636C76;
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

const Button = styled.View`
  width: 150px;
  height: 50px;
  background-color: #43B05C;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 50px;
`;

const SectionLinik = styled(ExpoRouterLink)`
`;