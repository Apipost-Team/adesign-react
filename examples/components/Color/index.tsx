import React from 'react';
import './index.less';

const Color = () => {
  return (
    <div className="color-example">
      <div className="titles">
        <div className="basetitle">色彩 Color</div>
        <div className="desc">apipost使用一套特定的调色板来</div>
      </div>
      <h3>主题色</h3>
      <p>apipost主要颜色是鲜艳友好的蓝色。</p>
      <div className="demo-color-box" style={{ background: 'rgb(64, 158, 255)' }}>
        Brand Color
        <div className="value">#409EFF</div>
        <div className="bg-color-sub" style={{ background: 'rgb(236, 245, 255)' }}>
          <div className="bg-blue-sub-item" style={{ background: 'rgb(83, 168, 255)' }}></div>
          <div className="bg-blue-sub-item" style={{ background: 'rgb(102, 177, 255)' }}></div>
          <div className="bg-blue-sub-item" style={{ background: 'rgb(121, 187, 255)' }}></div>
          <div className="bg-blue-sub-item" style={{ background: 'rgb(140, 197, 255)' }}></div>
          <div className="bg-blue-sub-item" style={{ background: 'rgb(160, 207, 255)' }}></div>
          <div className="bg-blue-sub-item" style={{ background: 'rgb(179, 216, 255)' }}></div>
          <div className="bg-blue-sub-item" style={{ background: 'rgb(198, 226, 255)' }}></div>
          <div className="bg-blue-sub-item" style={{ background: 'rgb(217, 236, 255)' }}></div>
        </div>
      </div>
      <h3>辅助色</h3>
      <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
      <div className="sub-color-box">
        <div className="demo-color-box" style={{ background: 'rgb(103, 194, 58)' }}>
          Success<div className="value">#67C23A</div>
          <div className="bg-color-sub">
            <div className="bg-color-sub-item" style={{ background: 'rgb(225, 243, 216)' }}></div>
            <div className="bg-color-sub-item" style={{ background: 'rgb(240, 249, 235)' }}></div>
          </div>
        </div>
        <div className="demo-color-box" style={{ background: 'rgb(230, 162, 60)' }}>
          Warning<div className="value">#E6A23C</div>
          <div className="bg-color-sub">
            <div className="bg-color-sub-item" style={{ background: 'rgb(250, 236, 216)' }}></div>
            <div className="bg-color-sub-item" style={{ background: 'rgb(253, 246, 236)' }}></div>
          </div>
        </div>
        <div className="demo-color-box" style={{ background: 'rgb(245, 108, 108)' }}>
          Danger<div className="value">#F56C6C</div>
          <div className="bg-color-sub">
            <div className="bg-color-sub-item" style={{ background: 'rgb(253, 226, 226)' }}></div>
            <div className="bg-color-sub-item" style={{ background: 'rgb(254, 240, 240)' }}></div>
          </div>
        </div>
        <div className="demo-color-box" style={{ background: 'rgb(144, 147, 153)' }}>
          Info<div className="value">#909399</div>
          <div className="bg-color-sub">
            <div className="bg-color-sub-item" style={{ background: 'rgb(233, 233, 235)' }}></div>
            <div className="bg-color-sub-item" style={{ background: 'rgb(244, 244, 245)' }}></div>
          </div>
        </div>
      </div>
      <h3>中性色</h3>
      <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
      <div className="demo-color-font">
        <div className="demo-color-font-group">
          <div className="demo-color-font-item" style={{ background: 'rgb(48, 49, 51)' }}>
            主要文字<div className="value">#303133</div>
          </div>
          <div className="demo-color-font-item" style={{ background: 'rgb(96, 98, 102)' }}>
            常规文字<div className="value">#606266</div>
          </div>
          <div className="demo-color-font-item" style={{ background: 'rgb(144, 147, 153) ' }}>
            次要文字<div className="value">#909399</div>
          </div>
          <div className="demo-color-font-item" style={{ background: 'rgb(192, 196, 204)' }}>
            占位文字<div className="value">#C0C4CC</div>
          </div>
        </div>
        <div className="demo-color-font-group">
          <div
            className="demo-color-font-item"
            style={{ background: 'rgb(220, 223, 230)', color: '#303133' }}
          >
            一级边框<div className="value">#DCDFE6</div>
          </div>
          <div
            className="demo-color-font-item"
            style={{ background: 'rgb(228, 231, 237)', color: '#303133' }}
          >
            二级边框<div className="value">#E4E7ED</div>
          </div>
          <div
            className="demo-color-font-item"
            style={{ background: 'rgb(235, 238, 245)', color: '#303133' }}
          >
            三级边框<div className="value">#EBEEF5</div>
          </div>
          <div
            className="demo-color-font-item"
            style={{ background: 'rgb(242, 246, 252)', color: '#303133' }}
          >
            四级边框<div className="value">#F2F6FC</div>
          </div>
        </div>
        <div className="demo-color-font-group">
          <div className="demo-color-font-item" style={{ background: 'rgb(0, 0, 0)' }}>
            基础黑色<div className="value">#000000</div>
          </div>
          <div
            className="demo-color-font-item"
            style={{
              background: 'rgb(255, 255, 255)',
              color: 'rgb(48, 49, 51)',
              border: '1px solid rgb(238, 238, 238)',
            }}
          >
            基础白色<div className="value">#FFFFFF</div>
          </div>
          <div className="demo-color-font-item bg-transparent">
            透明<div className="value">Transparent</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
