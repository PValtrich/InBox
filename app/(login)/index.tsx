import React, { useState } from "react";
import styled from "styled-components/native";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { Link as ExpoRouterLink } from 'expo-router'

export default function PageLogin() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    return (
        <All>
            <CampTop>
                <StyledImage source={require('../../assets/images/Logo.png')} />
            </CampTop>

            <CampLog>
                <CampViewLogin>
                    <Container>
                        <Label>LOGIN</Label>
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

                        <LogLink>
                            <EnterButton href="/(teacher)">
                                <Text style={{ color: '#fff' }}>ENTRAR</Text>
                            </EnterButton>
                        </LogLink>
                    </Container>
                </CampViewLogin>
            </CampLog>
        </All>
    );
}

// Estilizações
const All = styled.View`
    flex: 1;
    background-color: #D3F2FF;
`;

const CampTop = styled.View`
    height: 20%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const CampLog = styled.View`
    height: 80%;
    width: 100%;
`;

const CampViewLogin = styled.View`
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`;

const StyledImage = styled.Image`
    height: 100%;
    width: 100%;
`;

const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 35px;
`;

const ConstInputs = styled.View`
    gap: 30px;
`;

const SectionInput = styled.View`
    gap: 10px;
`;

const Label = styled.Text`
    font-size: 16px;
    color: #333;
`;

const InputWrapper = styled.View`
    width: 300px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
`;

const StyledTextInput = styled.TextInput`
    flex: 1;
    padding: 15px;
    font-size: 14px;
`;

const VisibilityToggle = styled.TouchableOpacity`
    padding: 10px;
`;

const EnterButton = styled(ExpoRouterLink)`
    height: 45px;
    width: 300px;
    background-color: #45C7C9;
    margin-top: 150px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

const LogLink = styled.TouchableOpacity`
`
