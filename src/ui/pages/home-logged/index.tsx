import React, { useState } from 'react';
import { Typography } from "../../components/typography";
import { Header } from "../../components/Header";
import { Image } from "expo-image";
import { Button } from "../../components/button";

import * as S from './style'
import { Text } from 'react-native';

export const HomeLogged = () => {
  const [openButtonsMOdal, setOpenButtonsModal] = useState(false)

  return (
    <S.Container>
      <Header />
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
          Você ainda não possui nenhuma cultura cadastrada.
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
          Para calcular a irrigação diária para sua produção agrícola, &nbsp; 
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
        >
          cadastre sua propriedade
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
            Adicionar Cultura
            </Typography>
          </S.AddCultureButton>
          <S.AddPropertyButton
            bg-color="positive"
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
              Nova Propriedade
            </Typography>
          </S.AddPropertyButton>
        </S.ButtonModalContainer>
      )}
    </S.Container>
  )
}