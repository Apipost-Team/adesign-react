import React from 'react';
import InputNumber from '../../../src/InputNumber';
import './index.less';
import ExampleItem from '../_exampleItem';

const InputNumberSamples = () => {
  return (
    <div className="input-example">
      <div className="titles">
        <div className="basetitle">数字输入框 InputNumber</div>
        <div className="desc">基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。</div>
      </div>
      <ExampleItem
        title="基础数字输入框"
        description="最基础的数字输入框。"
        codeContent={`
import InputNumber from "../../../src/InputNumber";

ReactDOM.render(
  <>
    <div>
      <InputNumber />
    </div>
  </>,
  CONTAINER
);
        `}
      >
        <div>
          <InputNumber />
        </div>
      </ExampleItem>

      <ExampleItem
        title="竖排"
        description="最基础的数字输入框。"
        codeContent={`
import InputNumber from "../../../src/InputNumber";

ReactDOM.render(
  <>
    <div>
      <InputNumber />
    </div>
  </>,
  CONTAINER
);
        `}
      >
        <div>
          <InputNumber type="column" />
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
              <td>value</td>
              <td>数字值</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>修改输入框内容回调方法</td>
              <td>{`(value: string, e: React.FormEvent<HTMLInputElement>) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>输入框自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>未输入时组件默认提示</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>输入框是否不可用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onBlur</td>
              <td>文本框失去焦点时触发事件</td>
              <td>{`(e: React.FormEvent<HTMLInputElement>) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onFocus</td>
              <td>文本框焦点获取焦点时触发事件</td>
              <td>{`(e: React.FormEvent<HTMLInputElement>) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onKeyDown</td>
              <td>键盘按下时触发事件</td>
              <td>{`(e: React.FormEvent<HTMLInputElement>) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>输入框是否只读</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputNumberSamples;
