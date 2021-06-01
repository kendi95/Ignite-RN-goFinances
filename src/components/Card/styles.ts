import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down' | 'total';
}

interface ColorProps {
  type?: 'up' | 'down' | 'total';
}

export const Container = styled.View<ColorProps>`
  width: ${RFValue(300)}px;
  height: ${RFPercentage(24)}px;
  
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: ${RFValue(16)}px;

  margin-right: ${RFValue(16)}px;

  ${({type}) => type === 'total' 
  ? css`
      background-color: ${({theme}) => theme.colors.secondary};
    `
  : css`
      background-color: ${({theme}) => theme.colors.shape};
    `
  };
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text<ColorProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;

  ${({type}) => type === 'total' 
  ? css`
      color: ${({theme}) => theme.colors.shape};
    `
  : css`
      color: ${({theme}) => theme.colors.title};
    `
  };
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(32)}px;
  
  ${({type}) => type === 'up' && css`
    color: ${({theme}) => theme.colors.success};
  `};

  ${({type}) => type === 'down' && css`
    color: ${({theme}) => theme.colors.attention};
  `};

  ${({type}) => type === 'total' && css`
    color: ${({theme}) => theme.colors.shape};
  `};
`;

export const Content = styled.View`
  width: 100%;
`;

export const Amount = styled.Text<ColorProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  ${({type}) => type === 'total' 
  ? css`
      color: ${({theme}) => theme.colors.shape};
    `
  : css`
      color: ${({theme}) => theme.colors.title};
    `
  };
`;

export const LastTransaction = styled.Text<ColorProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;

  ${({type}) => type === 'total' 
  ? css`
      color: ${({theme}) => theme.colors.shape};
    `
  : css`
      color: ${({theme}) => theme.colors.text};
    `
  };
`;