import React from 'react';
import { createBEM } from '@zarm-design/bem';
import { View } from '@tarojs/components';
import type { BasePanelProps } from './interface';

export type PanelProps = BasePanelProps;

const Panel = React.forwardRef<HTMLDivElement, PanelProps>((props, ref) => {
  const { className, title, more, spacing, bordered, children, ...restProps } = props;

  const panelRef = ref || React.createRef<HTMLDivElement>();
  const bem = createBEM('panel', { prefixCls: 'za' });

  const cls = bem([{ spacing, bordered }, className]);

  return (
    <View className={cls} ref={panelRef} {...restProps}>
      <View className={bem('header')}>
        {title && <View className={bem('header__title')}>{title}</View>}
        {more && <View className={bem('header__more')}>{more}</View>}
      </View>
      <View className={bem('body')}>{children}</View>
    </View>
  );
});

Panel.displayName = 'Panel';
Panel.defaultProps = {
  bordered: true,
  spacing: false,
};

export default Panel;
