import React, { CSSProperties, ReactNode } from 'react';

export interface SelectProps {
  // 默认选中值
  defaultValue?: string | number;

  // 选择器的值（受控模式）
  value?: string | number;

  onChange?: (value: string | unknown) => void;

  placeholder?: string;

  // 下拉框隐藏/显示时触发
  onVisibleChange?: (visible: boolean) => void;

  // 设置 onChange 回调中 value 的格式。默认是string，设置为true时候，value格式为： { label: string, value: string }
  labelInValue?: boolean;

  style?: React.CSSProperties;

  className?: string | string[];

  popupStyle?: React.CSSProperties;

  popupClassName?: string | string[];
  placement: string;
  autoAdjustWidth: boolean;

  /**
   * @zh 输入框大小
   */
  size?: 'mini' | 'small' | 'middle' | 'large';

  // 自定义render组件已被选中的内容
  formatRender?: (value: ReactNode, childList: OptionProps[], text: ReactNode) => ReactNode;

  // 自定义下拉列表弹出层内容
  dropdownRender?: (menu: ReactNode) => ReactNode;

  children: ReactNode;

  // 是否禁用
  disabled?: boolean;
}

export interface OptionProps {
  style?: CSSProperties;
  className?: string | string[];
  disabled?: boolean;
  value: string | number;
  children?: ReactNode;
}

export interface ContextProps {
  selectedValue: any;
  selectDisabled: boolean;
  onOptionClick: (text: string, value: any) => void;
}
