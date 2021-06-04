import React, { FC, useEffect, useState } from 'react';
import { TouchableOpacityProps, Dimensions, LayoutChangeEvent } from 'react-native';

import { ButtonStyled, Icon, Title } from './styles';

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle"
}

interface TransactionButtonProps extends TouchableOpacityProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
  width: number;
}

const TransactionButton: FC<TransactionButtonProps> = ({ type, width, title, isActive, ...rest }) => {

  return (
    <ButtonStyled 
      style={{ width }}
      isActive={isActive} 
      type={type} 
      activeOpacity={0.6} 
      {...rest}
    >
      <Icon name={icon[type]} type={type} isActive={isActive} />
      <Title isActive={isActive} type={type}>{title}</Title>
    </ButtonStyled>
  );

}

export { TransactionButton };