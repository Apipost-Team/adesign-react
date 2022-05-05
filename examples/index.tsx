import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import './index.less';
import Menus from './constant';

import Github from './assets/github.svg';

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
          <a className="header-nav-link" href="javescritp:l">
            设计
          </a>
          <a className="header-nav-link" href="javescritp:l">
            资源
          </a>
          <a className="header-nav-link" href="javescritp:l">
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
        </div>
      </div>
    </div>
  );
};

ReactDom.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
