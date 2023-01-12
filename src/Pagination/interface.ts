import { CSSProperties } from 'react';

export interface PageProps {
  style?: CSSProperties;
  className?: string | string[];

  /**
   * @zh 当前页数
   */
  page?: number;

  /**
   * @zh 每页条数
   * @defaultValue  10
   */
  pageSize?: number;

  /**
   * @zh 总页数
   */
  total?: number;

  /**
   * @zh 跳页
   */
  onchange?: (page: any) => void;

  /**
   * @zh 修改每页条数
   */
  onSizeChange?: (page: any) => void;
}
