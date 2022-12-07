import type { BaseTransitionProps } from '../transition/interface';

export interface BaseMaskProps extends BaseTransitionProps {
  color?: 'black' | 'white' | 'transparent';
  opacity?: 'normal' | 'light' | 'dark' | number;
}