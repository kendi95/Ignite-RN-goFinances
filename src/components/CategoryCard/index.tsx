import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Icon, Title } from './styles';

interface Category {
  id: number;
  icon: string;
  category: string;
}

interface CategoryCardProps extends TouchableOpacityProps {
  isSelected: boolean;
  onSelect: (category: Category) => void;
  data: {
    id: number;
    icon: string;
    category: string;
  }
}

const CategoryCard: FC<CategoryCardProps> = ({ data, onSelect, isSelected, ...rest }) => {

  const handleSelect = (category: Category) => {
    onSelect(category);
  }

  return (
    <Container 
      isSelected={isSelected} 
      onPress={() => handleSelect(data)}
      {...rest}>
      <Icon  name={data.icon} isSelected={isSelected} />
      <Title isSelected={isSelected}>{data.category}</Title>
    </Container>
  );

}

export { CategoryCard };