import React from 'react';
import CheckBox from '../../../src/CheckBox';
import { CheckStatus } from '../../../src/CheckBox/interface';
import './index.less';
import ExampleItem from '../_exampleItem';

const ButtonSamples = () => {
  return (
    <div className="checkbox-example">
      <div className="titles">
        <div className="basetitle">复选框 checkbox</div>
        <div className="desc">复选框有未选择，半选，已选，不可用，4种状态</div>
      </div>
      <ExampleItem
        title="基础单选"
        description="最基础的单选。"
        codeContent={`import Radio from "../../../src/Radio";
ReactDOM.render(
  <div>
    <CheckBox />
    <CheckBox checked={CheckStatus.HALFCHECK} />
    <CheckBox checked={CheckStatus.CHECKED} />
    <CheckBox disabled />
  </div>,
CONTAINER)`}
      >
        <CheckBox />
        <CheckBox defaultChecked={CheckStatus.HALFCHECK} />
        <CheckBox defaultChecked={CheckStatus.CHECKED} />
        <CheckBox disabled />
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
              <td>checked</td>
              <td>选中状态</td>
              <td>`uncheck` | 'checked' | 'halfcheck'</td>
              <td>'uncheck'</td>
            </tr>
            <tr>
              <td>readOnly</td>
              <td>是否只读</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>选中状态回调事件</td>
              <td>{`(value: 'uncheck' | 'checked' | 'halfcheck')=>void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonSamples;
