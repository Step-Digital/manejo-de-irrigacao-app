import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Alert, ScrollView } from 'react-native';
import { NavigationProps } from "../../routes/types/StackNavigationProps";

import { strings } from '../../../utils';
import { cultureValidators } from '../../../utils/validators';

import { Header } from '../../components/Header';
import { ProgressBar } from '../../components/ProgressBar';
import { Typography } from '../../components/typography';
import { Input } from '../../components/input';
import { Select } from '../../components/SelectInput';
import { Button } from '../../components/button';
import * as S from './style';

const inputStrings = strings.CultureInfo.inputs;

export const CultureInfo: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [nome_cultura, setNome_cultura] = useState('');
  const [data_plantio, setData_plantio] = useState('');
  const [area_plantio, setArea_plantio] = useState('');
  const [setores, setSetores] = useState('');
  const [estagio_colheita, setEstagio_colheita] = useState('');
  const [id_dados_cultura, serId_dados_cultura] = useState('');
  const [id_propriedade, setId_propriedade] = useState('');
  const [id_sistema_irrigacao, setId_sistema_irrigacao] = useState('');
  const [id_motobomba, setId_motobomba] = useState('');
  const [id_solo, setId_solo] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' })

  const validateValues = {
    nome_cultura,
    data_plantio,
    area_plantio,
    setores,
    estagio_colheita,
    id_dados_cultura,
    id_propriedade,
    id_sistema_irrigacao,
    id_motobomba,
    id_solo,
  }

  async function validate() {
    try {
      await cultureValidators.validate(validateValues)
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


  return (
    <S.Container>
      <Header 
        minHeader 
        minTitle={strings.CultureInfo.title} 
        action={() => navigation.navigate('HomeLogged')}
        isFinalStep={false}
      />
      <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
      <S.ProgressBarContainer>
          <ProgressBar active width="176px" />
          <ProgressBar active width="176px" />
      </S.ProgressBarContainer>
        <S.Content>

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
            {strings.CultureInfo.subTitle}
        </Typography>
        <Input 
          label={inputStrings.culture.label} 
          placeholder={inputStrings.culture.placeholder}  
        />
        <Input 
          label={inputStrings.cultureName.label} 
          placeholder={inputStrings.cultureName.placeholder}  
          value={nome_cultura}
          onChangeText={(value) => setNome_cultura(value)}
        />
        <Input 
          label={inputStrings.date.label} 
          placeholder={inputStrings.date.placeholder}  
          value={data_plantio}
          onChangeText={(value) => setData_plantio(value)}
        />
        <Input 
          label={inputStrings.area.label} 
          placeholder={inputStrings.area.placeholder}  
          value={area_plantio}
          onChangeText={(value) => setArea_plantio(value)}
        />
        <Input 
          label={inputStrings.sector.label} 
          placeholder={inputStrings.sector.placeholder}  
          value={setores}
          onChangeText={(value) => setSetores(value)}
        />
        <Input 
          label={inputStrings.stage.label} 
          placeholder={inputStrings.stage.placeholder}  
          value={estagio_colheita}
          onChangeText={(value) => setEstagio_colheita(value)}
        />
        <Select 
          label={inputStrings.property.label}
          touchableText={inputStrings.property.placeholder}
          setValue={setId_propriedade}
        />
        <Select 
          label={inputStrings.groundType.label}
          touchableText={inputStrings.groundType.placeholder}
          setValue={setId_solo}
        />
        <Select 
          label={inputStrings.bomb.label}
          touchableText={inputStrings.bomb.placeholder}
          setValue={setId_motobomba}
        />
        <Select 
          label={inputStrings.irrigationSystem.label}
          touchableText={inputStrings.irrigationSystem.placeholder}
          setValue={setId_sistema_irrigacao}
        />
        <Button 
          onPress={() => navigation.navigate('CultureRegistered')}
          bg-color="positive" 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            marginTop: 24, 
            marginBottom: 24 
          }}
        >
          <Typography
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: 18,
            }}
            color="pure-white"
            size="normal"
            weight="bold"
          >
            {strings.CultureInfo.button}
          </Typography>
        </Button>
        </S.Content>
      </ScrollView>
    </S.Container>
  )
}