import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Formik } from 'formik';

import { CacheDomain } from "../../../core/domain/cache.domain";
import { NewPropertyDomain } from "../../../core/domain/newProperty.domain";
import { strings } from "../../../utils";
import { NavigationProps } from "../../routes/types/StackNavigationProps";
import { groundValidators } from '../../../utils/validators'
import { groundTypes } from '../../../utils/selectValues';

import { Typography } from "../../components/typography";
import { Input } from "../../components/input";
import { Header } from "../../components/Header";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/button";
import { Select } from "../../components/SelectInput";

import * as S from './style'

type GroundInfoProps = {
  auth: NewPropertyDomain;
  cache: CacheDomain;
};

const inputStrings = strings.groundInfo.inputs;

export const GroundInfo:React.FC<GroundInfoProps> = ({ auth }) => {
  const navigation = useNavigation<NavigationProps>();
  const [grounds, setGrounds] = useState([]);
  const [tipo_solo, setTipo_solo] = useState('');
  const [capacidade_campo, setCapacidade_campo] = useState('');
  const [ponto_murcha, setPonto_murcha] = useState('');
  const [densidade, setDensidade] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' })

  const removeGround = (id) => {
    const newArrGrounds = grounds.filter(ground => ground.id !== id)

    return setGrounds(newArrGrounds);
  }

  const initialValues = {
    tipo_solo: '',
    capacidade_campo: 0,
    ponto_murcha: 0,
    densidade: 0,
  }

  const validateValues = {
    tipo_solo,
    capacidade_campo,
    ponto_murcha,
    densidade,
  }

  const sumbitValues = {
    tipo_solo,
    capacidade_campo: Number(capacidade_campo),
    ponto_murcha: Number(ponto_murcha),
    densidade: Number(densidade),
    id_propriedade: 1,
  }

  async function validate() {
    try {
      await groundValidators.validate(validateValues)
      return true
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.errors
      })
      return false
    }
  } 

  const createGround = useMutation<AxiosError>({
    mutationFn: () => auth.newGround(sumbitValues),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit = async (action) => {
    if(!(await validate()))  return Alert.alert(status.message[0])

    return action
  }

  useEffect(() => {
    validate()
  }, [])

  // const onSubmit = (values, errors, isValid, dirty) => {
  //   console.log(values)
  //   console.log('errors', errors)
  //   console.log('isValid', isValid)
    
  //   if (errors.capacidade_campo || values.capacidade_campo === 0) return Alert.alert(RULES.CAPACIDADE_CAMPO.VALID)
  //   if (errors.ponto_murcha || values.ponto_murcha === 0) return Alert.alert(RULES.PONTO_MURCHA.VALID)
  //   if (errors.densidade || values.densidade === 0) return Alert.alert(RULES.DENSIDADE.VALID)
  //   if (isValid === false || !dirty) return Alert.alert('Preencha todos os campos!')

  //   setGrounds([
  //     ...grounds,
  //     {
  //       id: Math.random(),
  //       groundType: values.tipo_solo,
  //       capacity: values.capacidade_campo,
  //       point: values.ponto_murcha,
  //       density: values.densidade
  //     }]
  //   )
  // }

  return (
    <S.Container>
      <Header minHeader minTitle="Nova Propriedade" action={() => navigation.navigate('NewProperty')} />
      <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
      <S.ProgressBarContainer>
        <ProgressBar active width="80px" />
        <ProgressBar active width="80px" />
        <ProgressBar active={false} width="80px" />
        <ProgressBar active={false} width="80px" />
      </S.ProgressBarContainer>
      <S.Content>
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={groundValidators}
        >
          {({ 
            values,
            errors,
            handleChange,
            isValid,
            dirty,
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
              {strings.groundInfo.title}
            </Typography>
            <Select 
              touchableText="Selecione..." 
              title="State" 
              objKey="id" 
              objValue="name" 
              data={groundTypes} 
              label="Tipo de Solo"
              setValue={(value) => setTipo_solo(value)}
            />
            <Input 
              label={inputStrings.capacity.label} 
              placeholder={inputStrings.capacity.placeholder}  
              value={capacidade_campo}
              onChangeText={(value) => setCapacidade_campo(value)}
              inputMode="numeric"
            />
            <Input 
              label={inputStrings.point.label} 
              placeholder={inputStrings.point.placeholder}   
              value={ponto_murcha}
              onChangeText={(value) => setPonto_murcha(value)}
              inputMode="numeric"
            />
            <Input 
              label={inputStrings.density.label} 
              placeholder={inputStrings.density.placeholder}   
              value={densidade}
              onChangeText={(value) => setDensidade(value)}
              inputMode="numeric"
            />

            <S.AddButton  onPress={() => onSubmit(createGround.mutate())}>
                <Ionicons name="add" size={24} color="#fff" />
                <Typography
                  style={{
                    fontFamily: 'Poppins-bold',
                    fontSize: 12,
                    marginLeft: 8,
                    width: 100
                  }}
                  color="pure-white"
                  size="normal"
                  weight="regular"
                  >
                  {strings.groundInfo.addButtonn}
                </Typography>
            </S.AddButton>

            {grounds && grounds.map(item => (
              <S.CardContainer key={item.id}>
                <S.CardContent>
                  <S.InfoTitle>{item.groundType}</S.InfoTitle>
                  <S.InfoText>Capacidade de Campo: <S.InfoTextBold>{item.capacity}%</S.InfoTextBold></S.InfoText>
                  <S.InfoText>Ponto de Murcha: <S.InfoTextBold>{item.point}%</S.InfoTextBold></S.InfoText>
                  <S.InfoText>Densidade: <S.InfoTextBold>{item.density}g/m²</S.InfoTextBold></S.InfoText>
                </S.CardContent>
                <TouchableOpacity onPress={() => removeGround(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="red" />
                </TouchableOpacity>
              </S.CardContainer>
            ))}

            <Button 
              onPress={() =>{ navigation.navigate('BombInfo')}}
              disabled={!grounds} 
              bg-color="positive" 
              style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'flex-end', 
                paddingRight: 24, 
                marginTop: 24, 
                marginBottom: 24 
              }}>
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