import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import './index.less';
import Menus from './constant';
import ENUS from '../src/locale/en-US';
import ConfigProvider from '../src/ConfigProvider';
import Github from './assets/github.svg';
import '../libs/color-default.css';
// import '../dist/style.css';

const Main = (props: any) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/');
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="examples">
      <div className="header">
        <Link to="/">
          <img src="https://img.cdn.apipost.cn/adesign/adesign-logo.svg" className="logo" />
        </Link>
        <div className="header-nav">
          {/* <a className="header-nav-link" href="javescritp:">
            设计
          </a>
          <a className="header-nav-link" href="javescritp:">
            资源
          </a> */}
          <a
            className="header-nav-link"
            target="_blank"
            href="https://wiki.apipost.cn/document/00091641-1e36-490d-9caf-3e47cd38bcde/063ef304-6a5d-45b5-b909-cce5e573e640"
            rel="noreferrer"
          >
            关于
          </a>
          <a className="header-nav-git" href="https://github.com/Apipost-Team/adesign-react">
            <span className="header-nav-git_ico">
              <Github />
            </span>
          </a>
          <div></div>
        </div>
      </div>
      <div className="contents">
        <div className="left">
          <div className="menu-items">
            {Menus.map((d, index) => (
              <Link
                key={d.path}
                to={d.path}
                className={currentPath === d.path ? 'active' : undefined}
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="main">
          <Routes>
            {Menus.map((d) => (
              <Route index={d.name === 'button'} key={d.name} path={d.path} element={d.elements} />
            ))}
            <Route path="/" element={<Navigate to="color" />} />
          </Routes>
          <div className="main-copyright">
            <div>
              Copyright © 北京北极狐信息科技有限公司 . All Rights Reserved. 2019-2022 版权所有
            </div>
            <div>计算机软件著作登记号：2019SR0087419</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDom.render(
  <BrowserRouter>
    <ConfigProvider locale={ENUS} size="middle">
      <Main />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
