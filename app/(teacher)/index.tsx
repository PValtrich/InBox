import React from "react";
import { View, Text, ImageBackground, Image } from 'react-native';
import styled from "styled-components/native";
import Svg, { Path } from 'react-native-svg';
import { Icon } from 'react-native-elements';

export default function PageTeacher() {
    return (
        <All>
            <StyledImageBackground source={require('../../assets/images/Lab.png')}>
                <TextStyled>BEM VINDO À PÁGINA DO PROFESSOR</TextStyled>
                <TextSubTitle>Compartilhe seus Conteúdos, Materiais Didáticos e Ferramentas Educativas</TextSubTitle>
            </StyledImageBackground>
            <PathContainer>
                <CardPath>
                    <WaveBackground>
                        <Svg
                            height="100%"
                            width="100%"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                        >
                            <Path
                                fill="#00CFFD"
                                d="M0,0L48,32C96,64,192,128,288,144C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </Svg>
                        <ImageContainer>
                            <Image
                                source={require('../../assets/images/IconsM/Question.png')}
                                style={{ width: 40, height: 40, position: 'absolute', bottom: 60, alignSelf: 'center' }}
                                resizeMode="contain"
                            />
                        </ImageContainer>
                    </WaveBackground>
                    <CardText>ADICIONAR QUESTÕES</CardText>
                </CardPath>

                <CardPath>
                    <WaveBackground>
                        <Svg
                            height="100%"
                            width="100%"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                        >
                            <Path
                                fill="#9B51E0"
                                d="M0,0L48,32C96,64,192,128,288,144C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </Svg>
                        <ImageContainer>
                            <Image
                                source={require('../../assets/images/IconsM/Edit.png')}
                                style={{ width: 40, height: 40, position: 'absolute', bottom: 60, alignSelf: 'center' }}
                                resizeMode="contain"
                            />
                        </ImageContainer>
                    </WaveBackground>
                    <CardText>EXCLUA E EDITE</CardText>
                </CardPath>
            </PathContainer>

            <BoxTitle>
                <Icon name='quiz' color={'#636C76'} size={35} />
                <SectionTitle>ADICIONAR QUESTÕES</SectionTitle>
            </BoxTitle>

            <AddQuestion>
                <Question>
                    <TextSection>
                        <Fall>
                            <TextQuestion>
                                ADICIONAR QUESTÕES:
                            </TextQuestion>
                        </Fall>
                    </TextSection>
                    <InputView>
                        <InputText 
                            placeholder="Digite a questão..." 
                            placeholderTextColor={'#a1a1a1'}/>
                    </InputView>
                </Question>

                <Question>
                    <TextSection>
                        <Fall>
                            <TextQuestion>
                                ALTERNATIVAS:
                            </TextQuestion>
                        </Fall>
                    </TextSection>
                    <InputView>
                        <InputText 
                            style={{height: 50,
                                    marginBottom: 7
                            }}
                            placeholder="A) Alternativa..." 
                            placeholderTextColor={'#a1a1a1'}/>
                        <InputText 
                            style={{height: 50,
                                    marginBottom: 7
                            }}
                            placeholder="B) Alternativa..." 
                            placeholderTextColor={'#a1a1a1'}/>
                        <InputText 
                            style={{height: 50,
                                    marginBottom: 7
                            }}
                            placeholder="C) Alternativa..." 
                            placeholderTextColor={'#a1a1a1'}/>
                        <InputText 
                            style={{height: 50,
                                    marginBottom: 7
                            }}
                            placeholder="D) Alternativa..." 
                            placeholderTextColor={'#a1a1a1'}/>
                        <InputText 
                            style={{height: 50,
                                    marginBottom: 7
                            }}
                            placeholder="E) Alternativa..." 
                            placeholderTextColor={'#a1a1a1'}/>
                    </InputView>
                </Question>
            </AddQuestion>
        </All>
    );
}

const All = styled.ScrollView`
    flex: 1;
    background-color: #f2f2f2;
`;

const StyledImageBackground = styled(ImageBackground)`
    width: 100%;
    height: 242px;
    justify-content: center;
    align-items: center;    
`;

const TextStyled = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: 500;
`;

const TextSubTitle = styled.Text`
    color: white;
    font-size: 12px;
`;

const PathContainer = styled.View`
    width: 100%;
    height: 110px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
`;

const CardPath = styled.View`
    width: 180px;
    height: 100%;
    background-color: #F7F7F7;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
`;

const WaveBackground = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75%;
`;

const ImageContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const CardText = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
`;

const BoxTitle = styled.View`
    background: #EABC54;
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

const SectionTitle = styled.Text`
    font-size: 20px;
    color: #636C76;
`;

const AddQuestion = styled.View`
`;

const Question = styled.View`
    width: 100%;
`;

const InputView = styled.View`
    width: 100%;
    align-items: center;
`;

const TextQuestion = styled.Text`
    font-size: 20px;
    color: #636C76;
    font-weight: 500;
    margin-top: 15px;
`;

const InputText = styled.TextInput`
    width: 380;
    height: 185px;
    background-color: #F2F2F2;
    border-radius: 5px;
    border: 2px solid #E6E9EC;
    color: #a1a1a1;
    font-size: 15px;
`;

const TextSection = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Fall = styled.View`
    width: 380;
`;