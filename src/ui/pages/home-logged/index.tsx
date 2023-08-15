import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Typography } from "../../components/typography";
import { Header } from "../../components/Header";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../routes/types/StackNavigationProps";
import { strings } from "../../../utils";
import { useQuery } from "@tanstack/react-query";
import { MaterialIcons } from "@expo/vector-icons";
import { AxiosError } from "axios";

import * as S from "./style";
import { OnboardingModal } from "../../components/OnboardingModal";
import { AuthDomain } from "../../../core/domain/auth.domain";
import { CacheDomain } from "../../../core/domain/cache.domain";
import { NewPropertyDomain } from "../../../core/domain/newProperty.domain";
import { CultureCard } from "../../components/CultureCard";

type HomeLoggedProps = {
  auth: AuthDomain;
  cache: CacheDomain;
  propertyService: NewPropertyDomain;
};

export const HomeLogged: React.FC<HomeLoggedProps> = ({ propertyService }) => {
  const [openButtonsMOdal, setOpenButtonsModal] = useState(false);
  const [showProperties, setShowProperties] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: () => propertyService.getProperties(),
  });

  const { data: allData , isLoading: isLoadingAll } = useQuery({
    queryKey: ["AllProperties"],
    queryFn: () => propertyService.getAllPropertiesData(),
  });

  console.log('allData', JSON.stringify(allData, null, 2));

  const navigation = useNavigation<NavigationProps>();

  if (isLoading && isLoadingAll) return <Text>Carregando...</Text>;

  return (
    <S.Container>
      <Header minHeader={false} />
      {/* <S.PropertyContainer>
        <S.PropertyHeader>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              source={require("../../../../assets/farmGreen.png")}
              transition={1000}
              style={{
                width: 21,
                height: 21,
                marginBottom: 4,
                marginLeft: 4,
              }}
              contentFit="cover"
            />
            <Typography
              style={{
                textAlign: "left",
                fontFamily: "Poppins-regular",
                fontSize: 18,
                marginLeft: 8,
              }}
              color="neutral-4"
              size="normal"
              weight="medium"
            >
              Fazenda Santa Rita{" "}
              <Typography
                style={{
                  textAlign: "left",
                  fontFamily: "Poppins-regular",
                  fontSize: 18,
                }}
                color="gray-5"
                size="normal"
                weight="medium"
              >
                (02)
              </Typography>
            </Typography>
          </View>
          {!showProperties ? (
            <S.OpenClosePorpertiesButton onPress={() => setShowProperties(true)}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={32}
                color="#00344A"
              />
            </S.OpenClosePorpertiesButton>
          ) : (
            <S.OpenClosePorpertiesButton onPress={() => setShowProperties(false)}>
              <MaterialIcons
                name="keyboard-arrow-up"
                size={32}
                color="#00344A"
              />
            </S.OpenClosePorpertiesButton>
          )}
        </S.PropertyHeader>
      </S.PropertyContainer>
      {showProperties && (
        <CultureCard
          image={require("../../../../assets/onboarding4.png")}
          cultureTitle="Morango Campinas"
          plantingDate="02/02/2023"
          stage={1}
          sector="Setor 4"
          precipitation="20mm"
          groundStatus="-10mm"
          irrigationValue="2 Horas / 5.000 L"
          irrigationValueTotal="4 Horas / 10.000 L"
        />
      )} */}
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
        {data && data.data.length === 0 && (
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
         )}
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
  );
};
