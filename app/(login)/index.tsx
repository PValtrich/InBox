import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { useRouter } from "expo-router";
import { apiConfig } from "@/utils/axios";

const PageLogin: React.FC = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const loginFunc = async () => {
    try {
      if (email && password) {
        const res = await apiConfig.post("/login", {
          email,
          senha: password,
        });

        if (res.status === 204) {
          Alert.alert("Erro", "Usuário ou senha incorretos!");
        } else {
          Alert.alert("Sucesso", "Login realizado!");
          router.push("/(teacher)");
        }
      } else {
        Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      Alert.alert("Erro", "Não foi possível realizar o login.");
    }
  };

  return (
    <All>
      <CampTop>
        <StyledImage source={require("../../assets/images/Logo.png")} />
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
                    value={email}
                    onChangeText={setEmail}
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
                    value={password}
                    onChangeText={setPassword}
                  />
                  <VisibilityToggle onPress={togglePasswordVisibility}>
                    <Icon
                      name={isPasswordVisible ? "eye" : "eye-off"}
                      type="feather"
                      size={20}
                      color="#AFAFAF"
                    />
                  </VisibilityToggle>
                </InputWrapper>
              </SectionInput>
            </ConstInputs>

            <EnterButton onPress={loginFunc}>
              <Text style={{ color: "#fff" }}>ENTRAR</Text>
            </EnterButton>
          </Container>
        </CampViewLogin>
      </CampLog>
    </All>
  );
};

export default PageLogin;

// Estilizações
const All = styled.View`
  flex: 1;
  background-color: #d3f2ff;
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

const EnterButton = styled.TouchableOpacity`
  height: 45px;
  width: 300px;
  background-color: #45c7c9;
  margin-top: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;