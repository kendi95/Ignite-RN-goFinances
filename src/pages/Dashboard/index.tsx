import React, { FC, useState } from "react";

import { Card } from "../../components/Card";
import { TransactionCard } from "../../components/TransactionCard";

import { 
  Container, 
  Header, 
  HeadeWrapper,
  UserInfo, 
  Photo, 
  User, 
  UserGreeting, 
  Username,
  Button,
  Icon,
  Cards,
  Transactions,
  Title
} from './styles';

type Category = {
  name: string;
  icon: string;
}

interface Transaction {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

const Dashboard: FC = () => {

  const [data, setData] = useState<Transaction[]>([
    {
      type: "negative",
      title: "Restaurante",
      amount: "R$ 5000,00",
      category: {
        name: "Alimentação",
        icon: "coffee"
      },
      date: "13/04/2021"
    },
    {
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 10.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign"
      },
      date: "15/04/2021"
    },
  ]);

  return (
    <Container>
      <Header>
        <HeadeWrapper>
          <UserInfo>
            <Photo 
              source={{ 
                uri: "https://avatars.githubusercontent.com/u/36816259?v=4" 
              }} 
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <Username>Alisson</Username>
            </User>
          </UserInfo>

          <Button onPress={() => alert("clicou")}>
            <Icon name="power" />
          </Button>
        </HeadeWrapper>
      </Header>
    
      <Cards>
        <Card 
          type="up"
          title="Entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dis 13 de abril"
        />
        <Card 
          type="down"
          title="Saídas" 
          amount="R$ 1.000,00" 
          lastTransaction="Última saídas dis 10 de abril"
        />
        <Card 
          type="total"
          title="Total" 
          amount="R$ 16.400,00" 
          lastTransaction="01 à 16 de abril"
        />
      </Cards>
    
      <Title>Listagem</Title>
      
      <Transactions 
        data={data}
        keyExtractor={(item, index) => String(index) }
        renderItem={({item, index}) => (
        <TransactionCard
          key={index}
          data={item as Transaction}
        />
        )}
      />

    </Container>

  )

}

export {Dashboard};