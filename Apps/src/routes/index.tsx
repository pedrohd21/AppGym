import { NavigationContainer } from "@react-navigation/native";
import { Container } from "./styles";

import { AuthRoutes } from "./auth.routes";

export function Routes(){

  return(
    <Container>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Container>
    
  );
}