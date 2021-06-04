import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const InputStyled = styled(TextInput)`
  width: 100%;
  padding: 16px;

  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  line-height: ${RFValue(16)}px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;

`;

export const Error = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.attention};
  margin-bottom: ${RFValue(4)}px;
  align-self: flex-end;
`;