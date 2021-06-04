import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Dimensions,
  Keyboard, 
  LayoutChangeEvent, 
  NativeScrollEvent, 
  NativeSyntheticEvent, 
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/forms/Button';
import { CategorySelect } from '../../components/forms/CategorySelect';
import { InputForm } from '../../components/forms/InputForm';
import { TransactionButton } from '../../components/forms/TransactionButton';

import { 
  Container, 
  Header, 
  Title, 
  Form, 
  Fields, 
  TransactionFields 
} from './styles';

interface Category {
  id: number;
  icon: string;
  category: string;
}

interface FormData {
  name: string;
  amount: string;
}

const scheme = Yup.object().shape({
  name: Yup
    .string()
    .required("Nome é obrigatório."),
  amount: Yup
    .number()
    .typeError("Informe um valor numérico.")
    .positive("O valor deve ser positivo.")
    .required("O valor é obrigatório."),
});

const Register: FC = () => {
  const { width } = Dimensions.get("screen");
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(scheme),
  });

  const [transactionType, setTransactionType] = useState('');
  const [category, setCategory] = useState<Category>({} as Category);
  const [visibleStatusbar, setVisibleStatusbar] = useState(false);
  const [widthLayout, setWidthLayout] = useState(width / 2.4);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setWidthLayout(width / 2.4);
  }

  const handleTouchAvoid = () => {
    Keyboard.dismiss();
  }

  const handleScrolling = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y > 20) {
      setVisibleStatusbar(true);
      return;
    }
    setVisibleStatusbar(false);
  }

  const handleRegister = async (form: FormData) => {
    if (Object.keys(category).length === 0) {
      alert("Selecione uma categoria.");
      return;
    }

    if (!transactionType) {
      alert("Selecione o tipo da transação.");
      return;
    }

    console.log(category)

    // const { amount, name } = form;

    // const data = {
    //   name,
    //   amount,
    //   category: category.category,
    //   transactionType
    // }
  }

  return (
    <>
      <StatusBar hidden={visibleStatusbar} />
      <TouchableWithoutFeedback onPress={handleTouchAvoid}>
        <Container 
          onLayout={onLayout} 
          scrollEventThrottle={16} 
          onScroll={handleScrolling}
        >
          <Header>
            <Title>Cadastro</Title>
          </Header>

          <Form>
            <Fields>
              <InputForm
                error={errors.name && errors.name.message}
                name="name"
                control={control}
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
              />
              <InputForm
                error={errors.amount && errors.amount.message}
                name="amount"
                control={control}
                placeholder="Preço"
                keyboardType="numeric"
              />

              <TransactionFields>
                <TransactionButton 
                  width={widthLayout}
                  isActive={transactionType === 'up'}
                  title="Income" 
                  type="up" 
                  onPress={() => setTransactionType('up')}
                />
                <TransactionButton 
                  width={widthLayout}
                  isActive={transactionType === 'down'}
                  title="Outcome" 
                  type="down" 
                  onPress={() => setTransactionType('down')}
                />
              </TransactionFields>

              <CategorySelect onSelectedCategory={setCategory} />
            </Fields>

            <Button 
              title="Enviar" 
              onPress={handleSubmit(handleRegister)}
            />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );

}

export { Register };