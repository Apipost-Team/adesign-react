import React, { CSSProperties, ReactNode } from 'react';

export interface MessageProps {
  style?: CSSProperties;
  className?: string | string[];

  /**
   * @zh 提示框提示内容
   */
  text?: ReactNode | string;

  /**
   * @zh 唯一标识
   */
  noticeKey?: string | number;

  /**
   * @zh 消息内容
   * @en Message content
   */
  content?: ReactNode | string;

  /**
   * @zh 是否显示图标
   * @defaultValue true
   */
  showIcon?: boolean;

  /**
   * @zh 是否显示关闭按钮
   * @defaultValue false
   */
  showClose?: boolean;

  type: string;
  remove?: (e: any) => void;
}
