import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  HomeLogged: undefined;
  Login: undefined;
  Signup: undefined;
  ResetPassword: undefined;
  NewProperty: undefined;
  GroundInfo: undefined;
  BombInfo: undefined;
  SystemInfo: undefined;
  PropertyRegistered: undefined;
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>
