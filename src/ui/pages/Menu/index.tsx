import React from 'react';
import { Image } from "expo-image";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

import { strings } from '../../../utils';
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../routes/types/StackNavigationProps";

import * as S from './style';
import { Typography } from '../../components/typography';

export function Menu(){
  const navigation = useNavigation<NavigationProps>();

  return (
    <S.Container>
      <S.CloseContainer>
        <S.CloseButton onPress={() => navigation.navigate('HomeLogged')}>
          <AntDesign name="close" size={24} color="#fff" />
        </S.CloseButton>
      </S.CloseContainer>
      <S.logoContainer>
      <Image
        source={require("../../../../assets/logo-white.png")}
        transition={1000}
        style={{
          width: 81,
          height: 81,
          marginTop: 16,
          display: 'flex',
          marginRight: 16
        }}
        contentFit="cover"
      />
      <Image
        source={require("../../../../assets/logo-white-2.png")}
        transition={1000}
        style={{
          width: 129,
          height: 66,
          marginTop: 16,
          display: 'flex',
        }}
        contentFit="cover"
      />
      </S.logoContainer>
      <S.MenuContainer>
        <S.MenuOptionContainer onPress={() => navigation.navigate('HomeLogged')}>
          <SimpleLineIcons name="home" size={16} color="white" />
          <Typography
              style={{
                fontFamily: 'Poppins-regular',
                fontSize: 20,
                marginLeft: 8,
                marginTop: 8
              }}
              color="pure-white"
              size="normal"
              weight="medium"
            >
              {strings.menu.recomendations}
            </Typography>
        </S.MenuOptionContainer>
        <S.MenuOptionContainer>
        <Image
          source={require("../../../../assets/Regular.png")}
          style={{
            width: 20,
            height: 20,
          }}
        />
         <Typography
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              marginLeft: 8,
              marginTop: 8
            }}
            color="pure-white"
            size="normal"
            weight="medium"
          >
            {strings.menu.myProperties}
          </Typography>
        </S.MenuOptionContainer>
        <S.MenuOptionContainer>
          <Ionicons name="person-outline" size={16} color="white" />
          <Typography
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 20,
              marginLeft: 8,
              marginTop: 8
            }}
            color="pure-white"
            size="normal"
            weight="medium"
          >
            {strings.menu.profile}
          </Typography>
        </S.MenuOptionContainer>
        <S.MenuOptionContainer>
          <FontAwesome5 name="building" size={16} color="white" />
          <Typography
              style={{
                fontFamily: 'Poppins-regular',
                fontSize: 20,
                marginLeft: 8,
                marginTop: 8
              }}
              color="pure-white"
              size="normal"
              weight="medium"
            >
              {strings.menu.about}
            </Typography>
        </S.MenuOptionContainer>
        <S.MenuOptionContainer>
          <AntDesign name="closecircleo" size={16} color="white" />
          <Typography
              style={{
                fontFamily: 'Poppins-regular',
                fontSize: 20,
                marginLeft: 8,
                marginTop: 8
              }}
              color="pure-white"
              size="normal"
              weight="medium"
            >
              {strings.menu.close}
            </Typography>
        </S.MenuOptionContainer>
      </S.MenuContainer>
    </S.Container>
  );
}