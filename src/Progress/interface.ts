import { CSSProperties } from 'react';

export interface ProgressProps {
  style?: CSSProperties;
  className?: string | string[];

  /**
   * @zh 进度条类型
   */
  type?: 'circle' | 'line';

  /**
   * @zh 剩余进度条颜色
   */
  trailColo?: string;

  /**
   * @zh 是否展示文本
   */
  showText?: boolean;

  /**
   * @zh 百分比
   */
  percent: number;

  /**
   * @zh 进度条状态
   */
  status?: 'success' | 'error' | 'warning' | 'normal';

  /**
   * 进度条宽度
   */
  width?: string | number;

  /**
   * @zh 线宽
   */
  strokeWidth?: number;
}
