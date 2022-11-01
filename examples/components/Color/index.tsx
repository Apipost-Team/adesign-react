import React from 'react';
import './index.less';
import './colors.less';

const Color = () => {
  return (
    <div className="color-example">
      <div className="titles">
        <div className="basetitle">色彩 Color</div>
        <div className="desc">apipost使用一套特定的调色板来</div>
      </div>
      <h3>主题色</h3>
      <p>apipost主要颜色是鲜艳友好的蓝色。</p>
      <div className="demo-color-box color-brand-6">
        Brand Color
        <div className="value">#409EFF</div>
        <div className="bg-color-sub ">
          <div className="bg-blue-sub-item color-brand-1"></div>
          <div className="bg-blue-sub-item color-brand-2"></div>
          <div className="bg-blue-sub-item color-brand-3"></div>
          <div className="bg-blue-sub-item color-brand-4"></div>
          <div className="bg-blue-sub-item color-brand-5"></div>
          <div className="bg-blue-sub-item color-brand-6"></div>
        </div>
      </div>
      <h3>辅助色</h3>
      <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
      <div className="sub-color-box">
        <div className="demo-color-box color-success-6">
          Success<div className="value">#67C23A</div>
          <div className="bg-color-sub">
            <div className="bg-blue-sub-item color-success-1"></div>
            <div className="bg-blue-sub-item color-success-2"></div>
            <div className="bg-blue-sub-item color-success-3"></div>
            <div className="bg-blue-sub-item color-success-4"></div>
            <div className="bg-blue-sub-item color-success-5"></div>
            <div className="bg-blue-sub-item color-success-6"></div>
          </div>
        </div>
        <div className="demo-color-box color-warning-6">
          Warning<div className="value">#67C23A</div>
          <div className="bg-color-sub">
            <div className="bg-blue-sub-item color-warning-1"></div>
            <div className="bg-blue-sub-item color-warning-2"></div>
            <div className="bg-blue-sub-item color-warning-3"></div>
            <div className="bg-blue-sub-item color-warning-4"></div>
            <div className="bg-blue-sub-item color-warning-5"></div>
            <div className="bg-blue-sub-item color-warning-6"></div>
          </div>
        </div>
        <div className="demo-color-box color-danger-6">
          Danger<div className="value">#67C23A</div>
          <div className="bg-color-sub">
            <div className="bg-blue-sub-item color-danger-1"></div>
            <div className="bg-blue-sub-item color-danger-2"></div>
            <div className="bg-blue-sub-item color-danger-3"></div>
            <div className="bg-blue-sub-item color-danger-4"></div>
            <div className="bg-blue-sub-item color-danger-5"></div>
            <div className="bg-blue-sub-item color-danger-6"></div>
          </div>
        </div>
        <div className="demo-color-box color-default-6">
          Info<div className="value">#67C23A</div>
          <div className="bg-color-sub">
            <div className="bg-blue-sub-item color-default-1"></div>
            <div className="bg-blue-sub-item color-default-2"></div>
            <div className="bg-blue-sub-item color-default-3"></div>
            <div className="bg-blue-sub-item color-default-4"></div>
            <div className="bg-blue-sub-item color-default-5"></div>
            <div className="bg-blue-sub-item color-default-6"></div>
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
