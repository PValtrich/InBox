import React from "react";
import styled from "styled-components/native";

export default function Header() {
    return (
        <StyledHeader>
            <TittleHeader>Química InBox</TittleHeader>
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

const TittleHeader = styled.Text`
    flex: 1;
    font-size: 20px;
    color: #636C76;
    text-align: center;
`;