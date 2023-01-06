import React from 'react';

export interface DropdownProps {
  outsideClose?: boolean;
  trigger?: 'click' | 'hover' | 'contextmenu';

  // 下拉弹窗出现位置
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
  onVisibleChange?: (visible: boolean) => void;
  style?: React.CSSProperties;
  className?: string | string[];
  content: React.ReactElement;
  children: React.ReactElement;
  offset?: [x: number, y: number];
}
