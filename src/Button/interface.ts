import { CSSProperties, ReactNode } from 'react';

export interface ApipostButtonProps {
  style?: CSSProperties;
  className?: string | string[] | CSSProperties;
  children?: ReactNode;

  // 前置className
  prefixCls?: string;

  icon?: ReactNode;

  /**
   * @zh button前置自定义icon
   */
  preFix?: ReactNode;

  /**
   * @zh button后置自定义icon
   */
  afterFix?: ReactNode;

  /**
   * @zh 按钮类型 目前支持默认按钮、确认按钮、连接按钮
   * @defaultValue default
   */
  type?: 'default' | 'primary' | 'link' | 'success' | 'error' | 'warning' | 'info';

  /**
   * @zh 按钮尺寸， 大、中、小、迷你
   * @defaultValue default
   */
  size?: 'mini' | 'small' | 'middle' | 'large';

  /**
   * @zh 按钮圆角类型
   * @defaultValue square
   */
  shape?: 'square' | 'circle' | 'round';

  /**
   * @zh 禁用按钮
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * @zh 点击按钮的回调
   */
  onClick?: (e: Event) => void;
}

export type ButtonProps = Partial<ApipostButtonProps>;
