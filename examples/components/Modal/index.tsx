import React, { useState } from 'react';
import Modal from '../../../src/Modal';
import Button from '../../../src/Button';
import './index.less';
import ExampleItem from '../_exampleItem';

const ModalSamples = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="radio-example">
      <div className="titles">
        <div className="basetitle">模态框 Modal</div>
        <div className="desc">在一组相关且互斥的选项中用户仅能选择一个选项。</div>
      </div>

      <ExampleItem
        title="基础Modal"
        description="最基础的Modal。"
        codeContent={`import Modal from "../../../src/Modal";
import Button from "../../../src/Button";

const [visible, setVisible] = useState(false);

ReactDOM.render(
  <div>
    <Button onClick={() => { setVisible(true) }}></Button>
    <Modal visible={visible} onCancel={() => { setVisible(false) }}></Modal>
  </div>
CONTAINER)`}
      >
        <div>
          <Button
            onClick={() => {
              setVisible(true);
            }}
          ></Button>
          {visible && (
            <Modal
              visible={visible}
              title="Title"
              onCancel={() => {
                setVisible(false);
              }}
            >
              This is Content
            </Modal>
          )}
        </div>
      </ExampleItem>

      <ExampleItem
        title="消息提示"
        description="使用Modal.confirm快速弹出对话框"
        codeContent={`import Modal from "../../../src/Modal";
import Button from "../../../src/Button";

ReactDOM.render(
  <div>
    <Button onClick={() => {
      Modal.confirm({
        title: 'confirm title',
        content: '123'
      })
    }}></Button>
  </div>
CONTAINER)`}
      >
        <div>
          <Button
            onClick={() => {
              Modal.confirm({
                title: 'confirm title',
                content: 'confirm content',
              });
            }}
          ></Button>
        </div>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">Modal</div>
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
              <td>visible</td>
              <td>是否显示Modal</td>
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

      <div className="titles">
        <div className="basetitle"></div>
        <div className="desc">Modal.confirm</div>
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
              <td>title</td>
              <td>头部内容</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>content</td>
              <td>头部内容</td>
              <td>string</td>
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

export default ModalSamples;
