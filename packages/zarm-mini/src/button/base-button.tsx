import React from 'react';
import { createBEM } from '@zarm-design/bem';
import { Button, ButtonProps } from "@tarojs/components";

const BaseButton: React.FC = (props: ButtonProps) => {
  const { children, ...reset } = props;
  const bem = createBEM('button--base', { prefixCls: 'za' });

  return <Button {...reset} className={bem()}>{children}</Button>;
}

export default BaseButton;