import { Button } from "../../components/Button";
import { HeaderLogged } from "../../components/HeaderLogged";
import { Input } from "../../components/Input";
import { BackgroundImage, Container, Text, Text2, Content } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

export function Login(){
  const backgroundImage = require('../../assets/Imagem.png');

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('inscribe')
  }

  return (
    <Container>
      <Content>
      <BackgroundImage source={backgroundImage}>
        <HeaderLogged/>
        <Text>
          Acesse sua Conta
        </Text>
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
        <Button title="Acessar"/>
        <Text2>
          Crie sua conta
        </Text2>
        <Button title="Criar conta" onPress={handleNewAccount}/>
      </BackgroundImage>
      </Content>
      
    </Container>
  );
}