import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface AmountProps {
  type: "positive" | "negative";
}

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 16px 24px;
  border-radius: 16px;

  margin-bottom: ${RFPercentage(4)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
`;

export const Amount = styled.Text<AmountProps>`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  
  ${({type}) => type === 'positive' && css`
    color: ${({theme}) => theme.colors.success};
  `}

  ${({type}) => type === 'negative' && css`
    color: ${({theme}) => theme.colors.attention};
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${RFValue(16)}px;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Data = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.text};
`;
export const TypeText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  margin-left: ${RFValue(8)}px;
`;