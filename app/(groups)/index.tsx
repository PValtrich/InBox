import React, { useEffect } from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native";
import { Link as ExpoRouterLink } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function Groups(){
    const scale = useSharedValue(0.8);

    useEffect(() => {
        scale.value = withSpring(1, { damping: 8, stiffness: 90 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return(
        <All>
            <Container>
                <Text style={{fontSize: 13}}>BEM VINDO AO</Text>
                <Text style={{fontSize: 20}}>QUÍMICA IN BOX</Text>
                <Selected>
                    <SubCard>
                        <Link href="/(login)" asChild>
                        <AnimatedCard style={animatedStyle}>
                            <Image
                            style={{height: 125, width: 125}}
                            source={require('../../assets/images/IconsM/Teacher.png')}/>
                        </AnimatedCard>
                        </Link>
                        <Text>PROFESSOR</Text>
                    </SubCard>
                    <SubCard>
                        <Link href="/(home)" asChild>
                        <AnimatedCard style={animatedStyle}>
                        <Image
                            style={{height: 125, width: 125}}
                            source={require('../../assets/images/IconsM/Student.png')}/>
                        </AnimatedCard>
                        </Link>
                        <Text>ALUNO</Text>
                    </SubCard>
                </Selected>
            </Container>
            <Bottom></Bottom>
        </All>
    )
}

const All = styled.View`
    flex: 1;
    background-color: #D3F2FF;
    justify-content: center;
    align-items: center;
`

const Container = styled.View`
    justify-content: center;
    align-items: center;
`

const Selected = styled.View`
    flex-direction: row;
    padding: 20px;
`

const SubCard = styled.View`
    align-items: center;
    padding: 10px;
`

const Card = styled.View`
    height: 150px;
    width: 150px;
    background-color: #3BD8FA;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`

const AnimatedCard = styled(Animated.createAnimatedComponent(Card))``;

const Link = styled(ExpoRouterLink)``;

const Bottom = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    background-color: #fff;
    border-top-left-radius: 50;
`
