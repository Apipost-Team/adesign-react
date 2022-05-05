import React, { useState } from 'react';
import Spin from '../../../src/Spin';
import Button from '../../../src/Button';
import './index.less';
import ExampleItem from '../_exampleItem';

const SpinSamples = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="radio-example">
      <div className="titles">
        <div className="basetitle">加载 Spin</div>
        <div className="desc">loading</div>
      </div>

      <ExampleItem
        title="基础加载"
        description="最基础的加载。"
        codeContent={`import Spin from "../../../src/Spin";
ReactDOM.render(
  <div>
    <Spin></Spin>
  </div>,
CONTAINER)`}
      >
        <div>
          <Spin></Spin>
        </div>
      </ExampleItem>

      <ExampleItem
        title="容器中使用spin"
        description="可以给任意元素添加加载状态。"
        codeContent={`import Spin from "../../../src/Spin";
const [loading, setLoading] = useState(false);

ReactDOM.render(
  <div>
    <Button
      onClick={() => {
        setLoading(!loading);
      }}
    >
      Loading: {loading}
    </Button>
  </div>
  <Spin loading={loading}>
    <div>
      毫无疑问，Apipost
      是一款很优秀的产品。尤其是解决了项目开发过程中，不同工具数据缺乏统一规范，衍生出来的团队效率低下的问题。我和我的团队都在使用
      ，Apipost是国产软件的骄傲！
    </div>
  </Spin>,
CONTAINER)`}
      >
        <div>
          <div>
            <Button
              onClick={() => {
                setLoading(!loading);
              }}
            >
              Loading: {loading ? 'true' : 'false'}
            </Button>
          </div>
          <Spin loading={loading}>
            <div style={{ margin: '8px 0 0 0' }}>
              毫无疑问，Apipost
              是一款很优秀的产品。尤其是解决了项目开发过程中，不同工具数据缺乏统一规范，衍生出来的团队效率低下的问题。我和我的团队都在使用
              ，Apipost是国产软件的骄傲！
            </div>
          </Spin>
        </div>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">Spin</div>
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
              <td>children</td>
              <td>spin内元素</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否为加载状态</td>
              <td>React.boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>加载动画的尺寸</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>element</td>
              <td>自定义加载元素</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tip</td>
              <td>自定义文字</td>
              <td>string | ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>delay</td>
              <td>延迟显示加载的时间 (ms)</td>
              <td>number</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpinSamples;
