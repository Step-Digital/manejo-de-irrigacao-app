import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Modal, SafeAreaView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import * as S from './style';

const Touchable = (text = 'Selecione...', onPress, selected, objValue, label, width) => {
  const TouchableComponent = () => {
    return (
      <S.Container width={width}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
          <Text style={styles.touchableText}>{selected === null ? text : selected?.[objValue]}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={26} color="#00344A" />
        </TouchableOpacity>
      </S.Container>
    )
  }
  return { TouchableComponent }
};

const Option = (item, value, selected, objKey, onPress) => {
  const OptionComponent = () => {
    return (
      <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
        <Text style={{ fontWeight: selected?.[objKey] === item?.[objKey] ? 'bold' : 'normal'}}>{item?.[value]}</Text>
        {selected?.[objKey] === item?.[objKey] ? <AntDesign name="check" size={20} color="green" /> : null}
      </TouchableOpacity>
    )
  }

  return { OptionComponent }
};

export const Select = ({ 
  touchableComponent = Touchable, 
  optionComponent = Option,
  touchableText = '', 
  title = '',
  data = [],
  objKey = 'id',
  objValue = 'name',
  label,
  width = '100%',
  setValue,
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const { TouchableComponent } = touchableComponent(touchableText, () => setVisible(true), 
    selected, 
    objValue,
    label,
    width
  );

  function renderOption(item) {
    const { OptionComponent } = optionComponent(item, objValue, selected, objKey, () => toggleSelect(item));
    return <OptionComponent />
  }

  function toggleSelect(item) {
    if(item?.[objKey] === selected?.[objKey]) {
      setSelected(null)
    } else {
      setSelected(item)
      setValue(item?.[objValue])
      setVisible(false)
    }
  }

  return (
    <>
      <TouchableComponent />
      <Modal visible={visible} animationType="slide">
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <AntDesign name="close" size={24} color="black" style={{ width: 30}} />
          </TouchableOpacity>
          <View style={styles.titleContent}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList 
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  touchableContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderColor: '#ACB4BA',
    backgroundColor: 'transparent',
    borderRadius: 90,
  },
  touchableText: {
    fontSize: 14,
    fontFamily: 'Poppins-regular',
    color: '#BCBCBC',
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  label: {
    color: '#00344A',
    marginBottom: 12,
    marginTop: 8,
    fontFamily: 'Poppins-bold',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  titleContent: {
    marginRight: 32,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Poppins-regular',
  }
})