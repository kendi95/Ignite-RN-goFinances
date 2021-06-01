import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ScrollView, FlatList } from 'react-native';

// export const Container = styled(ScrollView).attrs({
//   showsVerticalScrollIndicator: false
// })`
//   flex: 1;
//   background-color: ${({theme}) => theme.colors.backgrond};
// `;

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgrond};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(38)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: ${RFValue(16)}px;
  border-bottom-right-radius: ${RFValue(16)}px;

`;

export const HeadeWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(48)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;

  border-radius: 32px;
`;

export const User = styled.View`
  margin-left: 16px;
`;

export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Username = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(24)}px;
`; 

export const Button = styled(BorderlessButton)`
  border-radius: ${RFValue(6)}px;
  align-items: center;
  justify-content: center;
  width: ${RFPercentage(6)}px;
  height: ${RFPercentage(6)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.secondary};
`;

export const Cards = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 24
  }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 48
  }
})`
  padding: 0 24px;
  margin-top: ${RFPercentage(10)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;

  margin: 48px 0 -56px 24px;
`; 