import React from 'react';
import {Button, Collapse as CollapseCom } from 'adesign-react';
import './index.less';
import ExampleItem from '../_exampleItem';

const {Collapse,CollapseItem}=CollapseCom

const CollapseSamples = () => {
  return (
    <div className="collapse-example">
      <div className="titles">
        <div className="basetitle">折叠面板 Collapse</div>
        <div className="desc">可以折叠 / 展开的内容区域。</div>
      </div>

      <ExampleItem
        title="基本用法"
        description="用于将复杂的内容区域分组和隐藏，可折叠或展开，默认可以展开多个面板，也可以只展开某几个面板。"
        codeContent={`import { Collapse, CollapseItem } from '../../../src/Collapse';
import Button from '../../../src/Button';

ReactDOM.render(
  <div>
  <Collapse defaultActiveKey="a1" style={{ width: '300px' }}>
    <CollapseItem name="a1" header="这是一个折叠标题">
      这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
    </CollapseItem>
    <CollapseItem name="a2" header="设置默认展开项">
      这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
    </CollapseItem>
    <CollapseItem name="a3" header="自定义折叠面板内容">
      <Button />
    </CollapseItem>
  </Collapse>
  </div>,
CONTAINER)`}
      >
        <Collapse defaultActiveKey={['a2']} style={{ width: '300px' }}>
          <CollapseItem name="a1" header="这是一个折叠标题">
            这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
          </CollapseItem>
          <CollapseItem name="a2" header="设置默认展开项">
            这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
          </CollapseItem>
          <CollapseItem name="a3" header="自定义折叠面板内容">
            <Button />
          </CollapseItem>
        </Collapse>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc" />
      </div>
      <div className="doc-desc">
        <div className="second-title">CollapseProps</div>
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
              <td>折叠面板自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>折叠面板class名称</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>activeKey</td>
              <td>展开项name名称</td>
              <td> string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultActiveKey</td>
              <td>默认展开项name名称</td>
              <td> string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>展开项目变化时回调事件</td>
              <td>{`(key:string|string[])=>void`}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <div className="second-title">CollapseItemProps</div>
        <table>
          <tbody>
            <tr>
              <th>参数名</th>
              <th>描述</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>name</td>
              <td>折叠面板item自定义key</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>headerStyle</td>
              <td>折叠面板header自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>headerClassName</td>
              <td>折叠面板header样式class名称</td>
              <td>string | string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>header</td>
              <td>展开项header内容</td>
              <td>React.ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollapseSamples;
