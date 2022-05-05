import React, { ReactNode } from 'react';

export enum CheckStatus {
  UNCHECK = 'uncheck',
  CHECKED = 'checked',
  HALFCHECK = 'halfcheck',
}

export interface CheckBoxProps {
  style?: React.CSSProperties;
  children?: ReactNode;
  className?: string | string[];
  checked?: CheckStatus;
  defaultChecked?: CheckStatus; // 默认选中状态
  readOnly?: boolean;
  onChange?: (val: CheckStatus) => void;
  disabled?: boolean;
}

export interface CheckBoxGroupProps {
  children?: ReactNode;
  value?: any;
  onChange?: (_selectvalue: any, _checked?: boolean, e?: any) => void;
  disabled?: boolean;
  name?: string | number;
}

// export default { CheckStatus };
