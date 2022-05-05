import React, { useState, useRef } from 'react';
import './index.less';
import ExampleItem from '../_exampleItem';
import Tooltip from '../../../src/Tooltip';
import Button from '../../../src/Button';

const DropdownSamples = () => {
  const buttonList = [
    { children: 'TL', placement: 'top-start', style: { left: '70px', top: 0 } },
    { children: 'Top', placement: 'top', style: { left: '180px', top: 0 } },
    { children: 'TR', placement: 'top-end', style: { left: '290px', top: 0 } },
    { children: 'RT', placement: 'right-start', style: { left: '350px', top: '60px' } },
    { children: 'Right', placement: 'right', style: { left: '350px', top: '120px' } },
    { children: 'RB', placement: 'right-end', style: { left: '350px', top: '180px' } },
    { children: 'BR', placement: 'bottom-end', style: { left: '290px', top: '240px' } },
    { children: 'Bottom', placement: 'bottom', style: { left: '180px', top: '240px' } },
    { children: 'BL', placement: 'bottom-start', style: { left: '70px', top: '240px' } },
    { children: 'LB', placement: 'left-end', style: { left: '10px', top: '180px' } },
    { children: 'Left', placement: 'left', style: { left: '10px', top: '120px' } },
    { children: 'LT', placement: 'left-start', style: { left: '10px', top: '60px' } },
  ];

  return (
    <div className="tooltip-example">
      <div className="titles">
        <div className="basetitle">文字气泡 Tooltip</div>
        <div className="desc">鼠标悬停在某个组件时，弹出的文字提示。</div>
      </div>

      <ExampleItem
        title="基本用法"
        description="Tooltip 支持 12 个不同的方位。分别为：上左 上 上右 下左 下 下右 左上 左 左下 右上 右 右下。"
        codeContent={`import Dropdown from 'A-Design/Dropdown';
import Button from 'A-Design/Button';

`}
      >
        <div className="rectbox">
          {buttonList.map((d, index) => (
            <Tooltip key={index} placement={d.placement} content="this is a tooltip">
              <Button className="btntrigger" {...d} />
            </Tooltip>
          ))}
        </div>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc" />
      </div>
      <div className="doc-desc">
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>outsideClose</td>
              <td>点击外部是否自动关闭</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>trigger</td>
              <td>下拉菜单展开触发方式</td>
              <td>'click' | 'hover' | 'contextmenu'</td>
              <td>'click'</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>下拉弹窗默认出现位置</td>
              <td> 'top'| 'top-start' | 'top-end' | 'bottom'| 'bottom-start' | 'bottom-end'</td>
              <td>'bottom-start'</td>
            </tr>
            <tr>
              <td>onVisibleChange</td>
              <td>下拉菜单显示状被态改变回调事件</td>
              <td>{`(visible:boolean) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>外部包装容器样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>外部包装容器Class名称</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>content</td>
              <td>下拉内容</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>children</td>
              <td>触发下拉菜单元素</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showArrow</td>
              <td>是否展示箭头</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>bgColor</td>
              <td>弹出层背景色</td>
              <td>string</td>
              <td>#1d2129</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropdownSamples;
