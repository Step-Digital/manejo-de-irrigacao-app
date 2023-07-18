import React from "react";
import { Platform, TextInput, TextInputProps } from "react-native";
import * as S from "./style";
import { Typography } from "../typography";

export type InputProps = {
  label: string;
  placeholder: string;
} & TextInputProps;

export const Input: React.FC<InputProps> = (props) => {
  return (
    <S.StyledWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Typography color="neutral-4" size="small" weight="bold">
        {props.label}
      </Typography>
      <S.StyledInput
        {...props}
        keyboardAppearance="light"
        placeholderTextColor="#ACB4BA"
      />
    </S.StyledWrapper>
  );
};
