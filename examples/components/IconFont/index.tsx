import React from 'react';
import './index.less';
import * as Icons from '../../../icons';

const IconFont = () => {
  return (
    <div className="iconfont-example">
      <div className="titles">
        <div className="basetitle">字体图标 IconFont</div>
        <div className="desc">Apipost内置的大量图标</div>
      </div>
      <div className="iconfont-container">
        <ul className="iconfont-list">
          {Object.entries(Icons).map(([name, svg]) => (
            <li className="list-item">
              <div className="name">{name}</div>
              <div className="apipost-icon">
                <svg.default />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconFont;
