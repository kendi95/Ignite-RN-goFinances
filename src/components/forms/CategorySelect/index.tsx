import React, { FC, useState } from 'react';
import { CategoryCard } from '../../CategoryCard';

import { 
  TextStyled, 
  Container, 
  Icon, 
  CategoryModal, 
  Header, 
  IconButton, 
  CloseIcon, 
  CheckIcon,
  Categories,
} from './styles';

interface Category {
  id: number;
  icon: string;
  category: string;
}

interface CategorySelectProps {
  onSelectedCategory: (category: Category) => void;
}

const CategorySelect: FC<CategorySelectProps> = ({ onSelectedCategory }) => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: 0,
    icon: "",
    category: ""
  });

  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      category: "Compras",
      icon: "shopping-cart"
    },
    {
      id: 2,
      category: "Alimentação",
      icon: "coffee"
    },
    {
      id: 3,
      category: "Salário",
      icon: "dollar-sign"
    },
    {
      id: 4,
      category: "Carro",
      icon: "truck"
    },
    {
      id: 5,
      category: "Lazer",
      icon: "package"
    },
    {
      id: 6,
      category: "Estudos",
      icon: "book-open"
    }
  ]);

  const handleCheckSelected = () => {
    onSelectedCategory(category);
    setVisible(false);
  }

  const handleDismiss = () => {
    setCategory({
      id: 0,
      icon: "",
      category: ""
    });
    setVisible(false)
  }

  const handleSelect = (item: Category) => {
    if (category.id === item.id) {
      setCategory({
        id: 0,
        icon: "",
        category: ""
      });
      return;
    }

    setCategory(item);
  }

  return (
    <>
      <Container onPress={() => setVisible(true)}>
        <TextStyled>
          {!category.category ? "Selecione uma categoria..." : category.category}
        </TextStyled>
        <Icon name="chevron-down" />
      </Container>

      <CategoryModal 
        visible={visible} 
        onDismiss={handleDismiss}
      >
        <Header>
          <IconButton onPress={() => setVisible(false)}>
            <CloseIcon name="x" />
          </IconButton>

          <IconButton 
            disabled={category.id === 0}
            onPress={handleCheckSelected}
          >
            <CheckIcon name="check" />
          </IconButton>
        </Header>

        <Categories 
          data={categories}
          keyExtractor={(item, index) => String(index) }
          renderItem={({item, index}) => (
            <CategoryCard
              isSelected={item === category}
              key={index}
              data={item as Category}
              onSelect={handleSelect}
            />
          )}
        />
      </CategoryModal>
    </>
  );

}

export { CategorySelect };