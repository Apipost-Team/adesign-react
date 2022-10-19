export interface Locale {
  locale: string;
  Empty: Record<string, any>;
  Modal: Record<string, any>;
  Pagination: Record<string, any>;
  Table: Record<string, any>;
}

/*
 // 设置语言包
  locale?: Locale;

  // 主题配置
  theme?: ThemeConfig;

  // 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
  size?: 'mini' | 'small' | 'default' | 'large';

  // 全局组件类名前缀
  prefixCls?: string;

  // 全局组件类名前缀
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
*/
