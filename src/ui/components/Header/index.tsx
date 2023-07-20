import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { strings } from "../../../utils";

import * as S from './styes';

export const Header = () => {
  return(
    <S.Container>
      <S.ProfileContainer>
        <S.DropDownButton>
          <MaterialIcons name="menu" size={26} color="#fff" />
        </S.DropDownButton>
        <S.ProfileButton>
          <Ionicons name="person-outline" size={20} color="#fff" />
        </S.ProfileButton>
      </S.ProfileContainer>
      <S.Title>{strings.header.title}</S.Title>
    </S.Container>
  )
}