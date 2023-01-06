import React from 'react';
import merge from 'lodash/merge';
import omit from 'lodash/omit';

const defaultProps: any = {
  locale: {
    locale: 'zh-CN',
    Select: {
      noData: '请选择',
    },
    Upload: {
      noData: '选择文件',
    },
    Drawer: {
      okText: '确定',
      cancelText: '取消',
    },
    Empty: {
      noData: '暂无数据',
    },
    Modal: {
      okText: '确定',
      cancelText: '取消',
    },
    Pagination: {
      goto: '前往',
      page: '页',
      countPerPage: '条/页',
      total: '共 {0} 条',
      prev: '上一页',
      next: '下一页',
      currentPage: '第 {0} 页',
      prevSomePages: '向前 {0} 页',
      nextSomePages: '向后 {0} 页',
      pageSize: '页码',
    },
    ModalConfirm: {
      okText: '确定',
      cancelText: '取消',
    },
    Table: {
      okText: '确定',
      resetText: '重置',
      sortAscend: '点击升序',
      sortDescend: '点击降序',
      cancelSort: '取消排序',
    },
  },
  prefixCls: 'apipost',
  getPopupContainer: () => document.body,
  size: 'middle',
};

export const ConfigContext = React.createContext<any>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 'apipost'}-${componentName}`,
  ...defaultProps,
});

const ConfigProvider = (baseProps: any) => {
  const props: any = merge(defaultProps, baseProps);

  const { children } = props;

  const config: any = {
    ...omit(props, ['children']),
  };

  const child = children;

  return <ConfigContext.Provider value={config}>{child}</ConfigContext.Provider>;
};

ConfigProvider.ConfigContext = ConfigContext;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
