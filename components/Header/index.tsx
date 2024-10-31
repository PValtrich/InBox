import React from "react";
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';
import { Link as ExpoRouterLink } from 'expo-router';

export default function Header() {
    return (
        <StyledHeader>

            <TittleHeader>Química InBox</TittleHeader>

            <ButtonLink href='/(login)'>
                <Icon
                    type="material"
                    name='person'
                    size={35}
                    color={'#636C76'}
                />
            </ButtonLink>  
        </StyledHeader>
    );
}

const StyledHeader = styled.View`
    flex: 1;
    background-color: #F5F5F5;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

const IconContainer = styled.View`
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
`;

const TittleHeader = styled.Text`
    flex: 1;
    font-size: 20px;
    color: #636C76;
    text-align: center;
    margin-right: -30px;
`;

const ButtonLink = styled(ExpoRouterLink)`
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;