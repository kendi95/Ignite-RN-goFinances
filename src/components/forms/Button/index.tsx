import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonStyled, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: FC<ButtonProps> = ({title, ...rest}) => {

  return (
    <ButtonStyled {...rest}>
      <TextButton>{title}</TextButton>
    </ButtonStyled>
  );

}

export { Button };