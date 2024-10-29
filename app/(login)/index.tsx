import React, { useEffect } from "react";
import styled from "styled-components/native";
import Login from "@/components/ComponLogin";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

export default function PageLogin(){
    // Valores iniciais das animações: translateYLogin faz o CampViewLogin começar fora da tela
    const translateYLogin = useSharedValue(1000); 
    const translateYTop = useSharedValue(-200); // translateYTop faz o CampTop começar fora da tela, no topo
    const opacity = useSharedValue(0); // Opacidade inicial a 0 para efeito de fade-in

    useEffect(() => {
        // Animação do CampTop descendo do topo da tela
        translateYTop.value = withSpring(0, {
            damping: 12, // Aumenta a rapidez da animação, reduzindo a oscilação
            stiffness: 90, // Deixa a animação mais rápida e firme
        });

        // Animação do CampViewLogin subindo do fundo da tela
        translateYLogin.value = withSpring(0, {
            damping: 12, 
            stiffness: 90, 
            mass: 1, 
            overshootClamping: true,
        });

        // Animação de fade-in e zoom-in para o logo
        opacity.value = withTiming(1, {
            duration: 800, // Mantém a animação da opacidade em 800ms
        });
    }, []);

    // Estilo animado para CampViewLogin
    const animatedLoginStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateYLogin.value }],
        };
    });

    // Estilo animado para CampTop
    const animatedTopStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateYTop.value }],
            opacity: opacity.value,
        };
    });

    // Estilo animado para a imagem do logo
    const animatedImageStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{ scale: withTiming(opacity.value, { duration: 800 }) }],
        };
    });

    return(
        <All>
            <AnimatedCampTop style={animatedTopStyle}>
                <AnimatedImage source={require('../../assets/images/Logo.png')} style={animatedImageStyle} />
            </AnimatedCampTop>
            <CampLog>
                <AnimatedCampViewLogin style={animatedLoginStyle}>
                    <Login />
                </AnimatedCampViewLogin>
            </CampLog>
        </All>
    )
}

const All = styled.View`
    flex: 1;
    background-color: #D3F2FF;
`

const CampTop = styled.View`
    height: 20%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const AnimatedCampTop = styled(Animated.createAnimatedComponent(CampTop))``;

const CampLog = styled.View`
    height: 80%;
    width: 100%;
`

const CampViewLogin = styled.View`
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px; /* Caso também queira arredondar o lado direito */
`


const AnimatedCampViewLogin = styled(Animated.createAnimatedComponent(CampViewLogin))``;

const StyledImage = styled.Image`
    height: 100%;
    width: 100%;
`

const AnimatedImage = styled(Animated.createAnimatedComponent(StyledImage))``;

// ATENÇÃO: Não mexer na animação do translateYTop e translateYLogin pelo amor de Deus. Foi difícil ajustar as transições. Qualquer alteração pode quebrar a animação.