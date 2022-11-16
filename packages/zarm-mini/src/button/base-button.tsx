import React from 'react';
import { Button, ButtonProps } from "@tarojs/components";

const BaseButton: React.FC = (props: ButtonProps) => {
  const { children, ...reset } = props;
  return <Button {...reset}>{children}</Button>
}

export default BaseButton;