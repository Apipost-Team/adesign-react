import React, { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

export interface InputNumberProps {
  style?: CSSProperties;
  className?: string | string[];

  // 默认值
  defaultValue?: number;

  /**
   * @zh 输入框的值
   */
  value?: number | string;

  /**
   * @zh 最小值
   * @defaultValue -Infinity
   */
  min?: number;
  /**
   * @zh 最大值
   * @defaultValue Infinity
   */
  max?: number;
  /**
   * @zh 是否禁用
   */
  disabled?: boolean;

  /**
   * @zh 上下键位置 row | column
   * @defaultValue row
   */
  type?: string;

  /**
   * @zh 仅展示值或者允许输入
   * @defaultValue input
   */
  modetype?: string;

  /**
   * @zh 值改变时的回调
   */
  onChange?: (value: string | number, e?: React.FormEvent<HTMLInputElement>) => void;
}
