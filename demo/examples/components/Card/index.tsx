import React from 'react';
import {Card} from 'adesign-react';
import './index.less';
import ExampleItem from '../_exampleItem';

const InputSamples = () => {
  return (
    <div className="switch-example">
      <div className="titles">
        <div className="basetitle">卡片 Card</div>
        <div className="desc">通用卡片容器。</div>
      </div>

      <ExampleItem
        title="基础卡片 Card"
        description="最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。"
        codeContent={`import Card from "../../src/Card";

ReactDOM.render(
  <div>
  <Card bordered>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  </div>,
CONTAINER)`}
      >
        <Card bordered>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
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
              <td>extra</td>
              <td>右上角样式</td>
              <td>React.ReactNode;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>bordered</td>
              <td>是否有边框</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputSamples;
