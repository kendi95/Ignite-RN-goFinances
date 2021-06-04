import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface CategoryProps {
  isSelected: boolean;
}

export const Container = styled(TouchableOpacity)<CategoryProps>`
  width: 100%;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(16)}px;
  padding: 0 24px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${RFValue(16)}px;

  ${({isSelected}) => isSelected 
    ? css`
      background-color: ${({theme}) => theme.colors.background};
    `
    : css`
      background-color: ${({theme}) => theme.colors.backgroundLight};
    `};
`;

export const Icon = styled(Feather)<CategoryProps>`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(16)}px;

  color: ${({isSelected, theme}) => isSelected 
    ? theme.colors.primary 
    : theme.colors.text
  };
`;

export const Title = styled.Text<CategoryProps>`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  line-height: ${RFValue(32)}px;

  color: ${({isSelected, theme}) => isSelected 
    ? theme.colors.primary 
    : theme.colors.text
  };
`;