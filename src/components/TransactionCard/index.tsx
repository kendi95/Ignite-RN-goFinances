import React, { FC } from 'react';

import { 
  Container,
  Title,
  Amount,
  Footer,
  TypeContainer,
  Data,
  Icon,
  TypeText,
} from './styles';

type Category = {
  name: string;
  icon: string;
}

interface TransactionCardProps {
  data: {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
  }
}

const TransactionCard: FC<TransactionCardProps> = ({
  data,
}) => {

  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <TypeContainer>
          <Icon name={data.category.icon} />
          <TypeText>{data.category.name}</TypeText>
        </TypeContainer>

        <Data>{data.date}</Data>
      </Footer>
    </Container>
  );

}

export { TransactionCard };