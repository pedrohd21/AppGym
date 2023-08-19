import React from 'react';
import { Container, BackButton, BackIcon, Title } from "./styles";
// import { useNavigation } from "@react-navigation/native";

type Props = {
  // showBackButton: boolean;
  title: string;
}


export function Header({title }: Props) {
  // const navigation = useNavigation();

  // function handleGoBack() {
  //   navigation.goBack();
  // }

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
