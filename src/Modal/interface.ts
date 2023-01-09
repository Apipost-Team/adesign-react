import { CSSProperties, ReactDOM, ReactNode } from 'react';

export interface ModalProps {
  className?: string | string[];
  style?: CSSProperties;
  children?: ReactNode;

  width?:number;

  /**
   * @zh 是否显示遮罩
   * @defaultValue true
   */
  mask?: boolean;

  /**
   * @zh 允许弹窗关闭
   */
  maskClosable?: boolean;

  /**
   * @zh showTopClosable
   */
  showTopClosable?: boolean;

  /**
   * 弹框body类名
   */
  bodyClassName?: string | string[];

  /**
   * @zh 弹框header内容
   */
  title?: ReactNode;

  /**
   * 弹框body类名
   */
  headerClassName?: string | string[];

  /**
   * @zh 弹框底部内容
   */
  footer?: ReactNode;
  /**
   * @zh 底部div类名
   */
  footerClassName?: string | string[];

  /**
   * @zh 弹框是否可见
   */
  visible?: boolean;

  /**
   * @zh 是否允许esc关闭弹窗
   * @defaultValue true
   */
  escToExit?: boolean;

  /**
   * @zh 取消按钮文字
   */
  cancelText?: string;

  /**
   * @zh 点击取消按钮回调
   */
  onCancel?: () => void;

  /**
   * @zh 确认按钮文字
   */
  okText?: string;

  /**
   * @zh 点击确认按钮回调
   */
  onOk?: () => void;
}

export interface ConfirmProps {
  /**
   * @zh 标题
   */
  title?: string;

  /**
   * @zh 内容
   */
  content?: string;

  /**
   * @zh 取消按钮文字
   */
  cancelText?: string;

  /**
   * @zh 自定义文字
   */
  diyText?: string;

  /**
   * @zh 确认按钮文字
   */
  okText?: string;

  /**
   * 点击取消按钮回调
   */
  onCancel?: () => void; // 取消事件

  /**
   * 提示框大小设置
   */
  large?: boolean;

  /**
   * 点击确认按钮回调
   */
  onOk?: () => void;

  /**
   * 自定义按钮回调
   */
  onDiy?: () => void;
}

export interface ShowProps {
  /**
   * @zh 点击外部关闭
   * @defaultValue true
   */
  outsideClose?: boolean;
  props?: any;
}

// export type ModalReturnProps = {
//   add: Function;
// };
