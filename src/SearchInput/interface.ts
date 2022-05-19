import React from 'react';

export type SearchInputItem = {
  text: string;
  value: object;
};

export interface SearchInputProps<T = SearchInputItem> {
  // 选择框样式
  style?: React.CSSProperties;

  className?: string | string[];

  // 默认输入值
  defaultValue?: string;

  // 输入值（受控模式）
  value?: string;

  // 如果为true则返回值为Object对象
  labelInValue?: boolean;

  // 联想词列表
  dataList: Array<SearchInputItem | T>;

  // 联想区Item自定义渲染
  itemRender: (dataItem: T, index: number) => React.ReactNode;

  onChange?: (value: string | unknown) => void;

  placeholder?: string;

  // 下拉框隐藏/显示时触发
  onVisibleChange?: (visible: boolean) => void;
}
