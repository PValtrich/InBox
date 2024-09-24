import React from "react";
import { View, Text, FlatList, Dimensions, StyleSheet, ViewStyle, TextStyle, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Header from "@/components/Header";
import { Icon } from 'react-native-elements';
import { Link as ExpoRouterLink } from 'expo-router';

interface DataItem {
    id: string;
    color: string;
    linkPage: string;
}

const DATA: DataItem[] = [
    { id: '1', color: '#FF5733', linkPage: 'ATOMÍSTICA', },
    { id: '2', color: '#33FF57', linkPage: 'INORGÂNICA'},
    { id: '3', color: '#3357FF', linkPage: 'QUÍMICA GERAL' },
    { id: '4', color: '#FF33A6', linkPage: 'FÍSICO-QUÍMICA' },
    { id: '5', color: '#FFC300', linkPage: 'ORGÂNICA' },
];

const Item: React.FC<{ color: string, linkPage: string }> = ({ color, linkPage }) => (
    <ContainerLink href={{
        pathname: '/(about)', 
        params: {area: linkPage}}} 
        asChild
    >
    <ItemContainer style={{
        backgroundColor: color,
        width: 300, 
        height: 200,
        marginTop: 20 }}

        />
    </ContainerLink>
);

const Home: React.FC = () => {
    return (
        <Container>
            <Header/>
            <ScrollView>
                <Content>
                    <Title>
                        TESTE SEU CONHECIMENTO
                    </Title>
                    <Description>
                        Este teste foi criado para avaliar seu nível de conhecimento em química e ajudá-lo a identificar seus pontos fortes e áreas que precisam de mais atenção. É uma ferramenta valiosa para medir o quanto você já aprendeu e onde pode focar seus estudos.
                    </Description>
                    <SafeAreaView style={{width: '100%'}}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item color={item.color} linkPage={item.linkPage}/>}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    </SafeAreaView>
                    <ProjectSection>
                        <Title>SOBRE O PROJETO:</Title>
                        <IconWrapper>
                            <Icon
                                type="material"
                                name='refresh'
                                size={60}
                                color={'#636C76'}
                            />
                        </IconWrapper>
                        <SectionTitle>NOSSO PROJETO</SectionTitle>
                        <SectionDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi.</SectionDescription>
                    </ProjectSection>

                    <ProjectSection>
                        <IconWrapper>
                            <Icon
                                type="material"
                                name='refresh'
                                size={60}
                                color={'#636C76'}
                            />
                        </IconWrapper>
                        <SectionTitle>NOSSO PROJETO</SectionTitle>
                        <SectionDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi.</SectionDescription>
                    </ProjectSection>

                    <ProjectSection>
                        <IconWrapper>
                            <Icon
                                type="material"
                                name='refresh'
                                size={60}
                                color={'#636C76'}
                            />
                        </IconWrapper>
                        <SectionTitle>NOSSO PROJETO</SectionTitle>
                        <SectionDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi.</SectionDescription>
                    </ProjectSection>
                </Content>
                </ScrollView>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`

const ScrollView = styled.ScrollView`
    flex: 12;
`

const Content = styled.View`
    align-items: center;
`

const Title = styled.Text`
    font-size: 20px;
    color: #636C76;
    font-weight: 500;
`

const Description = styled.Text`
    font-size: 18px;
    color: #636C76;
    width: 95%;
    margin-top: 20px;
    text-align: center;
`

const ItemContainer = styled.View`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 0 10px;
`

const ProjectSection = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const IconWrapper = styled.View`
    width: 130px;
    height: 130px;
    background: #A5D5EB;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const SectionTitle = styled.Text`
    font-size: 20px;
    color: #636C76;
    font-weight: 500;
    margin-top: 10px;
`

const SectionDescription = styled.Text`
    font-size: 17px;
    color: #636C76;
    margin-top: 10px;
    width: 95%;
    text-align: center;
`

const ContainerLink = styled(ExpoRouterLink)`
    flex: 1;
`

export default Home;
