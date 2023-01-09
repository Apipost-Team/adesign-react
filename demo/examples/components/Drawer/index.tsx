import React, { useState } from 'react';
import {Button,Drawer} from 'adesign-react';
import './index.less';
import ExampleItem from '../_exampleItem';

const DrawerSample = () => {
  const [visible, setVisble] = useState(false);

  return (
    <div className="switch-example">
      <div className="titles">
        <div className="basetitle">抽屉 Drawer</div>
        <div className="desc">从屏幕某一侧滑出抽屉式面板</div>
      </div>

      <ExampleItem
        title="基础抽屉"
        description="触发从右侧滑出，点击遮罩关闭"
        codeContent={`import Switch from "../../src/Switch";
const [visible, setVisble] = useState(false);

ReactDOM.render(
  <div>
    <Drawer
      visible={visible}
      title="Title"
      onCancel={() => {
        setVisble(false);
      }}
    >
      This Is Content
    </Drawer>
  </div>,
CONTAINER)`}
      >
        <Button
          onClick={() => {
            setVisble(true);
          }}
        >
          打开 Drawer
        </Button>
        <Drawer
          visible={visible}
          title="Title"
          onCancel={() => {
            setVisble(false);
          }}
        >
          This Is Content
        </Drawer>
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
              <td>children</td>
              <td>抽屉展示内容</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>visible</td>
              <td>是否显示抽屉</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>title</td>
              <td>头部内容（为null时不展示）</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>headerStyle</td>
              <td>头部自定义样式</td>
              <td>CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>底部自定义按钮确认和取消按钮（为null时不展示）</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>footerStyle</td>
              <td>底部自定义样式</td>
              <td>CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>okText</td>
              <td>确认按钮文案</td>
              <td>string</td>
              <td>确认</td>
            </tr>
            <tr>
              <td>cancelText</td>
              <td>取消按钮文案</td>
              <td>string</td>
              <td>取消</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>抽屉弹出位置 (top | bottom | right | left)</td>
              <td>string</td>
              <td>right</td>
            </tr>
            <tr>
              <td>width</td>
              <td>抽屉的宽度，`placement`为 `left` `right` 时生效</td>
              <td>string | number</td>
              <td>300</td>
            </tr>
            <tr>
              <td>height</td>
              <td>抽屉的高度 `placement`为 `left` `right` 时生效</td>
              <td>string | number</td>
              <td>300</td>
            </tr>
            <tr>
              <td>mask</td>
              <td>是否显示遮罩</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>maskClosable</td>
              <td>点击遮罩关闭</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>closable</td>
              <td>是否显示关闭按钮</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>onOk</td>
              <td>点击确认的回调</td>
              <td>() =&gt; void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onCancel</td>
              <td>点击取消的回调</td>
              <td>() =&gt; void</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DrawerSample;
