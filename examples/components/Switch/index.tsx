import React from 'react';
import Switch from '../../../src/Switch';
import './index.less';
import ExampleItem from '../_exampleItem';

const InputSamples = () => {
  return (
    <div className="switch-example">
      <div className="titles">
        <div className="basetitle">开关 Switch</div>
        <div className="desc">用于两个互斥选项，用来打开或关闭选项的选择控件。</div>
      </div>

      <ExampleItem
        title="基础开关"
        description="不带描述，最基础的开关。"
        codeContent={`import Switch from "../../src/Switch";

ReactDOM.render(
  <div>
    <Switch />
    <Switch  defaultChecked  />
  </div>,
CONTAINER)`}
      >
        <Switch />
        <Switch defaultChecked />
      </ExampleItem>

      <ExampleItem
        title="开关尺寸"
        description="开关分为 small、default 两种尺寸。"
        codeContent={`import Switch from "../../src/Switch";

ReactDOM.render(
    <div>
    <Switch />
    <Switch  size="small"  />
    </div>,
CONTAINER)

        `}
      >
        <Switch />
        <Switch size="small" />
      </ExampleItem>

      <ExampleItem
        title="禁用状态"
        description="禁用开关。"
        codeContent={`import Switch from "../../src/Switch";

ReactDOM.render(
    <div>
      <Switch disabled />
      <Switch defaultChecked disabled />
      <Switch  size="small" disabled  />
      <Switch  size="small" defaultChecked disabled  />
    </div>,
CONTAINER)`}
      >
        <Switch disabled />
        <Switch defaultChecked disabled />
        <Switch size="small" disabled />
        <Switch size="small" defaultChecked disabled />
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
              <td>style</td>
              <td>开关自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>开关自定义css样式</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>checked</td>
              <td>开关是否打开</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>defaultChecked</td>
              <td>默认是否选中</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>开关是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>点击开关的回调</td>
              <td>{`(value: boolean, event:any) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>开关的尺寸</td>
              <td>{`'small' | 'default'`}</td>
              <td>small</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputSamples;
