import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  HomeLogged: undefined;
  Login: undefined;
  Signup: undefined;
  ResetPassword: undefined;
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>
