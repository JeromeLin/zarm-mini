import * as React from 'react';
import { ButtonProps } from '@tarojs/components';

export type ButtonTheme = 'default' | 'primary' | 'danger';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonShape = 'radius' | 'rect' | 'round' | 'circle';

export interface BaseButtonProps extends Omit<ButtonProps, 'size'>  {
  theme?: ButtonTheme;
  size?:  ButtonSize;
  shape?: ButtonShape;
  block?: boolean;
  shadow?: boolean;
  focus?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}
