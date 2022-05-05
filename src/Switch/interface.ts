import React from "react";

export interface SwitchProps {
  style?: React.CSSProperties;
  className?: string[] | string;
  /**
   * @zh 开关是否打开
   * @en To set checked
   */
  checked?: boolean;
  /**
   * @zh 默认是否选中
   * @en To set default checked
   */
  defaultChecked?: boolean;

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;

  /**
   * @zh 点击开关的回调
   * @en Callback when click
   */
  onChange?: (value: boolean, event:any) => void;

  /**
   * @zh 开关的尺寸，有 `small` 和 `default` 可供选择。
   * @en The size of the switch
   */
  size?: 'small' | 'default' ;
}
