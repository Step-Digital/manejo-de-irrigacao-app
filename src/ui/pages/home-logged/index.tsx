import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
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
  const [showProperties, setShowProperties] = useState(null);

  const { data, isLoading, refetch: refresh } = useQuery({
    queryKey: ["properties"],
    queryFn: () => propertyService.getProperties(),
  });

  const { data: allData, isLoading: isLoadingAll, refetch } = useQuery({
    queryKey: ["AllProperties"],
    queryFn: () => propertyService.getAllPropertiesData(),
  });

  function disableButton() {
    if (allData.data.length === 0) return true;
    return false;
  }

  console.log("allData", JSON.stringify(allData, null, 2));

  const navigation = useNavigation<NavigationProps>();

  if (isLoading && isLoadingAll) return <Text>Carregando...</Text>;

  const isSomeCulture =
    allData && allData.data.some((item) => item.cultura.length > 0);

    // useEffect(() => {
    //   refetch()
    //   refresh()
    // }, [allData, data])

  return (
    <S.Container>
      <Header minHeader={false} />
      {allData && isSomeCulture && (

      <ScrollView>
        <S.PropertyContainer>
          <S.PropertyHeader>
            {allData &&
              allData.data.map((it) => {
                return (
                  <>
                    {it.cultura.length !== 0 && (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
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
                            {it.nome} &nbsp;
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
                              ({it.cultura.length})
                            </Typography>
                          </Typography>
                        </View>
                        {showProperties === it.id_propriedade ? (
                          <S.OpenClosePorpertiesButton
                            onPress={() => setShowProperties(null)}
                          >
                            <MaterialIcons
                              name="keyboard-arrow-up"
                              size={32}
                              color="#00344A"
                            />
                          </S.OpenClosePorpertiesButton>
                        ) : (
                          <S.OpenClosePorpertiesButton
                            onPress={() => setShowProperties(it.id_propriedade)}
                          >
                            <MaterialIcons
                              name="keyboard-arrow-down"
                              size={32}
                              color="#00344A"
                            />
                          </S.OpenClosePorpertiesButton>
                        )}
                      </View>
                    )}

                    <View>
                      {showProperties === it.id_propriedade &&
                        it.cultura &&
                        it.cultura.map((item) => {
                          return (
                            <CultureCard
                              image={require("../../../../assets/onboarding4.png")}
                              cultureTitle={item.nome_cultura}
                              plantingDate={item.data_plantio}
                              stage={item.estagio_colheita}
                              sector={item.setores}
                              precipitation={`${it.precipitacao}mm`}
                              groundStatus="-10mm"
                              irrigationValue="2 Horas / 5.000 L"
                              irrigationValueTotal="4 Horas / 10.000 L"
                            />
                          );
                        })}
                    </View>
                  </>
                );
              })}
          </S.PropertyHeader>
        </S.PropertyContainer>
      </ScrollView>
      )}

      <S.Content>
        {allData && !isSomeCulture && (
          <>
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
                fontFamily: "Poppins-regular",
              }}
              color="gray-4"
              size="normal"
              weight="regular"
            >
              {strings.homeLogged.noProperty}
            </Typography>
          </>
        )}

        {allData && allData.data.length === 0 && (
          <Typography
            style={{
              // width: 338,
              textAlign: "center",
              marginTop: 16,
              fontFamily: "Poppins-regular",
              padding: 16,
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
              onPress={() => navigation.navigate("NewProperty")}
            >
              {strings.homeLogged.addPropertyText2}
            </Typography>
          </Typography>
        )}
      </S.Content>

      <S.ButtonContainer>
        <S.OpenModalButton
          onPress={() => setOpenButtonsModal(!openButtonsMOdal)}
        >
          <S.OpenModalButtonText>
            {openButtonsMOdal ? "-" : "+"}
          </S.OpenModalButtonText>
        </S.OpenModalButton>
      </S.ButtonContainer>
      {openButtonsMOdal && (
        <S.ButtonModalContainer>
          <S.AddCultureButton
            bg-color="positive"
            onPress={() => navigation.navigate("CultureInfo")}
            disabled={disableButton()}
          >
            <Image
              source={require("../../../../assets/Light.png")}
              style={{
                width: 24,
                height: 24,
              }}
            />
            <Typography
              style={{ fontFamily: "Poppins-regular", marginLeft: 8 }}
              color="pure-white"
              size="normal"
              weight="medium"
            >
              {strings.homeLogged.addButton.addCulture}
            </Typography>
          </S.AddCultureButton>
          <S.AddPropertyButton
            bg-color="positive"
            onPress={() => navigation.navigate("NewProperty")}
          >
            <Image
              source={require("../../../../assets/Regular.png")}
              style={{
                width: 24,
                height: 24,
              }}
            />
            <Typography
              style={{ fontFamily: "Poppins-regular", marginLeft: 8 }}
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
