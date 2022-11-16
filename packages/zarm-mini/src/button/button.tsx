import React from 'react';
import { View } from '@tarojs/components';
import BaseButton from './base-button';

import { BaseButtonProps } from './interface';

const Button: React.FC = (props: BaseButtonProps) => {
  return (
    <View>
      <BaseButton {...props} />
    </View>
  );
}

export default Button;
