import React from 'react';
import Button from '../../../src/Button';
import { Plus } from '../../../icons';
import './index.less';
import ExampleItem from '../_exampleItem';
const ButtonSamples = () => {
  return (
    <div className="button-example">
      <div className="titles">
        <div className="basetitle">按钮 Button</div>
        <div className="desc">常用的操作按钮。</div>
      </div>
      <ExampleItem
        title="基础按钮"
        description="基础的按钮用法"
        codeContent={`import Button from '../../../src/Button';
ReactDOM.render(
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="warning">Warning</Button>
    <Button type="success">Success</Button>
    <Button type="error">Error</Button>
    <Button type="link">Link</Button>
  </div>,
CONTAINER)`}
      >
        <div>
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="warning">Warning</Button>
          <Button type="success">Success</Button>
          <Button type="error">Error</Button>
          <Button type="link">Link</Button>
        </div>
      </ExampleItem>
      <ExampleItem
        title="按钮形状"
        description="按钮形状用法"
        codeContent={`import Button from '../../../src/Button';
ReactDOM.render(
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="warning">Warning</Button>
    <Button type="success">Success</Button>
    <Button type="error">Error</Button>
    <Button type="link">Link</Button>
  </div>,
CONTAINER)`}
      >
        <div>
          <Button type="primary" shape="square" size="small">
            <Plus />
          </Button>
          <Button type="primary" shape="circle" size="small">
            <Plus />
          </Button>
          <Button type="primary" shape="rectangle" size="small">
            Primary
          </Button>
          <Button type="primary" shape="round" size="small">
            Primary
          </Button>
        </div>
      </ExampleItem>
      <ExampleItem
        title="按钮尺寸"
        description="按钮分为： 迷你、小、中、大。高度为24px/28px/32px/36px"
        codeContent={`import Button from '../../../src/Button';
ReactDOM.render(
  <div>
    <Button size="mini" type="primary">mini</Button>
    <Button size="small" type="primary">Small</Button>
    <Button size="middle" type="primary">Middle</Button>
    <Button size="large" type="primary">Large</Button>
  </div>,
CONTAINER)`}
      >
        <div>
          <Button size="mini" type="primary">
            mini
          </Button>
          <Button size="small" type="primary">
            Small
          </Button>
          <Button size="middle" type="primary">
            Middle
          </Button>
          <Button size="large" type="primary">
            Large
          </Button>
        </div>
      </ExampleItem>

      <ExampleItem
        title="禁用按钮"
        description="按钮的禁用状态"
        codeContent={`import Button from '../../../src/Button';
ReactDOM.render(
  <div>
    <Button disabled>Default</Button>
    <Button type="primary" disabled>Primary</Button>
    <Button type="warning" disabled>Warning</Button>
    <Button type="success" disabled>Success</Button>
    <Button type="error" disabled>Error</Button>
    <Button type="link" disabled>Link</Button>
  </div>,
CONTAINER)`}
      >
        <div>
          <Button disabled>Default</Button>
          <Button type="primary" disabled>
            Primary
          </Button>
          <Button type="warning" disabled>
            Warning
          </Button>
          <Button type="success" disabled>
            Success
          </Button>
          <Button type="error" disabled>
            Error
          </Button>
          <Button type="link" disabled>
            Link
          </Button>
        </div>
      </ExampleItem>

      <ExampleItem
        title="圆形按钮"
        description="圆形的按钮"
        codeContent={`import Button from '../../../src/Button';
ReactDOM.render(
  <div>
    <Button disabled>Default</Button>
    <Button type="primary" shape="round">Primary</Button>
  </div>,
CONTAINER)`}
      >
        <div>
          <Button type="primary" size="mini" shape="circle">
            a
          </Button>
          <Button type="primary" size="small" shape="circle">
            a
          </Button>
          <Button type="primary" shape="circle">
            a
          </Button>
          <Button type="primary" size="large" shape="circle">
            a
          </Button>
        </div>
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
              <td>children</td>
              <td>按钮内子元素</td>
              <td>React.ReactNode</td>
              <td>'default'</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>按钮点击事件</td>
              <td>{`(e:React.MouseEvent)=>void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>按钮是否不可用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>style</td>
              <td>按钮样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>按钮大小</td>
              <td>string</td>
              <td>'small'</td>
            </tr>
            <tr>
              <td>preFix</td>
              <td>按钮前置icon</td>
              <td>ReactDOM</td>
              <td>-</td>
            </tr>
            <tr>
              <td>afterFix</td>
              <td>按钮后置icon</td>
              <td>ReactDOM</td>
              <td>-</td>
            </tr>
            <tr>
              <td>type</td>
              <td>按钮类型</td>
              <td>string</td>
              <td>'defalut'</td>
            </tr>
            <tr>
              <td>className</td>
              <td>按钮子定义css样式</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonSamples;
