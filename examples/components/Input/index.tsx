import React from 'react';
import Input from '../../../src/Input';
import './index.less';
import ExampleItem from '../_exampleItem';

const Textarea = Input.Textarea;

const InputSamples = () => {
  return (
    <div className="input-example">
      <div className="titles">
        <div className="basetitle">文本框 Input</div>
        <div className="desc">基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。</div>
      </div>
      <ExampleItem
        title="最基础的文本框"
        description="最基础的Input输入框。"
        codeContent={`
import Input from '../../../src/Input';

ReactDOM.render(
  <>
    <Input placeholder="Please Enter" />
    <Input disabled placeholder="Please Enter" />
  </>,
  CONTAINER
);`}
      >
        <div className="demo">
          <div>
            <Input placeholder="Please Enter" />
          </div>
          <div>
            <Input disabled placeholder="Please Enter" />
          </div>
        </div>
      </ExampleItem>
      <ExampleItem
        title="带清除按钮的input输入框"
        description="带清除按钮的input输入框"
        codeContent={`
import Input from '../../../src/Input';

ReactDOM.render(
  <>
  <div>
    <Input style={{ width: 270 }} allowClear placeholder="Please Enter something" />
  </div>
  </>,
  CONTAINER
);`}
      >
        <div className="demo">
          <div>
            <Input style={{ width: 270 }} allowClear placeholder="Please Enter something" />
          </div>
        </div>
      </ExampleItem>

      <ExampleItem
        title="文本域"
        description="可以用于多行输入。"
        codeContent={`
import Input from '../../../src/Input';

const Textarea = Input.Textarea;

ReactDOM.render(
  <>
    <Textarea></Textarea>
  </>,
  CONTAINER
);`}
      >
        <div className="demo">
          <Textarea></Textarea>
        </div>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">input</div>
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
              <td>文本内容</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>修改文字回调方法</td>
              <td>{`(value: string, e: React.FormEvent<HTMLInputElement>) => void`}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>文本框第定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>未输入文字时组件默认提示文字</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>addBefore</td>
              <td>输入框前添加元素</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>addAfter</td>
              <td>输入框后添加元素</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>beforeFix</td>
              <td>添加前缀图标</td>
              <td>ReactNode</td>
              <td>null</td>
            </tr>
            <tr>
              <td>afterFix</td>
              <td>添加后缀图标</td>
              <td>ReactNode</td>
              <td>null</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>文本框是否不可用</td>
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
              <td>文本框是否只读</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="titles">
        <div className="basetitle"></div>
        <div className="desc">Textarea</div>
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
              <td>文本内容</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>defaultValue</td>
              <td>文本默认值</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>width</td>
              <td>文本框宽度</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>height</td>
              <td>文本框高度</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>lineHeight</td>
              <td>文本框行高</td>
              <td>number</td>
              <td>20</td>
            </tr>
            <tr>
              <td>allowClear</td>
              <td>清空文本域按钮是否展示</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>maxLength</td>
              <td>最大输入长度</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>autoSize</td>
              <td>根据输入内容自适应高度</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>文本框输入提示</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>文本框是否禁用</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>文本框是否只读</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>修改文字回调方法</td>
              <td>{`(value: string, e: React.FormEvent<HTMLInputElement>) => void`}</td>
              <td>-</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputSamples;
