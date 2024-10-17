<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';
import { useLocalSearchParams } from "expo-router";
import { 
    Text, 
    View, 
    TouchableOpacity, 
    LayoutAnimation, 
    UIManager, 
    Platform, 
    FlatList,
} from "react-native";

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type Testes = {
    id: number,
    texto: string,
    imagem: string,
}

export default function About() {
    const { area } = useLocalSearchParams<{ area: string }>();
    const [isTipsVisible, setIsTipsVisible] = useState(true);

    const toggleTipsVisibility = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsTipsVisible(prevState => !prevState);
    };
    
    const testCards = [
        { id: '1', title: 'Teste 1', ImgIcon: 'Imagem' },
        { id: '2', title: 'Teste 2', ImgIcon: 'Imagem' },
        { id: '3', title: 'Teste 3', ImgIcon: 'Imagem' },
        { id: '4', title: 'Teste 4', ImgIcon: 'Imagem' },
    ];

    const numColumns = 2;

    const Card = ({ title }: { title: string }) => (
        <View style={{
            width: 180,
            height: 265,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
            margin: 5
        }}>
            <CardImage>
                <SubImage>
                    <ImageIcon source={require('../../assets/images/IconsM/Atomistica.png')} />
                </SubImage>
            </CardImage>
            <CardQuestTitleSection>
                <QuestTitle>MODELOS ATÔMICOS</QuestTitle>
                <SectionTitleQuest>
                    <TextQuest>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextQuest>
                </SectionTitleQuest>
            </CardQuestTitleSection>
        </View>
    );

    return (
        <Container>
            <ScrollView>
                <BoxTitle>
                    <Icon name='science' color={'#636C76'} size={35} />
                    <SectionTitle>SOBRE {area}</SectionTitle>
                </BoxTitle>

                <SectionAbout>
                    <StudyOf>
                        <HeaderContainer>
                            <HeaderText>ESTUDO {area}</HeaderText>
                        </HeaderContainer>
                        <StyledText>
                            {/* Texto explicando sobre o conteúdo */}
                        </StyledText>
                    </StudyOf>
                </SectionAbout>

                <BoxTitle style={{ backgroundColor: '#29CAFE' }}>
                    <Icon name='poll' color={'#636C76'} size={35} />
                    <SectionTitle>TESTES</SectionTitle>
                </BoxTitle>

                <Rules>
                    <SectionTestes>
                        <HeaderWithIcon>
                            <HeaderText style={{ fontSize: 20, fontWeight: '500' }}>
                                DICAS PARA UM MELHOR RESULTADO
                            </HeaderText>

                            <TouchableOpacity onPress={toggleTipsVisibility}>
                                <Icon name={isTipsVisible ? 'chevron-up' : 'chevron-down'} type='feather' color='#636C76' size={30} />
                            </TouchableOpacity>
                        </HeaderWithIcon>

                        {isTipsVisible && (
                            <TipsContainer>
                                {renderTips()}
                            </TipsContainer>
                        )}
                    </SectionTestes>
                </Rules>

                <SectionTeste>
                    <FlatList
                        data={testCards}
                        renderItem={({ item }) => <Card title={item.title} />}
                        keyExtractor={(item) => item.id}
                        numColumns={numColumns}
                        scrollEnabled={false}
                    />
                </SectionTeste>
            </ScrollView>
        </Container>
    );
}

const renderTips = () => (
    <>
        <SectionQuest>
            <Cicle><Text style={{ fontSize: 20, color: '#636C76' }}>1</Text></Cicle>
            <QuestText>FAÇA O TESTE EM UM AMBIENTE CALMO</QuestText>
        </SectionQuest>
        <StyledText style={{ fontSize: 20 }}>
            Escolha um ambiente tranquilo para fazer o teste, onde você possa se concentrar sem distrações. Isso vai ajudar a garantir que suas respostas reflitam com precisão o que você sabe, sem ser influenciado por fatores externos.        </StyledText>
        <SectionQuest>
            <Cicle><Text style={{ fontSize: 20, color: '#636C76' }}>2</Text></Cicle>
            <QuestText>CONFIE NO SEU CONHECIMENTO</QuestText>
        </SectionQuest>
        <StyledText style={{ fontSize: 20 }}>
            Ao fazer o teste, confie no que você aprendeu até agora. Tente responder as perguntas com base no que você já sabe, sem recorrer a consultas ou ajuda externa. Isso vai te dar uma visão mais clara sobre seu nível de conhecimento.
        </StyledText>

        <SectionQuest>
            <Cicle><Text style={{ fontSize: 20, color: '#636C76' }}>3</Text></Cicle>
            <QuestText>USE O RESULTADO PARA APRENDER</QuestText>
        </SectionQuest>
        <StyledText style={{ fontSize: 20 }}>
            Depois de completar o teste, analise os resultados e veja onde você foi bem e onde precisa melhorar. Use o feedback como uma ferramenta de aprendizado para reforçar suas áreas fortes e trabalhar nas fracas, ajudando no seu crescimento contínuo.
        </StyledText>
    </>

    // pra que serve
    // tantos códigos?
    // se a vida
    // não é programada
    // e as melhores coisas
    // não tem lógica

);

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

const ScrollView = styled.ScrollView`
    flex: 1;
`;

const SectionTitle = styled.Text`
    font-size: 20px;
    color: #636C76;
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
`;

const SectionAbout = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
`;

const StudyOf = styled.View`
    width: 90%;
    background: #D9D9D9;
    border-radius: 10px;
    border: 2.5px solid #A5D5EB;
    padding: 20px;
    position: relative;
`;

const HeaderContainer = styled.View`
    background-color: #A5D5EB;
    padding: 5px 15px;
    border-radius: 5px;
    position: absolute;
    top: -15px;
    left: 20px;
`;

const HeaderText = styled.Text`
    font-size: 14px;
    color: #4A4A4A;
    font-weight: bold;
`;

const StyledText = styled.Text`
    font-size: 17px;
    color: #636C76;
    margin-top: 15px;
    line-height: 22px;
`;

const Rules = styled.View`
    width: 100%;
    margin-top: 20px;
    align-items: center;
`;

const SectionTestes = styled.View`
    width: 95%;
    margin-top: 15px;
    justify-content: center;
`;

const HeaderWithIcon = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TipsContainer = styled.View`
    margin: 20px 0 30px;
`;

const QuestText = styled.Text`
    font-size: 20px;
    color: #636C76;
`;

const SectionQuest = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

const Cicle = styled.View`
    width: 35px;
    height: 35px;
    background-color: #A5D5EB;
    border-radius: 50%;
    font-size: 20px;
    color: #636C76;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
`;

const SectionTeste = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const CardImage = styled.View`
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
`;

const CardQuestTitleSection = styled.View`
    width: 100%;
    height: 40%;
    align-items: center;
`;

const ImageIcon = styled.Image`
    width: 100px;
    height: 100px;
`;

const SubImage = styled.View`
    width: 120px;
    height: 120px;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;    
    border-radius: 10px;
`;

const SectionTitleQuest = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;

const TextQuest = styled.Text`
    font-size: 13px;
    text-align: center;
    margin-top: 10px;
    color: #636C76;
`;

const QuestTitle = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #636C76;
`;
=======
import React, { useState } from "react";
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';
import { useLocalSearchParams } from "expo-router";
import { 
    Text, 
    View, 
    TouchableOpacity, 
    LayoutAnimation, 
    UIManager, 
    Platform, 
    FlatList,
} from "react-native";

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type Testes = {
    id: number,
    texto: string,
    imagem: string,
}

export default function About() {
    const { area } = useLocalSearchParams<{ area: string }>();
    const [isTipsVisible, setIsTipsVisible] = useState(true);

    const toggleTipsVisibility = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsTipsVisible(prevState => !prevState);
    };
    
    const testCards = [
        { id: '1', title: 'Teste 1', ImgIcon: 'Imagem' },
        { id: '2', title: 'Teste 2', ImgIcon: 'Imagem' },
        { id: '3', title: 'Teste 3', ImgIcon: 'Imagem' },
        { id: '4', title: 'Teste 4', ImgIcon: 'Imagem' },
    ];

    const numColumns = 2;

    const Card = ({ title }: { title: string }) => (
        <View style={{
            width: 180,
            height: 265,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
            margin: 5
        }}>
            <CardImage>
                <SubImage>
                    <ImageIcon source={require('../../assets/images/IconsM/Atomistica.png')} />
                </SubImage>
            </CardImage>
            <CardQuestTitleSection>
                <QuestTitle>MODELOS ATÔMICOS</QuestTitle>
                <SectionTitleQuest>
                    <TextQuest>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextQuest>
                </SectionTitleQuest>
            </CardQuestTitleSection>
        </View>
    );

    return (
        <Container>
            <ScrollView>
                <BoxTitle>
                    <Icon name='science' color={'#636C76'} size={35} />
                    <SectionTitle>SOBRE {area}</SectionTitle>
                </BoxTitle>

                <SectionAbout>
                    <StudyOf>
                        <HeaderContainer>
                            <HeaderText>ESTUDO {area}</HeaderText>
                        </HeaderContainer>
                        <StyledText>
                            {/* Texto explicando sobre o conteúdo */}
                        </StyledText>
                    </StudyOf>
                </SectionAbout>

                <BoxTitle style={{ backgroundColor: '#29CAFE' }}>
                    <Icon name='poll' color={'#636C76'} size={35} />
                    <SectionTitle>TESTES</SectionTitle>
                </BoxTitle>

                <Rules>
                    <SectionTestes>
                        <HeaderWithIcon>
                            <HeaderText style={{ fontSize: 20, fontWeight: '500' }}>
                                DICAS PARA UM MELHOR RESULTADO
                            </HeaderText>

                            <TouchableOpacity onPress={toggleTipsVisibility}>
                                <Icon name={isTipsVisible ? 'chevron-up' : 'chevron-down'} type='feather' color='#636C76' size={30} />
                            </TouchableOpacity>
                        </HeaderWithIcon>

                        {isTipsVisible && (
                            <TipsContainer>
                                {renderTips()}
                            </TipsContainer>
                        )}
                    </SectionTestes>
                </Rules>

                <SectionTeste>
                    <FlatList
                        data={testCards}
                        renderItem={({ item }) => <Card title={item.title} />}
                        keyExtractor={(item) => item.id}
                        numColumns={numColumns}
                        scrollEnabled={false}
                    />
                </SectionTeste>
            </ScrollView>
        </Container>
    );
}

const renderTips = () => (
    <>
        <SectionQuest>
            <Cicle><Text style={{ fontSize: 20, color: '#636C76' }}>1</Text></Cicle>
            <QuestText>FAÇA O TESTE EM UM AMBIENTE CALMO</QuestText>
        </SectionQuest>
        <StyledText style={{ fontSize: 20 }}>
            Escolha um ambiente tranquilo para fazer o teste, onde você possa se concentrar sem distrações. Isso vai ajudar a garantir que suas respostas reflitam com precisão o que você sabe, sem ser influenciado por fatores externos.        </StyledText>
        <SectionQuest>
            <Cicle><Text style={{ fontSize: 20, color: '#636C76' }}>2</Text></Cicle>
            <QuestText>CONFIE NO SEU CONHECIMENTO</QuestText>
        </SectionQuest>
        <StyledText style={{ fontSize: 20 }}>
            Ao fazer o teste, confie no que você aprendeu até agora. Tente responder as perguntas com base no que você já sabe, sem recorrer a consultas ou ajuda externa. Isso vai te dar uma visão mais clara sobre seu nível de conhecimento.
        </StyledText>

        <SectionQuest>
            <Cicle><Text style={{ fontSize: 20, color: '#636C76' }}>3</Text></Cicle>
            <QuestText>USE O RESULTADO PARA APRENDER</QuestText>
        </SectionQuest>
        <StyledText style={{ fontSize: 20 }}>
            Depois de completar o teste, analise os resultados e veja onde você foi bem e onde precisa melhorar. Use o feedback como uma ferramenta de aprendizado para reforçar suas áreas fortes e trabalhar nas fracas, ajudando no seu crescimento contínuo.
        </StyledText>
    </>

    // pra que serve
    // tantos códigos?
    // se a vida
    // não é programada
    // e as melhores coisas
    // não tem lógica

);

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

const ScrollView = styled.ScrollView`
    flex: 1;
`;

const SectionTitle = styled.Text`
    font-size: 20px;
    color: #636C76;
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
`;

const SectionAbout = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
`;

const StudyOf = styled.View`
    width: 90%;
    background: #D9D9D9;
    border-radius: 10px;
    border: 2.5px solid #A5D5EB;
    padding: 20px;
    position: relative;
`;

const HeaderContainer = styled.View`
    background-color: #A5D5EB;
    padding: 5px 15px;
    border-radius: 5px;
    position: absolute;
    top: -15px;
    left: 20px;
`;

const HeaderText = styled.Text`
    font-size: 14px;
    color: #4A4A4A;
    font-weight: bold;
`;

const StyledText = styled.Text`
    font-size: 17px;
    color: #636C76;
    margin-top: 15px;
    line-height: 22px;
`;

const Rules = styled.View`
    width: 100%;
    margin-top: 20px;
    align-items: center;
`;

const SectionTestes = styled.View`
    width: 95%;
    margin-top: 15px;
    justify-content: center;
`;

const HeaderWithIcon = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TipsContainer = styled.View`
    margin: 20px 0 30px;
`;

const QuestText = styled.Text`
    font-size: 20px;
    color: #636C76;
`;

const SectionQuest = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

const Cicle = styled.View`
    width: 35px;
    height: 35px;
    background-color: #A5D5EB;
    border-radius: 50%;
    font-size: 20px;
    color: #636C76;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
`;

const SectionTeste = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const CardImage = styled.View`
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
`;

const CardQuestTitleSection = styled.View`
    width: 100%;
    height: 40%;
    align-items: center;
`;

const ImageIcon = styled.Image`
    width: 100px;
    height: 100px;
`;

const SubImage = styled.View`
    width: 120px;
    height: 120px;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;    
    border-radius: 10px;
`;

const SectionTitleQuest = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;

const TextQuest = styled.Text`
    font-size: 13px;
    text-align: center;
    margin-top: 10px;
    color: #636C76;
`;

const QuestTitle = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #636C76;
`;
>>>>>>> ac04ee89c410328a9d8056f447c1bba1499118ff
