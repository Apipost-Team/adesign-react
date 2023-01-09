import React from 'react';
import './index.less';
import * as Icons from 'adesign-react/icons'

const IconFont = () => {
  return (
    <div className="iconfont-example">
      <div className="titles">
        <div className="basetitle">字体图标 IconFont</div>
        <div className="desc">Apipost内置的大量图标</div>
      </div>
      <div className="iconfont-container">
        <ul className="iconfont-list">
          {Object.entries(Icons).map(([name, Svg],index) => (
            <li key={index} className="list-item">
              <div className="name">{name}</div>
              <div className="apipost-icon">
                <Svg />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconFont;
