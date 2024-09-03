import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';

export default function Body() {
    return (
        <StyledBody>
            <ScrollBody>
            <StyledTextTittle>
                TESTE SEU CONHECIMENTO
            </StyledTextTittle>
            <StyledText>
                Este teste foi criado para avaliar seu nível de conhecimento em química e ajudá-lo a identificar seus pontos fortes e áreas que precisam de mais atenção. É uma ferramenta valiosa para medir o quanto você já aprendeu e onde pode focar seus estudos.
            </StyledText>
            </ScrollBody>
        </StyledBody>
    );
}

const StyledBody = styled.ScrollView`
    flex: 12;
`

const ScrollBody = styled.View`
    justify-content: center;
    align-items: center;
`
const StyledTextTittle = styled.Text`
    font-size: 20px;
    color: #636C76;
`

const StyledText = styled.Text`
    font-size: 15px;
    color: #636C76;
    width: 95%;
    margin-top: 20px
`