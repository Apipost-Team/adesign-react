import { Locale } from '../locale/interface';

export type ThemeConfig = Record<string, any>;

export interface ConfigProviderProps {
  // 设置语言包
  locale?: Locale;

  // 主题配置
  theme?: ThemeConfig;

  // 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
  size?: 'mini' | 'small' | 'middle' | 'large';

  // 全局组件类名前缀
  prefixCls?: string;

  // 全局组件类名前缀
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;

  // 全局弹出框挂载的父级节点。
  getPopupContainer?: (node: HTMLElement) => Element;

  children?: React.ReactNode;
}
