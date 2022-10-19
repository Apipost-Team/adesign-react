import React from 'react';
import defaultLocale from '../locale/default';
import { ConfigProviderProps } from './interface';

const defaultProps: ConfigProviderProps = {
  locale: defaultLocale,
  prefixCls: 'arco',
  getPopupContainer: () => document.body,
  size: 'default',
};

export const ConfigContext = React.createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 'arco'}-${componentName}`,
  ...defaultProps,
});
