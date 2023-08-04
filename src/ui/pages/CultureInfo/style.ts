import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1
`;

export const ProgressBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: "column";
  gap: 10px;
`;

export const CategoryContainer = styled.View``;

export const CategoryTitle = styled.Text`
${({ theme }) => css`
  color: ${theme.colors["positive"]};
  font-family: 'Poppins-bold';
  font-size: 16px;
  font-style: normal;
  margin-top: 16px;
`}
`;

export const CategoryButton = styled.TouchableOpacity``;