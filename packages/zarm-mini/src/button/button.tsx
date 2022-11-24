import React from 'react';
import { View, Text } from '@tarojs/components';
import { createBEM } from '@zarm-design/bem';
import BaseButton from './base-button';

import { BaseButtonProps } from './interface';

const Button: React.FC = (props: BaseButtonProps) => {
  const {
    className,
    theme,
    size,
    shape,
    icon,
    block,
    shadow,
    disabled,
    loading,
    plain,
    children,
    ...restProps
  } = props;

  // todo loading
  const bem = createBEM('button', { prefixCls: 'za' });
  const cls = bem([
    {
      [`${theme}`]: !!theme,
      [`${size}`]: !!size,
      [`${shape}`]: !!shape,
      block,
      ghost: plain,
      shadow,
      disabled,
      loading,
    },
    className,
  ]);

  const iconRender = icon;
  const childrenRender = children && <Text>{children}</Text>;

  return (
    <View className={cls}>
      <BaseButton {...restProps} />
      <View className={bem('content')}>
        {icon && iconRender}
        {childrenRender}
      </View>
    </View>
  );
}

Button.defaultProps = {
  theme: 'default',
  size: 'md',
  shape: 'radius',
  block: false,
  ghost: false,
  shadow: false,
  disabled: false,
  loading: false,
  htmlType: 'button',
};

export default Button;
