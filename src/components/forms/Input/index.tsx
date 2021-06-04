import React, { FC } from 'react';
import { TextInputProps } from 'react-native';

import { InputStyled, Error } from './styles';

interface InputProps extends TextInputProps {
  error: string | boolean;
}

const Input: FC<InputProps> = ({ error, ...rest }) => {

  return (
    <>
      <InputStyled { ...rest } />
      { error && <Error>{error}</Error> }
    </>
  );

}

export { Input };