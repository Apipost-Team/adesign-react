import { ReactNode, CSSProperties, MouseEvent } from 'react';

export interface DrawerProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  /**
   * @zh 抽屉的标题 （为null时不显示）
   */
  title?: ReactNode;

  /**
   * @zh 头部样式
   */
  headerStyle?: CSSProperties;

  /**
   * @zh 抽屉的底部自定义 （为null时不显示）
   */
  footer?: ReactNode;

  /**
   * @zh 底部样式
   */
  footerStyle?: CSSProperties;

  /**
   * @zh 确认按钮文案
   * @defaultValue 确认
   */
  okText?: string;

  /**
   * @zh 取消按钮文案
   * @defaultValue 取消
   */
  cancelText?: string;

  /**
   * @zh 抽屉弹出位置 (top | bottom | right | left)
   * @defaultValue right
   */
  placement?: string;

  /**
   * @zh 抽屉的宽度，`placement`为 `left` `right` 时生效
   * @defaultValue 300
   */
  width?: string | number;

  /**
   * @zh 抽屉的高度 `placement`为 `left` `right` 时生效
   * @defaultValue 300
   */
  height?: string | number;

  /**
   * @zh 是否显示遮罩
   * @defaultValue true
   */
  mask?: boolean;
  /**
   * @zh 点击遮罩关闭
   * @defaultValue true
   */
  maskClosable?: boolean;

  /**
   * @zh 是否显示关闭按钮
   */
  closable?: boolean;

  /**
   * @zh 定位方式是否为fixed
   * @defaultValue true
   */
  fixed?: boolean;

  onClose?: (e?: any) => void;

  /**
   * @zh 点击确认按钮的回调
   */
  onOk?: (e?: Event) => void;

  /**
   * @zh 关闭弹出框的回调
   */
  onCancel?: (e?: MouseEvent | Event) => void;

  /**
   * @zh 显示隐藏
   */
  visible?: boolean;
}
