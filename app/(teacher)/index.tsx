import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";
import { Icon } from "react-native-elements";

export default function PageTeacher() {
  const [levelVisible, setLevelVisible] = useState(false);
  const [areaVisible, setAreaVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("Nível");
  const [selectedArea, setSelectedArea] = useState("Área");

//   const handleImageUpload = () => {
//     Alert.alert("Imagem", "Função de anexar imagem disparada!");
//   };

  const levels = ["1", "2", "3"];
  const areas = ["Matemática", "Química", "Física", "Biologia"];

  return (
    <All>
      <StyledImageBackground source={require("../../assets/images/Lab.png")}>
        <TextStyled>BEM VINDO À PÁGINA DO PROFESSOR</TextStyled>
        <TextSubTitle>
          Compartilhe seus Conteúdos, Materiais Didáticos e Ferramentas Educativas
        </TextSubTitle>
      </StyledImageBackground>

      <PathContainer>
        <CardPath>
          <WaveBackground>
            <Svg height="100%" width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <Path
                fill="#00CFFD"
                d="M0,0L48,32C96,64,192,128,288,144C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </Svg>
            <ImageContainer>
              <Image
                source={require("../../assets/images/IconsM/Question.png")}
                style={{ width: 40, height: 40, position: "absolute", bottom: 60, alignSelf: "center" }}
                resizeMode="contain"
              />
            </ImageContainer>
          </WaveBackground>
          <CardText>ADICIONAR QUESTÕES</CardText>
        </CardPath>

        <CardPath>
          <WaveBackground>
            <Svg height="100%" width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <Path
                fill="#9B51E0"
                d="M0,0L48,32C96,64,192,128,288,144C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </Svg>
            <ImageContainer>
              <Image
                source={require("../../assets/images/IconsM/Edit.png")}
                style={{ width: 40, height: 40, position: "absolute", bottom: 60, alignSelf: "center" }}
                resizeMode="contain"
              />
            </ImageContainer>
          </WaveBackground>
          <CardText>EXCLUA E EDITE</CardText>
        </CardPath>
      </PathContainer>

      <BoxTitle>
        <Icon name="quiz" color="#636C76" size={35} />
        <SectionTitle>ADICIONAR QUESTÕES</SectionTitle>
      </BoxTitle>

      <AddQuestion>
        <Question>
          <TextSection>
            <Fall>
              <TextQuestion>ADICIONAR QUESTÕES:</TextQuestion>
            </Fall>
          </TextSection>
          <InputView style={{alignItems: "center"}}>
            <InputText
              placeholder="Digite a questão"
              placeholderTextColor="#a1a1a1"
            />
          </InputView>
        </Question>

        <Question>
          <TextSection>
            <Fall>
              <TextQuestion>ALTERNATIVAS:</TextQuestion>
            </Fall>
          </TextSection>
          <InputView style={{alignItems: "center"}}>
            {["A", "B", "C", "D", "E"].map((letter) => (
              <InputText
                key={letter}
                style={{ height: 50, marginBottom: 7 }}
                placeholder={`${letter}) Alternativa`}
                placeholderTextColor="#a1a1a1"
              />
            ))}
          </InputView>
        </Question>

        

        <View style={{width: '100%'}}>
        <Question>
          <TextSection>
            <Fall>
              <TextQuestion>NÍVEL</TextQuestion>
            </Fall>
          </TextSection>
          <InputView style={{alignItems: "center"}}>
            <View style={{
                width: '90%'
            }}>
            <InputText style={{
                width: 75,
                height: 50,
                }}>
            </InputText>
            </View>
          </InputView>
        </Question>

        <Question>
          <TextSection>
            <Fall>
              <TextQuestion>ÁREA</TextQuestion>
            </Fall>
          </TextSection>
          <InputView style={{alignItems: "center"}}>
            <View style={{
                width: '90%'
            }}>
            <InputText style={{
                width: 205,
                height: 50,
                }}>
            </InputText>
            </View>
          </InputView>
        </Question>

        <Question>
          <TextSection>
            <Fall>
              <TextQuestion>SUBÁREA</TextQuestion>
            </Fall>
          </TextSection>
          <InputView style={{alignItems: "center"}}>
            <View style={{
                width: '90%'
            }}>
            <InputText style={{
                width: 205,
                height: 50,
                }}>
            </InputText>
            <Question>

            <Button>
                <ButtonText>ADICIONAR</ButtonText>
            </Button>
        </Question>
            </View>
          </InputView>
        </Question>
        
        </View>
      </AddQuestion>

      <BoxTitle style={{backgroundColor: '#29CAFE'}}>
        <Icon name="quiz" color="#636C76" size={35} />
        <SectionTitle>EXCLUA E EDITE</SectionTitle>
      </BoxTitle>

      <AddQuestion>
      <Question>
          <TextSection>
            <Fall>
              <TextQuestion>ÁREA</TextQuestion>
            </Fall>
          </TextSection>
          <InputView style={{alignItems: "center"}}>
            <View style={{
                width: '90%'
            }}>
            <InputText style={{
                width: 205,
                height: 50,
                }}>
            </InputText>
            <Question>

        </Question>
            </View>
          </InputView>
        </Question>

        <Question>
          <TextSection>
            <Fall>
              <TextQuestion>SUBÁREA</TextQuestion>
            </Fall>
          </TextSection>
          <InputView style={{alignItems: "center"}}>
            <View style={{
                width: '90%'
            }}>
            <InputText style={{
                width: 205,
                height: 50,
                }}>
            </InputText>
            <Question>
                
        </Question>
            </View>
          </InputView>
        </Question>
      </AddQuestion>
    </All>
  );
}

// Estilos usando styled-components

const All = styled(ScrollView)`
  flex: 1;
  background-color: #f2f2f2;    
`;

const StyledImageBackground = styled(ImageBackground)`
  width: 100%;
  height: 242px;
  justify-content: center;
  align-items: center;
`;

const TextStyled = styled(Text)`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const TextSubTitle = styled(Text)`
  color: white;
  font-size: 12px;
`;

const PathContainer = styled(View)`
  width: 100%;
  height: 110px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const CardPath = styled(View)`
  width: 180px;
  height: 100%;
  background-color: #f7f7f7;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;

const WaveBackground = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75%;
`;

const ImageContainer = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CardText = styled(Text)`
  color: white;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
`;

const BoxTitle = styled(View)`
  background: #eabc54;
  height: 50px;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  gap: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 15px;
`;

const SectionTitle = styled(Text)`
  font-size: 20px;
  color: #636c76;
`;

const AddQuestion = styled(View)`
`;

const Question = styled(View)`
  width: 100%;
`;

const InputView = styled(View)`
  width: 100%;
`;

const InputText = styled.TextInput`
  width: 380px;
  height: 185px;
  background-color: #f2f2f2;
  border-radius: 5px;
  border: 2px solid #e6e9ec;
  color: #a1a1a1;
  font-size: 15px;
`;

const ButtonText = styled(Text)`
  font-size: 15px;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const Button = styled(View)`
  width: 150px;
  height: 50px;
  background-color: #43B05C;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
`;

const Dropdown = styled(View)`
  background-color: #f2f2f2;
  border-radius: 5px;
  border: 2px solid #e6e9ec;
  position: absolute;
  top: 50px; /* Ajuste a posição conforme necessário */
  width: 100%;
  max-height: 150px;
  overflow: hidden;
`;

const DropdownItem = styled(TouchableOpacity)`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e6e9ec;
`;

const DropdownText = styled(Text)`
  color: #636c76;
`;

const TextSection = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Fall = styled(View)`
  width: 380px;
`;

const TextQuestion = styled(Text)`
  font-size: 20px;
  color: #636c76;
  font-weight: 500;
  margin-top: 15px;
`;
