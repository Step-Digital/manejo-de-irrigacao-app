import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { MakeHome } from "../../core/main/factories/pages/home/home.factory";
import { LoginScreen } from "../pages/login";
import { MakeLogin } from "../../core/main/factories/pages/login/login.factory";
import { MakeHomeLogged } from "../../core/main/factories/pages/home-logged/home-logged.factory";
import { HomeLogged } from "../pages/home-logged";
import { SignupScreen } from "../pages/signup";
import { ResetPasswordScreen } from "../pages/reset-password";
import { MakeSignup } from "../../core/main/factories/pages/signup";
import { MakeNewProperty } from "../../core/main/factories/pages/newProperty/newProperty.factory";
import { MakeGroundInfo } from "../../core/main/factories/pages/GroundInfo/groundInfo.factory";
import { MakeBombInfo } from "../../core/main/factories/pages/bombInfo/bombInfo.factory";
import { MakeSystemInfo } from "../../core/main/factories/pages/systemInfo/systemInfo.factory";
import { MakeCulture } from "../../core/main/factories/pages/Culture/culture.factory";
import { PropertyRegistered } from "../pages/propertyRegistered";
import { CultureRegistered } from "../pages/CultureRegistered";
import { Menu } from "../pages/Menu";

const Stack = createNativeStackNavigator();

export const GlobalRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={MakeHome} />
      <Stack.Screen name="Login" component={MakeLogin} />
      <Stack.Screen name="HomeLogged" component={MakeHomeLogged} />
      <Stack.Screen name="Signup" component={MakeSignup} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="NewProperty" component={MakeNewProperty} />
      <Stack.Screen name="GroundInfo" component={MakeGroundInfo} />
      <Stack.Screen name="BombInfo" component={MakeBombInfo} />
      <Stack.Screen name="SystemInfo" component={MakeSystemInfo} />
      <Stack.Screen name="PropertyRegistered" component={PropertyRegistered} />
      <Stack.Screen name="CultureInfo" component={MakeCulture} />
      <Stack.Screen name="CultureRegistered" component={CultureRegistered} />
      <Stack.Screen name="Menu" component={Menu} />
      

    </Stack.Navigator>
  );
};
