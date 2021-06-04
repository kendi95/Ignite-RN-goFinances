import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input';

import { Container } from './styles';

interface InputForm extends TextInputProps {
  control: Control;
  name: string;
  error: string | boolean;
}

const InputForm: FC<InputForm> = ({ control, name, error, ...rest }) => {

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({field: { onChange, value }}) => (
          <Input 
            error={error}
            onChangeText={onChange}
            value={value}
            {...rest} 
          />
        )}
      />
    </Container>
  );

}

export { InputForm };