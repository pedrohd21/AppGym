import { Button } from "../../components/Button";
import { HeaderLogged } from "../../components/HeaderLogged";
import { Input } from "../../components/Input";
import { Container, BackgroundImage, Text, Text2, Content } from "./styles";


import { View } from 'react-native';

import { useNavigation } from "@react-navigation/native";

export function Inscribe(){
  const backgroundImage = require('../../assets/Imagem.png');
  const navigation = useNavigation();
  
  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <BackgroundImage source={backgroundImage}>
          <HeaderLogged/>
          <Text>
            Crie sua conta
          </Text>
          <Input 
            placeholder="Nome"
            // value={}
            // onChangeText={}
          />
          <Input 
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            // value={}
            // onChangeText={}
          />
          <Input 
            placeholder="Senha"
            secureTextEntry
            
            // value={}
            // onChangeText={}
          />
          <Button title="Criar e acessar"/>
          
          <View style={{ marginTop: 50 }}>
            <Button title="Voltar para o login"  onPress={handleGoBack}/>
          </View>
        </BackgroundImage>
      </Content>
      
      
    </Container>
  );
}