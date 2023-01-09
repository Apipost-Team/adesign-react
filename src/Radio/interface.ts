import React, { CSSProperties, ReactNode } from 'react';

export interface RadioGroupProps {
  style?: CSSProperties;
  className?: string ;
  children: ReactNode;

  /**
   * @zh 选中的值
   */
  value?: any;

  /**
   * @zh 禁用整个单选组
   */
  disabled?: boolean;

  /**
   * @zh 单选组 name属性
   */
  name?: string;

  /**
   * @zh 按钮组类型 button ｜ radio
   * @defaultValue radio
   */
  type?: 'button' | 'radio';

  /**
   * @zh 选择单选框的回调
   */
  onChange?: (value: any) => void;
}

export interface RadioProps {
  style?: CSSProperties;
  children: string;
  className?: string;

  /**
   * @zh 单选框具体值
   */
  value?: any;

  /**
   * @zh 是否选中
   */
  checked?: boolean;

  /**
   * @zh 是否禁用
   */
  disabled?: boolean;

  /**
   * @zh 鼠标离开单选框的回掉
   */

  onMouseLeave?: (event: any) => void;
  /**
   * @zh 选择单选框的回调
   */
  onChange?: (value: any) => void;

  onClick?: (value: any) => void;
}

export interface RadioGroupContextProps {
  value?: any;
  disabled?: boolean;
  name?: RadioGroupProps['name'];
  onChange?: (value: any) => void;
}
