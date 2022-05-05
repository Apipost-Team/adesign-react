import { CSSProperties, ReactNode } from 'react';

export interface SpinProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @zh 是否为加载状态
   */
  loading?: boolean;
  /**
   * @zh 加载动画的尺寸
   */
  size?: number;
  /**
   * @zh 自定义图标
   */
  icon?: ReactNode;
  /**
   * @zh 自定义元素
   */
  element?: ReactNode;
  /**
   * @zh 自定义文字
   */
  tip?: string | ReactNode;
  /**
   * @zh 延迟显示加载的时间 (ms)
   */
  delay?: number;
  /**
   * @zh 是否使用点类型的动画
   */
  dot?: boolean;
}
