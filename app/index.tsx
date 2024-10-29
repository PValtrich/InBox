import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Header from "@/components/Header";
import { Icon } from 'react-native-elements';
import { Link as ExpoRouterLink } from 'expo-router';

interface DataItem {
    id: string;
    color: string;
    linkPage: string;
    studyText: string;
}

export type Testes = {
    id: string,
    image: string,
    title: string,
    text: string,
    matter: number
}

const TestAtom: Testes[] = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: '',
    title: 'Modelos atômicos',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 1
},
{
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: '',
    title: 'Estrutura Atômica',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 2
},
{
    id: '3ac68afc-c5-48d3-a4f8-fbd91af63',
    image: '',
    title: 'Configuração eletrônica',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 3
},
{
    id: '3acafc-c605-48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Radioatividade',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 4
}]

const TestQuimGeral: Testes[] = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2a',
    image: '',
    title: 'Propriedades da matéria',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 5
},
{
    id: '3ac68afc-c605-4d3-a4f8-fbd91aa97f63',
    image: '',
    title: 'Substâncias químicas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 6
},
{
    id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
    image: '',
    title: 'Separação de misturas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 7
},
{
    id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Tabela periódica',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 8
},
{
    id: '3a768afc-c605-48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Propriedades periódicas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 9
},
{
    id: '3ac68afc-c605-486523-a4f8-fbd91a7f63',
    image: '',
    title: 'Ligações químicas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 10
},
{
    id: '3ac64sg88afc-c605-48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Geometria molecular e Polaridade',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 11
},
{
    id: '3ac68afc-c605-48dsrbhthsra7f63',
    image: '',
    title: 'Forças intermoleculares',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 12
},
{
    id: '3adfrvare8afc-c605-48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Leis ponderais',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 13
},
{
    id: '3ac68afc-c60vfdb48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Reações químicas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 14
},
{
    id: '3adsv8afc-c605-48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Quantidade de matéria',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 15
},
{
    id: '87ac68afc-c605-48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Gases e transformações gasosas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 16
},
{
    id: '625ac68afc-c605-48d3-a4f8-fbd91a7f63',
    image: '',
    title: 'Estequiometria',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 17
}]

const TestInor: Testes[] = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: '../../assets/images/Icons/lattice.png',
    title: 'Ácidos',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 18
},
{
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: '../../assets/images/Icons/lattice.png',
    title: 'Bases',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 19
},
{
    id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
    image: '../../assets/images/Icons/lattice.png',
    title: 'Sais',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 20
},
{
    id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/lattice.png',
    title: 'Óxidos',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 21
},
{
    id: '3ac68afc5-48d3-a4f8-fbd91aa97f63',
    image: '../../assets/images/Icons/lattice.png',
    title: 'Reações Inorgânicas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 22
},]

const TestFisiQuimi: Testes[] = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: '../../assets/images/Icons/science.png',
    title: 'Soluções',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 23
},
{
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: '../../assets/images/Icons/science.png',
    title: 'Diluição e misturas de soluções',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 24
},
{
    id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
    image: '../../assets/images/Icons/science.png',
    title: 'Termoquímica',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 25
},
{
    id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/science.png',
    title: 'Cinética Química',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 26
},
{
    id: '3ac68asdac605-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/science.png',
    title: 'Equilíbrio Químico',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 27
},
{
    id: '3ac68afc-c605-48d3-a4f8-f5bd91a63',
    image: '../../assets/images/Icons/science.png',
    title: 'Equilíbrio Iônico',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 28
},
{
    id: 'ac6afc-c605-48d3-a4f8-çbd91a7f63',
    image: '../../assets/images/Icons/science.png',
    title: 'pH e pOH',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 29
},
{
    id: '3ac68afc-chjs-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/science.png',
    title: 'Equilíbrio Heterogêneo',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 30
},
{
    id: '7ac68afc-c605-4vv4f8-fbd91a7f63',
    image: '../../assets/images/Icons/science.png',
    title: 'Processos de Óxido-redução',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 31
},
{
    id: '3ac68afc-7sdf5-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/science.png',
    title: 'Pilhas (Celas Galvânicas)',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 32
},
{
    id: '3ac68afc-c605-48895-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/science.png',
    title: 'Eletrólise (Celas eletrolíticas)',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 33
}]

const TestOrga: Testes[] = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Cadeias Carbônicas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 34
},
{
    id: '3ac6ds-c605-48d3-a4f8-fbd91aa97f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Hidrocarbonetos',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 35
},
{
    id: '3ac68afc-c5-48d38958-fbd91aa97f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Funções Oxigenadas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 36
},
{
    id: '3ac68afc-frhm-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Funções Nitrogenadas e Halogenadas',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 37
},
{
    id: '3ac68afc-c605-48d3tyd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Propriedades Físicas dos Compostos Orgânicos',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 38
},{
    id: '3ac68afc-c605-48d3-a47jfnfbd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Isomeria Constitucional (plana)',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 39
},{
    id: '3a35rth6fc-c605-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Isomeria Espacial (geométrica e óptica)',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 40
},{
    id: '3ac68afcgfd63-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Reações de Substituição e Adição',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 41
},{
    id: '3erttyc605-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Reações de Eliminação',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 42
},{
    id: '3ac68afc09-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Reações de Oxido-redução ',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 43
},{
    id: '3ac68afc-c605-48d3-a467fbd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Polímeros e reações de polimerização',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 44
},{
    id: '3ac68af7505-48d3-a4f8-fbd91a7f63',
    image: '../../assets/images/Icons/molecule.png',
    title: 'Bioquímica',
    text: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
    matter: 45
}]

const DATA: DataItem[] = [
    { id: '1', color: '#FF5733', linkPage: 'ATOMÍSTICA', 
        studyText: 'A Atomística é a área da química que se dedica ao estudo das partículas fundamentais da matéria: os átomos. Ela envolve a compreensão de como essas partículas são organizadas e estruturadas, abordando modelos atômicos, como os de Dalton, Thomson, Rutherford e Bohr.Além disso, trata da composição do núcleo atômico (prótons e nêutrons), das partículas subatômicas e da distribuição eletrônica, essencial para entender como os átomos interagem e formam moléculas.'},

    { id: '2', color: '#33FF57', linkPage: 'INORGÂNICA', 
        studyText: 'A Química Inorgânica foca no estudo de compostos que não são baseados em carbono, como metais, sais, ácidos, bases e óxidos. Ela investiga propriedades, estruturas e reações desses compostos, abrangendo conceitos como ligações iônicas e covalentes, geometria molecular e solubilidade. Essa área é essencial para aplicações como catalisadores industriais, baterias, materiais cerâmicos e síntese de produtos químicos.'},

    { id: '3', color: '#3357FF', linkPage: 'QUÍMICA GERAL', 
        studyText: 'A Química Geral fornece os fundamentos para todas as outras áreas da química, abordando conceitos essenciais como estados da matéria, reações químicas e leis ponderais. Essa disciplina ensina a realizar cálculos estequiométricos, interpretar fórmulas químicas e balancear equações, além de estudar transformações físicas e químicas. Ela é indispensável para a compreensão dos princípios básicos que regem o comportamento da matéria e as interações químicas.'},

    { id: '4', color: '#FF33A6', linkPage: 'FÍSICO-QUÍMICA', 
        studyText: 'A Físico-Química integra conceitos de física e química para entender como energia e matéria interagem em sistemas químicos. Ela aborda tópicos como termodinâmica, cinética química, equilíbrio químico e eletroquímica. Essa área é fundamental para compreender processos naturais e industriais, como produção de energia, reações de combustão e funcionamento de baterias.'},

    { id: '5', color: '#FFC300', linkPage: 'ORGÂNICA', 
        studyText: 'A Química Orgânica é o estudo de compostos baseados em carbono, fundamentais para entender processos biológicos e a síntese de novos materiais. Ela investiga a estrutura, propriedades e reatividade de moléculas como hidrocarbonetos, álcoois, aldeídos, ácidos e polímeros. Com aplicações na indústria farmacêutica, petroquímica e de biotecnologia, essa área é essencial para o desenvolvimento de novos medicamentos, plásticos e combustíveis.'},
];

const Item: React.FC<{ color: string, linkPage: string, studyText: string }> = ({ color, linkPage, studyText }) => (
    <ContainerLink
    href={{
      pathname: "/(about)",
      params: {
        area: linkPage,
        studyText: studyText
      },
    }}
    asChild
  >
    <ItemContainer
      style={{
        backgroundColor: color,
        width: 300,
        height: 200,
        marginTop: 20,
      }}
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
                        renderItem={({ item }) => <Item color={item.color} linkPage={item.linkPage} studyText={item.studyText}/>}
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
    background-color: #fff;
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