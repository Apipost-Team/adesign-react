import React from 'react';
import ReactDom from 'react-dom';
import TestPage from './testPage';
import ENUS from '../src/locale/en-US';
import ConfigProvider from '../src/ConfigProvider';

ReactDom.render(
  <ConfigProvider locale={ENUS} size="mini" prefixCls="apipost">
    <TestPage></TestPage>
  </ConfigProvider>,

  document.getElementById('root')
);
