import React from "react";

import * as S from './style';

interface CategoryCardProps {
  text: string;
}

export const CategoryCard:React.FC = ({ text }: CategoryCardProps) => {
  return(
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}