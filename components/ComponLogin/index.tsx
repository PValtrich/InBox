import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';
<<<<<<< HEAD
import { Link } from 'expo-router';
=======
>>>>>>> ac04ee89c410328a9d8056f447c1bba1499118ff

export default function Login() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    // Alterna a visibilidade da senha
    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    return (
        <All>
            <Label>LOGIN</Label>
            <Container>
                <ConstInputs>
                    <SectionInput>
                        <Label>EMAIL</Label>
                        <InputWrapper>
                            <StyledTextInput 
                                placeholder="Ex: Meuemail@gmail.com" 
                                keyboardType="email-address"
                                placeholderTextColor="#AFAFAF"
                            />
                        </InputWrapper>
                    </SectionInput>
                    <SectionInput>
                        <Label>SENHA</Label>
                        <InputWrapper>
                            <StyledTextInput
                                placeholder="Ex: Minhasenha" 
                                secureTextEntry={!isPasswordVisible}
                                placeholderTextColor="#AFAFAF"
                            />
                            <VisibilityToggle onPress={togglePasswordVisibility}>
                                <Icon
                                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                                    type='feather'
                                    size={20}
                                    color='#AFAFAF'
                                />
                            </VisibilityToggle>
                        </InputWrapper>
                    </SectionInput>
                </ConstInputs>
<<<<<<< HEAD
                <Link href="(teacher)" asChild>
                    <EnterButton>
                        <Text style={{ color: '#fff' }}>ENTRAR</Text>
                    </EnterButton>
                </Link>
=======
                <EnterButton>
                    <Text style={{ color: '#fff' }}>ENTRAR</Text>
                </EnterButton>
>>>>>>> ac04ee89c410328a9d8056f447c1bba1499118ff
            </Container>
        </All>
    );
}

// Container principal que organiza o layout
const All = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 20px;
    gap: 35px;
`

// Container para o formulário
const Container = styled.View`
    justify-content: center;
    align-items: center;
`

// Seção que contém todos os campos de entrada
const ConstInputs = styled.View`
    gap: 30px;
`

// Seção de cada campo de entrada individual
const SectionInput = styled.View`
    gap: 10px;
`

// Rótulo para os campos de entrada
const Label = styled.Text`
    font-size: 16px;
    color: #333;
`

// Wrapper para os campos de entrada e ícones
const InputWrapper = styled.View`
    width: 300px;
    background-color: #fff;
    border: 1px solid #ddd; /* Borda ao redor de todo o campo */
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
`

// Campo de entrada de texto estilizado
const StyledTextInput = styled.TextInput`
    flex: 1;
    padding: 15px;
    font-size: 14px;
`

// Botão de visibilidade da senha
const VisibilityToggle = styled.TouchableOpacity`
    padding: 10px;
`

// Botão de entrada
const EnterButton = styled.TouchableOpacity`
    height: 45px;
<<<<<<< HEAD
    width: 300px;
=======
    width: 100%;
>>>>>>> ac04ee89c410328a9d8056f447c1bba1499118ff
    background-color: #45C7C9;
    margin-top: 150px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`