import * as React from 'react';
import { View } from '@tarojs/components';
import { createBEM } from '@zarm-design/bem';
import isFinite from 'lodash/isFinite';
import type { BaseMaskProps } from './interface';
import Transition from '../transition';

const OpacityList = {
  normal: 0.55,
  light: 0.35,
  dark: 0.75,
};

export interface MaskCssVars {
  '--z-index'?: React.CSSProperties['zIndex'];
}

export type MaskProps = BaseMaskProps &
  React.PropsWithChildren<MaskCssVars> & {
    onClick: React.MouseEventHandler<HTMLDivElement>;
  };

const Mask = React.forwardRef<HTMLDivElement, MaskProps>((props, ref) => {
  const {
    className,
    style,
    visible,
    color,
    opacity,
    animationDuration,
    onClick,
    children,
    destory
  } = props;

  const prefixCls = 'za';
  const bem = createBEM('mask', { prefixCls });

  const rgb = color === 'black' ? '0, 0, 0' : '255, 255, 255';
  const backgroundOpacity = isFinite(opacity) ? opacity : OpacityList[opacity!];

  return (
    <Transition
      nodeRef={ref}
      visible={visible}
      tranisitionName={`${prefixCls}-fade`}
      duration={animationDuration}
      destory={destory}
    >
      {(rest, setNodeRef) =>
        (
          <View
            ref={setNodeRef}
            className={bem([className, rest.className])}
            style={{
              ...style,
              ...rest.style,
              backgroundColor:
                color === 'transparent' ? 'transparent' : `rgba(${rgb}, ${backgroundOpacity})`,
            }}
            onClick={onClick}
          >
            {children}
          </View>
        )
      }
    </Transition>
  );
});

Mask.displayName = 'Mask';

Mask.defaultProps = {
  visible: false,
  color: 'black',
  opacity: 'normal',
};

export default Mask;