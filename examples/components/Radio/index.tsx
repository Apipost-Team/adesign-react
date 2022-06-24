import React from 'react';
import Radio from '../../../src/Radio';
// import RadioGroup from '../../../src/Radio/Group';
import './index.less';
import ExampleItem from '../_exampleItem';

const RadioGroup = Radio.Group;

const RadioSamples = () => {
  return (
    <div className="radio-example">
      <div className="titles">
        <div className="basetitle">单选 Radio</div>
        <div className="desc">在一组相关且互斥的选项中用户仅能选择一个选项。</div>
      </div>

      <ExampleItem
        title="基础单选"
        description="最基础的单选。"
        codeContent={`import Radio from "../../../src/Radio";
ReactDOM.render(
  <div>
    <Radio>选中</Radio>
    <Radio disabled>禁用状态</Radio>
  </div>,
CONTAINER)`}
      >
        <Radio checked>选中</Radio>
        <Radio checked disabled>
          禁用状态
        </Radio>
      </ExampleItem>

      <ExampleItem
        title="单选框组"
        description="通过children的方式使用"
        codeContent={`import Radio from "../../../src/Radio";
import RadioGroup from "../../../src/Radio/Group";
  ReactDOM.render(
    <div>
      <RadioGroup value="A">
        <Radio value="A">A</Radio>
        <Radio value="B" disabled>B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </RadioGroup>
    </div>,
  CONTAINER)`}
      >
        <RadioGroup value="A">
          <Radio value="A">A</Radio>
          <Radio value="B" disabled>
            B
          </Radio>
          <Radio value="C">C</Radio>
          <Radio value="D">D</Radio>
        </RadioGroup>
      </ExampleItem>

      <ExampleItem
        title="按钮类型单选框组"
        description="通过设置type的方式使用"
        codeContent={`import Radio from "../../../src/Radio";
import RadioGroup from "../../../src/Radio/Group";
  ReactDOM.render(
    <div>
      <RadioGroup value="A" type="button">
        <Radio value="A">选项1</Radio>
        <Radio value="B" disabled>
          选项2
        </Radio>
        <Radio value="C">选项3</Radio>
        <Radio value="D">选项4</Radio>
      </RadioGroup>
    </div>,
  CONTAINER)`}
      >
        <RadioGroup value="A" type="button">
          <Radio value="A">选项1</Radio>
          <Radio value="B" disabled>
            选项2
          </Radio>
          <Radio value="C">选项3</Radio>
          <Radio value="D">选项4</Radio>
        </RadioGroup>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">Radio</div>
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
              <td>自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>value</td>
              <td>单选选项值</td>
              <td>string ｜ number</td>
              <td>''</td>
            </tr>
            <tr>
              <td>checked</td>
              <td>是否选中</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td></td>
              <td>{`(value: any) => void`}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="titles">
        <div className="basetitle"></div>
        <div className="desc">Radio.Group</div>
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
              <td>自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义class</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>type</td>
              <td>按钮组类型</td>
              <td>'radio' | 'button'</td>
              <td>radio</td>
            </tr>
            <tr>
              <td>value</td>
              <td>文本内容</td>
              <td>string | number</td>
              <td>''</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>禁用按钮组</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Radio的name</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td></td>
              <td>{`(value: any) => void`}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RadioSamples;
