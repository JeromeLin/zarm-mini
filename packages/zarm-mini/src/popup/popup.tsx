import * as React from 'react';
import { View } from '@tarojs/components';
import { createBEM } from '@zarm-design/bem';
import Mask from '../mask';
import type { BasePopupProps } from './interface';

import Transition from '../transition';

export type PopupProps = BasePopupProps;

const TRANSITION_NAMES = {
  top: 'move-down',
  bottom: 'move-up',
  center: 'fade',
  left: 'move-left',
  right: 'move-right',
};

const Popup = React.forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const {
    width,
    visible,
    animationType,
    animationDuration,
    direction,
    mask,
    maskColor,
    maskOpacity,
    afterOpen,
    afterClose,
    onMaskClick,
    children,
    destory,
  } = props;

  const prefixCls = 'za';
  const bem = createBEM('popup', { prefixCls });


  const transitionName = animationType ?? TRANSITION_NAMES[direction!];

  return (
    <>
      {mask && (
        <Mask
          visible={visible}
          color={maskColor}
          opacity={maskOpacity}
          destory={destory}
          animationDuration={animationDuration}
          onClick={() => {
            onMaskClick?.();
          }}
        />
      )}
      <Transition
        nodeRef={ref}
        visible={visible}
        destory={destory}
        tranisitionName={`${prefixCls}-${transitionName}`}
        duration={animationDuration}
        onEnter={() => {
          afterOpen?.();
        }}
        onLeaveEnd={() => {
          afterClose?.();
        }}
      >
        {({ className, style }, setNodeRef) => {
          const { display, ...restStyle } = style;
          return (
            <View className={bem('wrapper', [props.className])} style={{ display }}>
              <View
                ref={setNodeRef}
                className={bem([{ [`${direction}`]: !!direction }, className])}
                style={{
                  ...props.style,
                  ...restStyle,
                  width,
                }}
              >
                {children}
              </View>
            </View>
          )
        }}
      </Transition>
    </>
  );
});

Popup.displayName = 'Popup';

Popup.defaultProps = {
  visible: false,
  mask: true,
  direction: 'bottom',
  timeout: 300,
};

export default Popup;