import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Header from "@/components/Header";
import { Link as ExpoRouterLink } from 'expo-router';
import { Icon } from 'react-native-elements';

export type DataItem = {
    id: string;
    color: string;
    linkPage: string;
    studyText: string;
    TestCard: Testes[]
}

export type Testes = {
    id: string;
    image: string;
    title: string;
    text: string;
    matter: number;
}

const TestAtom: Testes[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: '',
      title: 'Modelos atômicos',
      text: 'A atomística estuda o átomo e suas características.',
      matter: 1
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      image: '',
      title: 'Estrutura Atômica',
      text: 'A estrutura atômica envolve a organização das partículas subatômicas.',
      matter: 2
    },
    {
      id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
      image: '',
      title: 'Configuração eletrônica',
      text: 'A configuração eletrônica descreve como os elétrons estão distribuídos em torno do núcleo.',
      matter: 3
    },
    {
      id: '3acafc-c605-48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Radioatividade',
      text: 'Radioatividade é o processo pelo qual átomos instáveis emitem radiação.',
      matter: 4
    }
  ];
  
  const TestQuimGeral: Testes[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2a',
      image: '',
      title: 'Propriedades da matéria',
      text: 'As propriedades da matéria determinam o comportamento físico e químico dos materiais.',
      matter: 5
    },
    {
      id: '3ac68afc-c605-4d3-a4f8-fbd91aa97f63',
      image: '',
      title: 'Substâncias químicas',
      text: 'Substâncias químicas são compostos com propriedades específicas que não mudam sem uma reação química.',
      matter: 6
    },
    {
      id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
      image: '',
      title: 'Separação de misturas',
      text: 'Existem diversos métodos para separar componentes de misturas, como filtragem e destilação.',
      matter: 7
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Tabela periódica',
      text: 'A tabela periódica organiza os elementos químicos com base em suas propriedades e estrutura.',
      matter: 8
    },
    {
      id: '3a768afc-c605-48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Propriedades periódicas',
      text: 'As propriedades periódicas, como raio atômico e eletronegatividade, variam de acordo com a posição dos elementos na tabela.',
      matter: 9
    },
    {
      id: '3ac68afc-c605-486523-a4f8-fbd91a7f63',
      image: '',
      title: 'Ligações químicas',
      text: 'Ligações químicas ocorrem quando átomos compartilham ou transferem elétrons para alcançar estabilidade.',
      matter: 10
    },
    {
      id: '3ac64sg88afc-c605-48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Geometria molecular e Polaridade',
      text: 'A geometria molecular define a forma das moléculas, enquanto a polaridade está relacionada à distribuição dos elétrons.',
      matter: 11
    },
    {
      id: '3ac68afc-c605-48dsrbhthsra7f63',
      image: '',
      title: 'Forças intermoleculares',
      text: 'Forças intermoleculares são as interações entre moléculas que influenciam suas propriedades físicas.',
      matter: 12
    },
    {
      id: '3adfrvare8afc-c605-48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Leis ponderais',
      text: 'As leis ponderais tratam das relações quantitativas nas reações químicas, como as leis de Lavoisier e Proust.',
      matter: 13
    },
    {
      id: '3ac68afc-c60vfdb48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Reações químicas',
      text: 'Reações químicas envolvem a transformação de substâncias em novas substâncias com diferentes propriedades.',
      matter: 14
    },
    {
      id: '3adsv8afc-c605-48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Quantidade de matéria',
      text: 'A quantidade de matéria é uma medida relacionada à quantidade de átomos ou moléculas presentes em uma substância.',
      matter: 15
    },
    {
      id: '87ac68afc-c605-48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Gases e transformações gasosas',
      text: 'O estudo dos gases envolve suas propriedades e as transformações que ocorrem com variações de temperatura e pressão.',
      matter: 16
    },
    {
      id: '625ac68afc-c605-48d3-a4f8-fbd91a7f63',
      image: '',
      title: 'Estequiometria',
      text: 'A estequiometria calcula as quantidades de reagentes e produtos em uma reação química.',
      matter: 17
    }
  ];
  
  const TestInor: Testes[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: '../../assets/images/Icons/lattice.png',
      title: 'Ácidos',
      text: 'Ácidos são compostos que liberam íons hidrogênio (H+) em solução.',
      matter: 18
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      image: '../../assets/images/Icons/lattice.png',
      title: 'Bases',
      text: 'Bases são compostos que liberam íons hidróxido (OH-) em solução.',
      matter: 19
    },
    {
      id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
      image: '../../assets/images/Icons/lattice.png',
      title: 'Sais',
      text: 'Sais são compostos formados pela reação de um ácido com uma base.',
      matter: 20
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
      image: '../../assets/images/Icons/lattice.png',
      title: 'Óxidos',
      text: 'Óxidos são compostos formados pela reação de um elemento com oxigênio.',
      matter: 21
    },
    {
      id: '3ac68afc5-48d3-a4f8-fbd91aa97f63',
      image: '../../assets/images/Icons/lattice.png',
      title: 'Reações Inorgânicas',
      text: 'Reações inorgânicas envolvem a transformação de substâncias sem a participação de compostos orgânicos.',
      matter: 22
    }
  ];
  
  const TestFisiQuimi: Testes[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: '../../assets/images/Icons/science.png',
      title: 'Soluções',
      text: 'Soluções são misturas homogêneas de dois ou mais compostos.',
      matter: 23
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      image: '../../assets/images/Icons/science.png',
      title: 'Diluição e misturas de soluções',
      text: 'Diluição é o processo de reduzir a concentração de uma solução.',
      matter: 24
    },
    {
      id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
      image: '../../assets/images/Icons/science.png',
      title: 'Termoquímica',
      text: 'Termoquímica estuda as trocas de calor durante as reações químicas.',
      matter: 25
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
      image: '../../assets/images/Icons/science.png',
      title: 'Cinética Química',
      text: 'Cinética química estuda a velocidade das reações químicas e os fatores que a influenciam.',
      matter: 26
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
      image: '../../assets/images/Icons/science.png',
      title: 'Equilíbrio químico',
      text: 'Equilíbrio químico é o estado no qual as taxas de reação direta e reversa são iguais.',
      matter: 27
    }
  ];
  
  const TestOrga: Testes[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: '../../assets/images/Icons/molecule.png',
      title: 'Cadeias Carbônicas',
      text: 'As cadeias carbônicas são a espinha dorsal das moléculas orgânicas.',
      matter: 34
    },
    {
      id: '3ac6ds-c605-48d3-a4f8-fbd91aa97f63',
      image: '../../assets/images/Icons/molecule.png',
      title: 'Hidrocarbonetos',
      text: 'Hidrocarbonetos são compostos formados por carbono e hidrogênio, como alcanos e alcenos.',
      matter: 35
    },
    {
      id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
      image: '../../assets/images/Icons/molecule.png',
      title: 'Funções Oxigenadas',
      text: 'Funções oxigenadas são grupos funcionais com oxigênio, como álcoois e ácidos.',
      matter: 36
    },
    {
      id: '3ac68afc-c60vdsbh48d3-a4f8-fbd91a7f63',
      image: '../../assets/images/Icons/molecule.png',
      title: 'Funções Nitrogenadas',
      text: 'Funções nitrogenadas incluem aminas e amidas, compostos que contêm o elemento nitrogênio.',
      matter: 37
    }
  ];  

const DATA: DataItem[] = [
    { id: '1', color: '#FF5733', linkPage: 'ATOMÍSTICA', 
        studyText: 'A Atomística é a área da química que se dedica ao estudo das partículas fundamentais da matéria: os átomos. Ela envolve a compreensão de como essas partículas são organizadas e estruturadas, abordando modelos atômicos, como os de Dalton, Thomson, Rutherford e Bohr.Além disso, trata da composição do núcleo atômico (prótons e nêutrons), das partículas subatômicas e da distribuição eletrônica, essencial para entender como os átomos interagem e formam moléculas.',
        TestCard: TestAtom
      },

    { id: '2', color: '#33FF57', linkPage: 'INORGÂNICA', 
        studyText: 'A Química Inorgânica foca no estudo de compostos que não são baseados em carbono, como metais, sais, ácidos, bases e óxidos. Ela investiga propriedades, estruturas e reações desses compostos, abrangendo conceitos como ligações iônicas e covalentes, geometria molecular e solubilidade. Essa área é essencial para aplicações como catalisadores industriais, baterias, materiais cerâmicos e síntese de produtos químicos.', TestCard: TestQuimGeral},

    { id: '3', color: '#3357FF', linkPage: 'QUÍMICA GERAL', 
        studyText: 'A Química Geral fornece os fundamentos para todas as outras áreas da química, abordando conceitos essenciais como estados da matéria, reações químicas e leis ponderais. Essa disciplina ensina a realizar cálculos estequiométricos, interpretar fórmulas químicas e balancear equações, além de estudar transformações físicas e químicas. Ela é indispensável para a compreensão dos princípios básicos que regem o comportamento da matéria e as interações químicas.', TestCard: TestInor},

    { id: '4', color: '#FF33A6', linkPage: 'FÍSICO-QUÍMICA', 
        studyText: 'A Físico-Química integra conceitos de física e química para entender como energia e matéria interagem em sistemas químicos. Ela aborda tópicos como termodinâmica, cinética química, equilíbrio químico e eletroquímica. Essa área é fundamental para compreender processos naturais e industriais, como produção de energia, reações de combustão e funcionamento de baterias.', TestCard: TestFisiQuimi},

    { id: '5', color: '#FFC300', linkPage: 'ORGÂNICA', 
        studyText: 'A Química Orgânica é o estudo de compostos baseados em carbono, fundamentais para entender processos biológicos e a síntese de novos materiais. Ela investiga a estrutura, propriedades e reatividade de moléculas como hidrocarbonetos, álcoois, aldeídos, ácidos e polímeros. Com aplicações na indústria farmacêutica, petroquímica e de biotecnologia, essa área é essencial para o desenvolvimento de novos medicamentos, plásticos e combustíveis.', TestCard: TestOrga},
];

const Item: React.FC<{ color: string, linkPage: string, studyText: string, TestCard: Testes }> = ({ color, linkPage, studyText, TestCard }) => (
        <ContainerLink
            href={{
            pathname: "/(about)",
            params: {
                area: linkPage,
                studyText: studyText,
                TestCard: TestCard
                }
            }} asChild>
            <ItemContainer
                style={{
                backgroundColor: color,
                width: 300,
                height: 200,
                marginTop: 20,
            }} />
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
                        <Title>
                            SOBRE O PROJETO:
                        </Title>
                        <IconWrapper>
                            <Icon
                                type="material"
                                name='refresh'
                                size={60}
                                color={'#636C76'}
                            />
                        </IconWrapper>
                        <SectionTitle>
                            NOSSO PROJETO
                        </SectionTitle>
                        <SectionDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi.
                        </SectionDescription>
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
                        <SectionTitle>
                            NOSSO PROJETO
                        </SectionTitle>
                        <SectionDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi.
                        </SectionDescription>
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
                        <SectionTitle>
                            NOSSO PROJETO
                        </SectionTitle>
                        <SectionDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi.
                        </SectionDescription>
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

const ItemContainer = styled.Pressable`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 0px 10px;
`

const ProjectSection = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const IconWrapper = styled.View`
    width: 130px;
    height: 130px;
    background: rgb(165, 213, 235);
    border-radius: 100px;
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