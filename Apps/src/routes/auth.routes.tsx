import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Inscribe } from "../screens/Inscribe";

type AuthRoutes = {
  login: undefined;
  inscribe: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false, animationEnabled: false,}}>
      <Screen name="login" component={Login}/>
      <Screen name="inscribe" component={Inscribe}/>
    </Navigator>
  );
}
