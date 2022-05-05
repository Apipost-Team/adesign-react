import React from 'react';

export interface TooltipProps {
  trigger?: 'click' | 'hover';

  // 下拉弹窗出现位置
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
  style?: React.CSSProperties;
  className?: string | string[];
  content: React.ReactElement | string;
  children: React.ReactElement;
  offset?: [x: number, y: number];
  showArrow?: boolean; // 是否显示箭头
  bgColor?: string; // 弹出层背景色
}
