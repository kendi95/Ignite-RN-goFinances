import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(112)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 18px;

  border-bottom-left-radius: ${RFValue(24)}px;
  border-bottom-right-radius: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const Form = styled.KeyboardAvoidingView`
  justify-content: space-between;
  padding: ${RFValue(24)}px;
  width: 100%;
  height: ${RFValue(height - 32)}px;
`;

export const Fields = styled.View`
`;

export const TransactionFields = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;