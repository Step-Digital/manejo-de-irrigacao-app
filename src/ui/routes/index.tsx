import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { MakeHome } from "../../core/main/factories/pages/home/home.factory";
import { LoginScreen } from "../pages/login";
import { MakeLogin } from "../../core/main/factories/pages/login/login.factory";
import { HomeLogged } from "../pages/home-logged";
import { SignupScreen } from "../pages/signup";
import { ResetPasswordScreen } from "../pages/reset-password";
import { MakeSignup } from "../../core/main/factories/pages/signup";

const Stack = createNativeStackNavigator();

export const GlobalRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeLogged} />
      <Stack.Screen name="Login" component={HomeLogged} />
      <Stack.Screen name="HomeLogged" component={HomeLogged} />
      <Stack.Screen name="Signup" component={MakeSignup} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};
