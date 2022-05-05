import React, { CSSProperties, ReactNode, HTMLAttributes } from 'react';

export interface TriggerProps {
  ref: any;
  className?: string | string[];
  style?: CSSProperties;

  // 弹出层
  popup?: any;

  // 弹出层触发方式
  trigger: 'click' | 'hover' | 'contextmenu' | 'focus';

  children: ReactNode;

  // 弹出层是否自动调整宽度使其与Trigger保持一致
  autoAdjustWidth?: boolean;

  // 弹出层是否打开
  popupVisible?: boolean;

  // 弹出层出现位置
  placement?:
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end';

  // 点击区域外部关闭
  outsideClose: boolean;

  onVisibleChange: (val: boolean) => void;
  // 是否禁用
  disabled?: boolean;
  offset?: [x: number, y: number];
}

export interface PopupProps {
  getContainer: () => HTMLElement;
  children?: React.ReactNode;
}

export type MouseLocationType = { clientX: number; clientY: number };

export interface PopupStyleProps {
  width?: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

export interface TriggerState {
  popupVisible: boolean;
  popupStyle: PopupStyleProps;
}
