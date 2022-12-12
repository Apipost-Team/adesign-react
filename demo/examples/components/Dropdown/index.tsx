import React, { useState, useRef } from 'react';
import './index.less';
import ExampleItem from '../_exampleItem';
import {Button,Dropdown} from  'adesign-react'

const DropdownSamples = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const refDropdown = useRef(null);

  const MenuList = (
    <div data-module="dropdown-example">
      <div>外部包装容器样式</div>
      <div>外部包装容器Class名称</div>
      <div>按钮内子元素</div>
    </div>
  );

  return (
    <div className="dropdown-example">
      <div className="titles">
        <div className="basetitle">下拉菜单 Dropdown</div>
        <div className="desc">页面上的内容过多时，可将多余内容收纳到向下展开的浮层容器中。</div>
      </div>

      <ExampleItem
        title="基本用法"
        description="下拉菜单的基本用法。下拉菜单开启后会为触发元素添加 dropdown-open 类名。"
        codeContent={`import Dropdown from 'A-Design/Dropdown';
import Button from 'A-Design/Button';

const [visible, setVisible] = useState<boolean>(false);
const refDropdown = useRef(null);

ReactDOM.render(
  <div>
  <Dropdown
  ref={refDropdown}
  className='drop-menus'
  onVisibleChange={setVisible}
  content={(
    <div data-module='dropdown-example'>
      <div>Observables</div>
      <div>Observer</div>
      <div>Operators</div>
      <div>Subscription</div>
      <div>Subjects</div>
      <div className='special' onClick={() => {
        refDropdown.current?.setPopupVisible(false);
      }}>click here close</div>
    </div>
  )}
>
  <Button className='btn-dropdown'>click me</Button>
</Dropdown>
<span className='spn-status'>我被{visible ? '显示' : '隐藏'}了</span>
  </div>,
document.body)`}
      >
        <Dropdown
          ref={refDropdown}
          className="drop-menus"
          onVisibleChange={setVisible}
          content={
            <div data-module="dropdown-example">
              <div>Observables</div>
              <div>Observer</div>
              <div>Operators</div>
              <div>Subscription</div>
              <div>Subjects</div>
              <div
                className="special"
                onClick={() => {
                  refDropdown.current?.setPopupVisible(false);
                }}
              >
                click here close
              </div>
            </div>
          }
        >
          <Button className="btn-dropdown">click me</Button>
        </Dropdown>
        <span className="spn-status">{`我被${visible ? '显示' : '隐藏'}了`}</span>
      </ExampleItem>

      <ExampleItem
        title="触发方式"
        description="通过 trigger 指定触发方式。"
        codeContent={`import Dropdown from 'A-Design/Dropdown';
import Button from 'A-Design/Button';

const MenuList = (<div data-module='dropdown-example'>
    <div>外部包装容器样式</div>
    <div>外部包装容器Class名称</div>
    <div>按钮内子元素</div>
  </div>);

ReactDOM.render(
  <div>
      <Dropdown
      trigger='hover'
      className='drop-menus'
      content={MenuList}
    >
      <Button className='btn-dropdown'>Hover触发</Button>
    </Dropdown>
    <Dropdown
      trigger='click'
      className='drop-menus'
      content={MenuList}
    >
      <Button className='btn-dropdown'>Click触发</Button>
    </Dropdown>
    <Dropdown
      trigger='contextmenu'
      className='drop-menus'
      content={MenuList}
    >
      <Button className='btn-dropdown'>鼠标右键触发</Button>
    </Dropdown>
  </div>,
  document.body)`}
      >
        <Dropdown trigger="hover" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">Hover触发</Button>
        </Dropdown>
        <Dropdown trigger="click" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">Click触发</Button>
        </Dropdown>
        <Dropdown trigger="contextmenu" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">鼠标右键触发</Button>
        </Dropdown>
      </ExampleItem>

      <ExampleItem
        title="弹出方向"
        description="通过 position 支持指定 6 种弹出方位，分别是：向上 top,左上top-start, 右上top-end,向下bottom, 左下bottom-start(默认), 右下bottom-end"
        codeContent={`import Dropdown from 'A-Design/Dropdown';
      import Button from 'A-Design/Button';

      const MenuList = (<div data-module='dropdown-example'>
          <div>外部包装容器样式</div>
          <div>外部包装容器Class名称</div>
          <div>按钮内子元素</div>
        </div>);

ReactDOM.render(
  <div>
        <Dropdown
        placement='top'
        className='drop-menus'
        content={MenuList}
      >
        <Button className='btn-dropdown'>top</Button>
      </Dropdown>

      <Dropdown
        placement='top-start'
        className='drop-menus'
        content={MenuList}
      >
        <Button className='btn-dropdown'>top-start</Button>
      </Dropdown>

      <Dropdown
        placement='top-end'
        className='drop-menus'
        content={MenuList}
      >
        <Button className='btn-dropdown'>top-end</Button>
      </Dropdown>

      <Dropdown
        placement='bottom'
        className='drop-menus'
        content={MenuList}
      >
        <Button className='btn-dropdown'>bottom</Button>
      </Dropdown>

      <Dropdown
        placement='bottom-start'
        className='drop-menus'
        content={MenuList}
      >
        <Button className='btn-dropdown'>bottom-start</Button>
      </Dropdown>

      <Dropdown
        placement='bottom-end'
        className='drop-menus'
        content={MenuList}
      >
        <Button className='btn-dropdown'>bottom-end</Button>
      </Dropdown>
  </div>,
  document.body)`}
      >
        <Dropdown placement="top" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">top</Button>
        </Dropdown>

        <Dropdown placement="top-start" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">top-start</Button>
        </Dropdown>

        <Dropdown placement="top-end" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">top-end</Button>
        </Dropdown>

        <Dropdown placement="bottom" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">bottom</Button>
        </Dropdown>

        <Dropdown placement="bottom-start" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">bottom-start</Button>
        </Dropdown>

        <Dropdown placement="bottom-end" className="drop-menus" content={MenuList}>
          <Button className="btn-dropdown">bottom-end</Button>
        </Dropdown>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc"></div>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropdownSamples;
