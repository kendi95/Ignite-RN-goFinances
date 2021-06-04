import styled from 'styled-components/native';
import { Modal, TouchableOpacity, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 16px;
  margin-top: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const TextStyled = styled.Text`
  width: 100%;

  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  line-height: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const CategoryModal = styled(Modal).attrs({
  hardwareAccelerated: true,
  animationType: "slide",
})`
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(25)}px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(96)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const IconButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6
})`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(48)}px;
  background-color: ${({theme}) => theme.colors.background};

  opacity: ${({disabled}) => disabled ? 0.3 : 1};

  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const CheckIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.successLight};
`;

export const Categories = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 24px;
`;