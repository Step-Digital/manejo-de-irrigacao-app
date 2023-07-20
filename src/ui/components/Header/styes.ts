import styled, { css } from "styled-components/native";

export const Container = styled.View`
 ${({ theme}) => css`
    width: 100%;
    background-color: ${theme.colors['neutral-4']};
    display: flex;
    padding: 40px 16px 12px 16px;
    border-radius: 0 0 24px 24px;
  `}
`;

export const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
`;

export const DropDownButton = styled.TouchableOpacity``;

export const ProfileButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["pure-white"]};
    font-size: 16px;
    font-weight: ${theme.font.weight.bold};
    margin-top: 18px;
    width: 131px;
    font-family: 'Poppins-regular';
    `}
`;

