import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { CacheDomain } from "../../../core/domain/cache.domain";
import { NewPropertyDomain } from "../../../core/domain/newProperty.domain";
import { NavigationProps } from "../../routes/types/StackNavigationProps";
import { strings } from "../../../utils";
import { bombValidators } from '../../../utils/validators'

import { Typography } from "../../components/typography";
import { Input } from "../../components/input";
import { ProgressBar } from "../../components/ProgressBar";
import { Header } from "../../components/Header";
import { Button } from "../../components/button";

import * as S from './style';

type BombInfoProps = {
  auth: NewPropertyDomain;
  cache: CacheDomain;
};

const inputStrings = strings.bombInfo.inputs;

export const BombInfo:React.FC<BombInfoProps> = ({ auth }) => {
  const navigation = useNavigation<NavigationProps>();
  const [bombs, setBombs] = useState([]);
  const [fabricante, setFabricante] = useState('');
  const [modelo, setModelo] = useState('');
  const [potencia, setPotencia] = useState('');
  const [vazao_maxima, setVazao_maxima] = useState('');
  const [consumo, setConsumo] = useState('');
  const [valor_kw, setValor_kw] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' })

  // const onSubmit = (values, errors, isValid, dirty) => {
  //   console.log(values)
  //   console.log('errors', errors)
  //   console.log('isValid', isValid)
    
  //   if (errors.potencia || values.potencia === 0) return Alert.alert(RULES.POTENCIA.VALID)
  //   if (errors.vazao_maxima || values.vazao_maxima === 0) return Alert.alert(RULES.VAZAO_MAXIMA.VALID)
  //   if (errors.consumo || values.consumo === 0) return Alert.alert(RULES.CONSUMO.VALID)
  //   if (errors.valor_kw || values.valor_kw === 0) return Alert.alert(RULES.VALOR_KW.VALID)
  //   if (isValid === false || !dirty) return Alert.alert('Preencha todos os campos!')

  //   setBombs([
  //     ...bombs,
  //     {
  //       id: Math.random(),
  //       manufacturer: values.fabricante,
  //       model: values.modelo,
  //       power: values.potencia,
  //       flowRate: values.vazao_maxima,
  //       consumption: values.consumo,
  //       value: values.valor_kw
  //     }]
  //   )
  // }

  const initialValues = {
    fabricante: '',
    modelo: '',
    potencia: '',
    vazao_maxima: 0,
    consumo: 0,
    valor_kw: 0,
  }

  const validateValues = {
    fabricante,
    modelo,
    potencia,
    vazao_maxima,
    consumo,
    valor_kw,
  }

  const sumbitValues = {
    fabricante,
    modelo,
    potencia,
    vazao_maxima: Number(vazao_maxima),
    consumo: Number(consumo),
    valor_kw: Number(valor_kw),
    ativada: true,
    id_propriedade: 1
  }
  
  async function validate() {
    try {
      await bombValidators.validate(validateValues)
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

  const createBomb = useMutation<AxiosError>({
    mutationFn: () => auth.newBomb(sumbitValues),
    onSuccess: (data) => {
      console.log(data);
    },
  });


  const removeGround = (id) => {
    const newArrGrounds = bombs.filter(ground => ground.id !== id)

    return setBombs(newArrGrounds);
  }

  useEffect(() => {
    validate()
  }, [])

  return (
    <S.Container>
      <Header minHeader minTitle="Nova Propriedade" action={() => navigation.navigate('GroundInfo')} />
      <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
      <S.ProgressBarContainer>
        <ProgressBar active width="80px" />
        <ProgressBar active width="80px" />
        <ProgressBar active width="80px" />
        <ProgressBar active={false} width="80px" />
      </S.ProgressBarContainer>
      <S.Content>
      <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={bombValidators}
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
                  {strings.bombInfo.title}
              </Typography>
              <Input 
                label={inputStrings.manufacturer.label} 
                placeholder={inputStrings.manufacturer.placeholder}  
                value={fabricante}
                onChangeText={(value) => setFabricante(value)}
              />
              <Input 
                label={inputStrings.model.label} 
                placeholder={inputStrings.model.placeholder}   
                value={modelo}
                onChangeText={(value) => setModelo(value)}
              />
              <Input 
                label={inputStrings.power.label} 
                placeholder={inputStrings.power.placeholder}   
                value={potencia}
                onChangeText={(value) => setPotencia(value)}
                inputMode="numeric"
              />
              <Input 
                label={inputStrings.flowRate.label} 
                placeholder={inputStrings.flowRate.placeholder}   
                value={vazao_maxima}
                onChangeText={(value) => setVazao_maxima(value)}
                inputMode="numeric"
              />
              <Input 
                label={inputStrings.consumption.label} 
                placeholder={inputStrings.consumption.placeholder}   
                value={consumo}
                onChangeText={(value) => setConsumo(value)}
                inputMode="numeric"
              />
              <Input 
                label={inputStrings.value.label} 
                placeholder={inputStrings.value.placeholder}   
                value={valor_kw}
                onChangeText={(value) => setValor_kw(value)}
                inputMode="numeric"
              />

              <S.AddButton onPress={() => onSumbit(createBomb.mutate())}>
                  <Ionicons name="add" size={24} color="#fff" />
                  <Typography
                    style={{
                      fontFamily: 'Poppins-bold',
                      marginLeft: 8,
                    }}
                    color="pure-white"
                    size="tiny"
                    weight="regular"
                    >
                    {strings.bombInfo.addButtonn}
                  </Typography>
              </S.AddButton>
  
              {bombs && bombs.map(item => (
                <S.CardContainer key={item.id}>
                  <S.CardContent>
                    <S.InfoTitle>{item.model}</S.InfoTitle>
                    <S.InfoText>Fabricante: <S.InfoTextBold>{item.manufacturer}</S.InfoTextBold></S.InfoText>
                    <S.InfoText>Potência: <S.InfoTextBold>{item.power}w</S.InfoTextBold></S.InfoText>
                    <S.InfoText>Vazão Máxima: <S.InfoTextBold>{item.flowRate}m³/ha</S.InfoTextBold></S.InfoText>
                    <S.InfoText>Consumo: <S.InfoTextBold>{item.consumption}kw/h</S.InfoTextBold></S.InfoText>
                    <S.InfoText>Valor do Kw: <S.InfoTextBold>R${item.value}</S.InfoTextBold></S.InfoText>
                  </S.CardContent>
                  <TouchableOpacity onPress={() => removeGround(item.id)}>
                    <Ionicons name="trash-outline" size={24} color="red" />
                  </TouchableOpacity>
                </S.CardContainer>
              ))}
  
              <Button 
                onPress={() => navigation.navigate('SystemInfo')}
                disabled={!bombs} 
                bg-color="positive" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'flex-end', 
                  paddingRight: 24, 
                  marginTop: 24, 
                  marginBottom: 24 
                }}
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