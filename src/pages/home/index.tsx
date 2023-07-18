import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import * as S from "./style";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { Button } from "../../ui/components/button";
import { Typography } from "../../ui/components/typography";

export const HomeScreen: React.FC = () => {
  return (
    <S.StyledView>
      <StatusBar
        backgroundColor="#00344A"
        translucent
        style={Platform.OS === "ios" ? "dark" : "light"}
      />
      <S.StyledHeader>
        <Image
          style={localStyles.nameAppImage}
          source={require("../../../assets/name-app.png")}
          placeholder={"asdas"}
          contentFit="contain"
          transition={1000}
        />
      </S.StyledHeader>
      <S.StyledLogoContainer>
        <Image
          style={localStyles.logoImage}
          source={require("../../../assets/logo-white.png")}
          placeholder={"asdas"}
          contentFit="contain"
          transition={1000}
        />
      </S.StyledLogoContainer>
      <S.StyledContent>
        <View
          style={{
            paddingLeft: 25,
            paddingRight: 25,
            marginTop: 10,
          }}
        >
          <Image
            style={localStyles.sponsorsImage}
            source={require("../../../assets/sponsors.png")}
            placeholder={"Sponsors"}
            contentFit="fill"
            transition={1000}
          />
        </View>
        <S.StyledActions>
          <Button bg-color="positive">
            <Typography color="pure-white" size="large" weight="bold">
              Crie uma conta gratuitamente
            </Typography>
          </Button>
          <Button bg-color="transparent">
            <Typography color="neutral-4" size="large" weight="bold">
              Já possuo cadastro
            </Typography>
          </Button>
        </S.StyledActions>
      </S.StyledContent>
    </S.StyledView>
  );
};

const localStyles = StyleSheet.create({
  nameAppImage: {
    width: 200,
    height: 81,
  },
  logoImage: {
    width: 120,
    height: 140,
    position: "absolute",
    top: -60,
  },
  sponsorsImage: {
    width: "100%",
    height: 200,
  },
});
