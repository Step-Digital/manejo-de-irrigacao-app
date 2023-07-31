import React, { useState } from 'react';
import { Typography } from "../../components/typography";
import { Header } from "../../components/Header";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../routes/types/StackNavigationProps";
import { strings } from "../../../utils";

import * as S from './style'
import { OnboardingModal } from '../../components/OnboardingModal';

export const HomeLogged = () => {
  const [openButtonsMOdal, setOpenButtonsModal] = useState(false);

  const navigation = useNavigation<NavigationProps>();
  

  return (
    <S.Container>
      <Header minHeader={false} />
      <S.Content>
        <Image
          source={require("../../../../assets/culture.png")}
          transition={1000}
          style={{
            width: 260,
            height: 193,
          }}
          contentFit="cover"
        />
        <Typography
          style={{
            width: 320,
            textAlign: "center",
            marginTop: 32,
            fontFamily: 'Poppins-regular'
          }}
          color="gray-4"
          size="normal"
          weight="regular"
        >
          {strings.homeLogged.noProperty}
        </Typography>
        <Typography
          style={{
            // width: 338,
            textAlign: "center",
            marginTop: 16,
            fontFamily: 'Poppins-regular',
            padding: 16
          }}
          color="gray-4"
          size="normal"
          weight="regular"
        >
          {strings.homeLogged.addPropertyText1} &nbsp; 
          <Typography
          style={{
            textAlign: "center",
            width: 328,
            marginTop: 32,
            textDecorationLine: "underline",
          }}
          color="positive"
          size="normal"
          weight="bold"
          onPress={() => navigation.navigate('NewProperty')}
        >
          {strings.homeLogged.addPropertyText2}
        </Typography>
        </Typography>
      </S.Content>
      <S.ButtonContainer>
        <S.OpenModalButton onPress={() => setOpenButtonsModal(!openButtonsMOdal)}>
          <S.OpenModalButtonText>
            {openButtonsMOdal ? '-' : '+'}
            </S.OpenModalButtonText>
        </S.OpenModalButton>
      </S.ButtonContainer>
      {openButtonsMOdal && (
        <S.ButtonModalContainer>
          <S.AddCultureButton
            bg-color="positive"
            onPress={() => navigation.navigate('CultureInfo')}
            >
            <Image
            source={require("../../../../assets/Light.png")}
            style={{
              width: 24,
              height: 24,
            }}
          />
            <Typography 
              style={{ fontFamily: 'Poppins-regular', marginLeft: 8  }} 
              color="pure-white" 
              size="normal" 
              weight="medium"
            >
            {strings.homeLogged.addButton.addCulture}
            </Typography>
          </S.AddCultureButton>
          <S.AddPropertyButton
            bg-color="positive"
            onPress={() => navigation.navigate('NewProperty')}
            >
            <Image
              source={require("../../../../assets/Regular.png")}
              style={{
                width: 24,
                height: 24,
              }}
            />
            <Typography 
              style={{ fontFamily: 'Poppins-regular', marginLeft: 8 }} 
              color="pure-white" 
              size="normal" 
              weight="medium"
            >
              {strings.homeLogged.addButton.addProperty}
            </Typography>
          </S.AddPropertyButton>
        </S.ButtonModalContainer>
      )}
      <OnboardingModal />
    </S.Container>
  )
}