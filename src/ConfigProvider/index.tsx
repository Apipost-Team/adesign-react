import React from 'react';
import merge from 'lodash/merge';
import omit from 'lodash/omit';
import defaultLocale from '../locale/default';
import { ConfigProviderProps } from './interface';

const defaultProps: ConfigProviderProps = {
  locale: defaultLocale,
  prefixCls: 'apipost',
  getPopupContainer: () => document.body,
  size: 'middle',
};

export const ConfigContext = React.createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 'apipost'}-${componentName}`,
  ...defaultProps,
});

const ConfigProvider = (baseProps: ConfigProviderProps) => {
  const props: ConfigProviderProps = merge(defaultProps, baseProps);

  const { children } = props;

  const config: ConfigProviderProps = {
    ...omit(props, ['children']),
  };

  const child = children;

  return <ConfigContext.Provider value={config}>{child}</ConfigContext.Provider>;
};

ConfigProvider.ConfigContext = ConfigContext;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
