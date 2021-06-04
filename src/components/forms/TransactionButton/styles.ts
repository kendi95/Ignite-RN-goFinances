import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface TransactionTypeProps {
  type: "up" | "down";
  isActive: boolean;
}

interface ButtonStyledProps {
  isActive: boolean;
  type: "up" | "down";
}

export const ButtonStyled = styled(TouchableOpacity)<ButtonStyledProps>`
  margin-top: ${RFValue(16)}px;
  width: ${RFPercentage(25)}px;
  height: ${RFValue(56)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(16)}px;

  ${({isActive}) => !isActive && css`
    background-color: ${({theme}) => theme.colors.backgroundLight};
  `};

  ${({isActive, type}) => isActive && type === 'up' && css`
    background-color: ${({theme}) => theme.colors.successLight};
  `};

  ${({isActive, type}) => isActive && type === 'down' && css`
    background-color: ${({theme}) => theme.colors.attentionLight};
  `};

  
`;

export const Icon = styled(Feather)<TransactionTypeProps>`
  font-size: ${RFValue(24)}px;
  ${({ type, isActive }) => type === 'up' && !isActive && css`
    color: ${({theme}) => theme.colors.success};
  `};
  ${({ type, isActive }) => type === 'up' && isActive && css`
    color: ${({theme}) => theme.colors.shape};
  `};

  ${({ type, isActive }) => type === 'down' && !isActive && css`
    color: ${({theme}) => theme.colors.attention};
  `};
  ${({ type, isActive }) => type === 'down' && isActive && css`
    color: ${({theme}) => theme.colors.shape};
  `};

  margin-right: ${RFValue(8)}px;
`;

export const Title = styled.Text<TransactionTypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(24)}px;

  ${({ type, isActive }) => type === 'down' && !isActive && css`
    color: ${({theme}) => theme.colors.title};
  `};
  ${({ type, isActive }) => type === 'down' && isActive && css`
    color: ${({theme}) => theme.colors.shape};
  `};

  ${({ type, isActive }) => type === 'up' && !isActive && css`
    color: ${({theme}) => theme.colors.title};
  `};
  ${({ type, isActive }) => type === 'up' && isActive && css`
    color: ${({theme}) => theme.colors.shape};
  `};
  
`;