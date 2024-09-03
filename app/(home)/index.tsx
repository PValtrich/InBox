import { View, Text } from "react-native";
import styled from "styled-components/native";
import Header from "@/components/Header";
import Body from "@/components/Body";

export default function Home(){
    return(
        <All>
            <Header></Header>
            <Body></Body>
        </All>
    )
}

const All = styled.View`
    flex: 1;
`