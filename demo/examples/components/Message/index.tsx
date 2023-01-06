import React from 'react';
import {Button,Message} from 'adesign-react'
import './index.less';
import ExampleItem from '../_exampleItem';

const MessageSamples = () => {
  return (
    <div className="message-example">
      <div className="titles">
        <div className="basetitle">全局提示信息 Message</div>
        <div className="desc">轻量级的全局提示信息</div>
      </div>

      <ExampleItem
        title="基础提示"
        description="最基础的提示信息"
        codeContent={`import Button from "../../../src/Button";
import Message from "../../../src/Message";

ReactDOM.render(
  <div>
    <Button onClick={() => { Message('info', '消息提示') }} type="primary">消息提示</Button>
  </div>,
CONTAINER)`}
      >
        <Button
          onClick={() => {
            Message('info', '消息提示');
          }}
          type="primary"
        >
          消息提示
        </Button>
      </ExampleItem>

      <ExampleItem
        title="提示类型"
        description="全局有4种不同类型的，分别为： info、error、success、warning"
        codeContent={`import Button from "../../../src/Button";
import Message from "../../../src/Message";

ReactDOM.render(
  <div>
    <Button onClick={() => { Message('info', '消息提示') }} type="primary">消息提示</Button>
    <Button onClick={() => { Message('error', '错误提示') }} type="primary">错误提示</Button>
    <Button onClick={() => { Message('success', '成功提示') }} type="primary">成功提示</Button>
    <Button onClick={() => { Message('warning', '警告提示') }} type="primary">警告提示</Button>
  </div>,
CONTAINER)`}
      >
        <Button
          onClick={() => {
            Message('info', '消息提示');
          }}
          type="primary"
        >
          消息提示
        </Button>
        <Button
          onClick={() => {
            Message('error', '错误提示');
          }}
          type="error"
        >
          错误提示
        </Button>
        <Button
          onClick={() => {
            Message('success', '成功提示');
          }}
          type="success"
        >
          成功提示
        </Button>
        <Button
          onClick={() => {
            Message('warning', '警告提示');
          }}
          type="warning"
        >
          警告提示
        </Button>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">Message</div>
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
              <td>自定义css样式</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>text</td>
              <td>消息内容</td>
              <td>ReactNode | string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showIcon</td>
              <td>是否显示图标</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>showClose</td>
              <td>是否显示关闭按钮</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageSamples;
