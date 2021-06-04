import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonStyled = styled(TouchableOpacity)`
  width: 100%;
  height: ${RFValue(56)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(16)}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};
`;