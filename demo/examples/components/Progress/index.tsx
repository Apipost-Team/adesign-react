import React from 'react';
import {Progress} from 'adesign-react'
import './index.less';
import ExampleItem from '../_exampleItem';

const RadioSamples = () => {
  return (
    <div className="radio-example">
      <div className="titles">
        <div className="basetitle">进度条 Progress</div>
        <div className="desc">用于展示操作进度</div>
      </div>

      <ExampleItem
        title="基础进度条"
        description="最基础的进度条。"
        codeContent={`import Radio from "../../../src/Radio";
ReactDOM.render(
  <div>
    <Progress percent={30} width="40%" />
    <br />
    <Progress percent={100} width="40%" />
  </div>,
CONTAINER)`}
      >
        <Progress percent={30} width="40%" />
        <br />
        <Progress percent={100} width="40%" />
      </ExampleItem>

      <ExampleItem
        title="圆形进度条"
        description="圆形进度条。"
        codeContent={`import Radio from "../../../src/Radio";
ReactDOM.render(
  <div className="progress_container">
    <Progress percent={30} type="circle" />
    <Progress percent={100} type="circle" />
    <Progress percent={30} type="circle" status="warning" />
    <Progress percent={30} type="circle" status="error" />
  </div>,
CONTAINER)`}
      >
        <div className="progress_container">
          <Progress percent={30} type="circle" />
          <Progress percent={100} type="circle" />
          <Progress percent={30} type="circle" status="warning" />
          <Progress percent={30} type="circle" status="error" />
        </div>
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
              <td>className</td>
              <td>自定义类名</td>
              <td>string || string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>type</td>
              <td>进度条类型</td>
              <td>'circle' | 'line'</td>
              <td>‘line’</td>
            </tr>

            <tr>
              <td>color</td>
              <td>进度条颜色</td>
              <td>color</td>
              <td>-</td>
            </tr>
            <tr>
              <td>trailColor</td>
              <td>剩余进度条颜色</td>
              <td>color</td>
              <td>-</td>
            </tr>
            <tr>
              <td>strokeWidth</td>
              <td>进度条线宽</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showText</td>
              <td>是否展示文本</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>percent</td>
              <td>进度条百分比（必填）</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>width</td>
              <td>进度条宽度</td>
              <td>string | number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>status</td>
              <td>自定义进度条状态</td>
              <td>'success' | 'error' | 'warning' | 'normal'</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RadioSamples;
