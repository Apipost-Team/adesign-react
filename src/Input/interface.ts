import React, { CSSProperties, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { Omit } from '../util/utils';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix' | 'className'> {
  style?: CSSProperties;
  className?: string | string[];

  /**
   * @zh 输入框的值
   */
  value?: string;

  /**
   * @zh 输入框大小
   */
  size?: 'mini' | 'small' | 'middle' | 'large';

  /**
   * @zh 输入框提示信息
   */
  placeholder?: string;

  /**
   * @zh 输入框前置DOM元素
   */
  beforeFix?: React.ReactNode;

  /**
   * @zh 输入框后置DOM元素
   */
  afterFix?: React.ReactNode;

  /**
   * @zh 输入框禁用属性
   */
  disabled?: boolean;

  /**
   * @zh 是否无边框
   * @defaultValue true
   */
  bordered?: boolean;

  /**
   * @zh 输入框错误状态
   */
  error?: boolean;

  /**
   * @zh 输入框只读属性
   */
  readonly?: boolean;

  /**
   * @zh 自动聚焦
   */
  autoFocus?: boolean;

  /**
   * @zh 允许清空input
   */
  allowClear?: boolean;

  /**
   * @zh 强制使用外部传入value渲染
   */
  forceUseValue?: boolean;

  /**
   * @zh 值改变时的回调
   */
  onChange?: (value: string, e: React.FormEvent<HTMLInputElement>) => void;

  /**
   * @zh 清除input回调
   */
  onClear?: () => void;

  /**
   * @zh 失去焦点的回调
   */
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;

  /**
   * @zh 获取焦点的回调
   */
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;

  /**
   * @zh 键盘事件的回调
   */
  onKeyDown?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface TextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange' | 'className' | 'maxLength'
  > {
  style?: CSSProperties;
  className?: string | string[];

  /**
   * @zh 文本域的值
   */
  value?: string | number;

  /**
   * @zh 文本域默认值
   */
  defaultValue?: string | number;

  width?: number;
  height?: number;

  /**
   * @zh 文本域行高
   * @defaultValue 20
   */
  lineHeight?: number;

  /**
   * @zh 清除文本域
   */
  allowClear?: boolean;

  /**
   * @zh 最大输入长度
   */
  maxLength?: number;

  /**
   * @zh 根据输入内容自适应高度
   */
  autoSize?: boolean;

  /**
   * @zh 输入框提示信息
   */
  placeholder?: string;

  /**
   * @zh 自动聚焦
   */
  autoFocus?: boolean;

  /**
   * @zh 输入框禁用属性
   */
  disabled?: boolean;

  /**
   * @zh 输入框只读属性
   */
  readonly?: boolean;

  /**
   * @zh 是否无边框
   * @defaultValue true
   */
  bordered?: boolean;

  /**
   * @zh 值改变时的回调
   */
  onChange?: (value?: string, e?: any) => void;
  /**
   * @zh 回车事件回调
   */
  onPressEnter?: (e: any) => void;
  /**
   * @zh 失去焦点的回调
   */
  onBlur?: (e: any) => void;

  /**
   * @zh 获取焦点的回调
   */
  onFocus?: (e: any) => void;

  /**
   * @zh 键盘事件的回调
   */
  onKeyDown?: (e: any) => void;

  /**
   * @zh 自动计算高度
   */
  autoHeight?: boolean;
}
