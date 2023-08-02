import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, ScrollView, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Formik } from 'formik';

import { CacheDomain } from "../../../core/domain/cache.domain";
import { NewPropertyDomain } from "../../../core/domain/newProperty.domain";
import { NavigationProps } from "../../routes/types/StackNavigationProps";
import { propertyValidators } from '../../../utils/validators';
import { states } from '../../../utils/selectValues';
import { strings } from "../../../utils";

import { Typography } from "../../components/typography";
import { Input } from "../../components/input";
import { Header } from "../../components/Header";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/button";
import { Select } from "../../components/SelectInput";

import * as S from './style'
import { AuthDomain } from "../../../core/domain/auth.domain";

type NewPropertyProps = {
  auth: AuthDomain;
  cache: CacheDomain;
  propertyService: NewPropertyDomain;
};

const inputStrings = strings.newProperty.inputs;

export const NewPropertyScreen:React.FC<NewPropertyProps> = ({ propertyService }) => {
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [cep, setCep] = useState('')
  const [area_propriedade, setArea_propriedade] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })
  const navigation = useNavigation<NavigationProps>();

  const initialValues = {
    nome: '',
    latitude: '',
    longitude: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
    cep: '',
    area_propriedade: '',
    precipitacao: 0,
  }

  const validateValues = {
    nome,
    latitude,
    longitude,
    logradouro,
    complemento,
    cidade,
    estado,
    numero,
    cep,
    area_propriedade,
  }

  const sumbitValues = {
    nome,
    latitude,
    longitude,
    logradouro,
    complemento,
    cidade,
    estado,
    numero,
    cep,
    area_propriedade: Number(area_propriedade),
    precipitacao: 70
  }
  
  async function validate() {
    try {
      await propertyValidators.validate(validateValues)
      return true
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.errors
      })
      return false
    }
  } 

  const onSumbit = async (action) => {
    if(!(await validate()))  return Alert.alert(status.message[0])

    return action
  }

  const createProperty = useMutation<AxiosError>({
    mutationFn: () => propertyService.newProperty(sumbitValues),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    validate()
  }, [])

  return (
    <S.Container>
      <Header minHeader minTitle="Nova Propriedade" action={() => navigation.navigate('HomeLogged')} />
      <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
      <S.ProgressBarContainer>
        <ProgressBar active width="80px" />
        <ProgressBar active={false} width="80px" />
        <ProgressBar active={false} width="80px" />
        <ProgressBar active={false} width="80px" />
      </S.ProgressBarContainer>
      <S.Content>
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={propertyValidators}
        >
          {({ 
            values,
            errors,
            handleChange,
            isValid,
            dirty
         }) => (
          <View>
            <Typography
              style={{
                marginTop: 24,
                fontFamily: 'Poppins-bold',
                fontSize: 22,
              }}
              color="positive"
              size="normal"
              weight="regular"
            >
              {strings.newProperty.title}
            </Typography>
            <Input 
              label={inputStrings.name.label} 
              placeholder={inputStrings.name.placeholder}  
              value={nome}
              onChangeText={(value) => setNome(value)}
            />
            <Typography
              style={{
                fontFamily: 'Poppins-bold',
                fontSize: 14,
                marginTop: 12,
                marginBottom: 10,
              }}
              color="neutral-4"
              size="normal"
              weight="regular"
            >
              {strings.newProperty.insertButton.label}
            </Typography>
            {!showForm && (<S.ButtonsContainer>
            <S.InsertButton onPress={() => setShowForm(true)}>
              <Typography
                style={{
                  fontFamily: 'Poppins-regular',
                  fontSize: 14,
                  width: 88,
                  textAlign: 'center',
                  lineHeight: 15
                }}
                color="neutral-4"
                size="normal"
                weight="bold"
                >
                {strings.newProperty.insertButton.text}
              </Typography>
            </S.InsertButton>
            <S.GPSBUtton>
              <EvilIcons name="location" size={24} color="#00344A" />
              <Typography
                style={{
                  fontFamily: 'Poppins-regular',
                  fontSize: 14,
                  width: 88,
                  textAlign: 'center',
                  lineHeight: 15
                }}
                color="neutral-4"
                size="normal"
                weight="bold"
                >
                {strings.newProperty.gpsButton.text}
              </Typography>
            </S.GPSBUtton>
            </S.ButtonsContainer>)}
            {showForm && (
              <S.GPSButtonFull onPress={() => onSumbit(createProperty.mutate())}>
                <EvilIcons name="location" size={24} color="#fff" />
                <Typography
                  style={{
                    fontFamily: 'Poppins-regular',
                    fontSize: 14,
                    textAlign: 'center',
                    lineHeight: 15,
                    marginLeft: 16,
                  }}
                  color="pure-white"
                  size="normal"
                  weight="bold"
                  >
                  {strings.newProperty.gpsButton.text}
                </Typography>
              </S.GPSButtonFull>
            )}
            {showForm && (
            <View style={{ flex: 1}}>
              <Input 
                label={inputStrings.latidude.label} 
                placeholder={inputStrings.latidude.placeholder} 
                style={{ fontFamily: 'Poppins-regular' }} 
                value={latitude}
                onChangeText={(value) => setLatitude(value)}
                inputMode="numeric"
                />
                 <Input 
                label={inputStrings.longitude.label} 
                placeholder={inputStrings.longitude.placeholder} 
                value={longitude}
                onChangeText={(value) => setLongitude(value)}
                inputMode="numeric" 
                />
              <Input 
                label={inputStrings.street.label} 
                placeholder={inputStrings.street.placeholder} 
                value={logradouro}
                onChangeText={(value) => setLogradouro(value)}
              />
              <S.InputsContainer>
                <Input 
                  label={inputStrings.number.label} 
                  placeholder={inputStrings.number.placeholder} 
                  value={numero}
                  onChangeText={(value) => setNumero(value)}
                  inputMode="numeric"
                  style={{ width: 180 }} 
                /> 
                <Input 
                  label={inputStrings.complement.label} 
                  placeholder={inputStrings.complement.placeholder} 
                  value={complemento}
                  onChangeText={(value) => setComplemento(value)}
                  style={{ width: 180 }} 
                />
              </S.InputsContainer>
              <Input 
                label={inputStrings.city.label} 
                placeholder={inputStrings.city.placeholder} 
                value={cidade}
                onChangeText={(value) => setCidade(value)}
              />
              <S.InputsContainer>
                <Select
                  label="Estado"
                  touchableText="Selecione..."
                  width="180px"
                  data={states}
                  objKey="id" 
                  objValue="name" 
                  title="Estado"
                  setValue={setEstado}
                />
                <Input 
                  label={inputStrings.cep.label} 
                  placeholder={inputStrings.cep.placeholder} 
                  style={{ width: 180 }} 
                  value={cep}
                  onChangeText={(value) => setCep(value)}
                  maxLength={8}
                />
              </S.InputsContainer>
            </View>
            )}

            <Input 
              label={inputStrings.area.label} 
              placeholder={inputStrings.area.placeholder} 
              value={area_propriedade}
              onChangeText={(value) => setArea_propriedade(value)}
              inputMode="numeric"
            />

            <Button 
            bg-color="positive" 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'flex-end',
              paddingRight: 24, 
              marginTop: 24, 
              marginBottom: 24 }}
            onPress={() => {navigation.navigate('GroundInfo')}}
            >
            <Typography
              style={{
                fontFamily: 'Poppins-regular',
                fontSize: 18,
                width: 180,
              }}
              color="pure-white"
              size="normal"
              weight="bold"
              >
            Continuar
            </Typography>
            <AntDesign name="arrowright" size={24} color="#fff" />
            </Button>
          </View>

          )}
        </Formik>

      </S.Content>
      </ScrollView>
    </S.Container>
    )
}