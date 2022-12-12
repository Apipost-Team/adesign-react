import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import _cloneDeep from 'lodash/cloneDeep';
import { Tabs as TabsComponent } from  'adesign-react'
import './index.less';
import ExampleItem from '../_exampleItem';

const {Tabs, TabPan}=TabsComponent

const InputSamples = () => {
  const defaultList = [
    { id: '1', title: '新建标题1', content: '新建内容1' },
    { id: '2', title: '新建标题2', content: '新建内容2' },
    { id: '3', title: '新建标题3', content: '新建内容3' },
  ];


  const [activeId, setActiveId] = useState<string>('1');
  const [tabs, setTabs] = useState(_cloneDeep(defaultList));

  const handleAddTab = () => {
    const title = `新建标题·${tabs.length + 1}`;
    const content = `新建内容·${tabs.length + 1}`;

    const tabId= uuidv4();
    setActiveId(tabId);
    setTabs([
      ...tabs,
      {
        id: tabId,
        title,
        content,
      },
    ]);

  };

  const handleRemoveTab = (id: string) => {


    const newList = tabs.filter((d) => d.id !== id);
    let newActiveId = "";
    const tabIndex = tabs.reduce(
      (a: number, b: any, index: number) => (b.id === id ? index : a),
      -1
    );
    if (tabIndex === -1) {
      return;
    }
    if (id === activeId) {
      if (tabIndex < tabs.length - 1) {
        // 如果tabindex不是最后一个，则把下一个设为选中态
        newActiveId = tabs.find((d, index) => index === tabIndex + 1)?.id || "";
      } else {
        // 前一个设为选中态
        newActiveId = tabs.find((d, index) => index === tabIndex - 1)?.id || "";
      }
      setActiveId(newActiveId);
    }
    setTabs([...newList]);

  };

  const renderHeaderItems = (
    tabList: any,
    { headerTabItems, addButton, scrollButtons }
  ) => {
    return (
      <>
        <span className="diyperfix">自定义内容1</span>
        <span>{headerTabItems}</span>
        <span className="diyperfix">自定义内容2</span>
      </>
    );
  };

  return (
    <div className="switch-example">
      <div className="titles">
        <div className="basetitle">标签页 Tabs</div>
        <div className="desc">选项卡切换组件。</div>
      </div>

      <ExampleItem
        title="基础用法"
        description="最简单的使用。"
        codeContent={`
import { Tabs, TabPan } from '../../../src/Tabs';

const defaultList = [
  { id: '1', title: '新建标题1', content: '新建内容1' },
  { id: '2', title: '新建标题2', content: '新建内容2' },
  { id: '3', title: '新建标题3', content: '新建内容3' },
];

<Tabs>
  {defaultList.map((d) => (
    <TabPan key={d.id} id={d.id} title={d.title}>
      {d.content}
    </TabPan>
  ))}
</Tabs>
`}
      >
        <Tabs defaultActiveId={'1'} >
          {defaultList.map((d) => (
            <TabPan key={d.id} id={d.id} title={d.title}>
              {d.content}
            </TabPan>
          ))}
        </Tabs>
      </ExampleItem>

      <ExampleItem
        title="选项卡样式"
        description="选项卡样式的标签页"
        codeContent={`
import { Tabs, TabPan } from '../../../src/Tabs';

const defaultList = [
  { id: '1', title: '新建标题1', content: '新建内容1' },
  { id: '2', title: '新建标题2', content: '新建内容2' },
  { id: '3', title: '新建标题3', content: '新建内容3' },
];

<Tabs  type="card">
  {defaultList.map((d) => (
    <TabPan key={d.id} id={d.id} title={d.title}>
      {d.content}
    </TabPan>
  ))}
</Tabs>
`}
      >
        <Tabs defaultActiveId={'1'} type="card">
          {defaultList.map((d) => (
            <TabPan key={d.id} id={d.id} title={d.title}>
              {d.content}
            </TabPan>
          ))}
        </Tabs>
      </ExampleItem>

      <ExampleItem
        title="自定义"
        description="可对标签页 Header自定义"
        codeContent={`import { Tabs, TabPan } from '../../../src/Tabs';

const defaultList = [
  { id: '1', title: '新建标题1', content: '新建内容1' },
  { id: '2', title: '新建标题2', content: '新建内容2' },
  { id: '3', title: '新建标题3', content: '新建内容3' },
];
const [tabs, setTabs] = useState(_cloneDeep(defaultList));

const renderHeaderItems = (
  tabList: any,
  { headerTabItems, addButton, scrollButtons }
) => {
  return (
    <>
      <span className="diyperfix">自定义内容1</span>
      <span>{headerTabItems}</span>
      <span className="diyperfix">自定义内容2</span>
    </>
  );
};

<Tabs renderHeader={renderHeaderItems}>
  {defaultList.map((d) => (
    <TabPan key={d.id} id={d.id} title={d.title}>
      {d.content}
    </TabPan>
  ))}
</Tabs>
`}
      >
        <Tabs renderHeader={renderHeaderItems} defaultActiveId={'1'} >
          {defaultList.map((d) => (
            <TabPan key={d.id} id={d.id} title={d.title}>
              {d.content}
            </TabPan>
          ))}
        </Tabs>
      </ExampleItem>

      <ExampleItem
        title="动态增减页签"
        description="动态增减页签,"
        codeContent={`import { Tabs, TabPan } from '../../../src/Tabs';

const defaultList = [
  { id: '1', title: '新建标题1', content: '新建内容1' },
  { id: '2', title: '新建标题2', content: '新建内容2' },
  { id: '3', title: '新建标题3', content: '新建内容3' },
];

const [activeId, setActiveId] = useState<string>('1');
const [tabs, setTabs] = useState(_cloneDeep(defaultList));

const handleAddTab = () => {
  const title = ‘新建标题’;
  const content = ‘新建内容’;

  const tabId= uuidv4();
  if(activeId===''){
    setActiveId(tabId);
  }
  setTabs([
    ...tabs,
    {
      id: tabId,
      title,
      content,
    },
  ]);

};

const handleRemoveTab = (id: string) => {


  const newList = tabs.filter((d) => d.id !== id);
  let newActiveId = "";
  const tabIndex = tabs.reduce(
    (a: number, b: any, index: number) => (b.id === id ? index : a),
    -1
  );
  if (tabIndex === -1) {
    return;
  }
  if (id === activeId) {
    if (tabIndex < tabs.length - 1) {
      // 如果tabindex不是最后一个，则把下一个设为选中态
      newActiveId = tabs.find((d, index) => index === tabIndex + 1)?.id || "";
    } else {
      // 前一个设为选中态
      newActiveId = tabs.find((d, index) => index === tabIndex - 1)?.id || "";
    }
    setActiveId(newActiveId);
  }
  setTabs([...newList]);

};

<Tabs showAdd onAddTab={handleAddTab} onRemoveTab={handleRemoveTab} showScrollBtns onChange={setActiveId} activeId={activeId} >
  {tabs.map((d) => (
    <TabPan key={d.id} id={d.id} title={d.title} removable>
      {d.content}
    </TabPan>
  ))}
</Tabs>
`}
      >
        <Tabs showAdd onAddTab={handleAddTab} onRemoveTab={handleRemoveTab} showScrollBtns onChange={setActiveId} activeId={activeId} >
          {tabs.map((d) => (
            <TabPan key={d.id} id={d.id} title={d.title} removable>
              {d.content}
            </TabPan>
          ))}
        </Tabs>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc">Tabs</div>
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
              <td>tab自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>tab自定义类名</td>
              <td>string ｜ string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>children</td>
              <td>标签页内容</td>
              <td>TabPan</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultActiveId</td>
              <td>默认选中标签</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>activeId</td>
              <td>当前选中标签</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>draggable</td>
              <td>是否可拖拽标签</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showAdd</td>
              <td>是否显示添加按钮</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showScrollBtns</td>
              <td>是否显示滚动按钮</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>elementCache</td>
              <td>是否缓存Dom内容信息</td>
              <td>boolean</td>
              <td>true</td>
            </tr>



            <tr>
              <td>onChange</td>
              <td>切换标签回调方法</td>
              <td>(activeId: string, tabpan: TabPanProps) => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onAddTab</td>
              <td>添加按钮点击回调方法</td>
              <td>(id: string) => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onRemoveTab</td>
              <td>移除按钮点击回调方法</td>
              <td>(id: string, tabpan: TabPanProps) => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>renderHeader</td>
              <td>自定义tab展示内容</td>
              <td>(tabsList: any[], tabs: RenderProps) => React.ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="titles">
        <div className="basetitle"></div>
        <div className="desc">TabPan</div>
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
              <td>tab自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>tab自定义类名</td>
              <td>string ｜ string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>id</td>
              <td>标签页唯一标识</td>
              <td>string | React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>title</td>
              <td>标签页标题内容</td>
              <td>string | React.ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>removable</td>
              <td>是否显示关闭按钮</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用标签页</td>
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
