import React, { useState } from 'react';
import './index.less';
import _cloneDeep from 'lodash/cloneDeep';
import ExampleItem from '../_exampleItem';
import {Tree,Input} from 'adesign-react'

const InputSamples = () => {
  const dataList = [
    { id: '0001', parent: '0', title: '用户信息管理' },
    { id: '0002', parent: '0', title: '订单管理' },
    { id: '0003', parent: '0', title: '商品管理' },
    { id: '0004', parent: '0', title: '地址信息管理' },
    { id: '0011', parent: '0001', title: '注册新用户' },
    { id: '0021', parent: '0002', title: '创建订单' },
    { id: '0022', parent: '0002', title: '商城订单管理' },
    { id: '00221', parent: '0022', title: '同步商城订单' },
    { id: '00222', parent: '0022', title: '查询商城订单' },
    { id: '00223', parent: '0022', title: '商城订单详情' },
    { id: '00031', parent: '0003', title: '创建商品分类' },
    { id: '00032', parent: '0003', title: '创建商品信息' },
  ];

  const [newList, setNewList] = useState(dataList);

  const [checkedList, setCheckedList] = useState<string[]>(['0001', '0011']);

  const [filterKey,setFilterKey]=useState('');
  const handleFilter = (key: string) => {
    const sourceData = _cloneDeep(dataList.reduce((a, b) => ({ ...a, [b.id]: b }), {}));
    const newDatas = {};
    Object.entries(sourceData).forEach(([id, data]) => {
      const includeName = `${data.title}`.toLowerCase().indexOf(key.toLowerCase()) !== -1;
      if (includeName === true) {
        newDatas[id] = data;
        let parent = sourceData[data.parent];
        while (parent !== undefined && newDatas[parent.id] !== parent) {
          newDatas[parent.id] = parent;
          parent = sourceData[parent.parent];
        }
      }
    });
    setFilterKey(key);
    setNewList(Object.values(newDatas));
  };

  return (
    <div className="tree-example">
      <div className="titles">
        <div className="basetitle">树 Tree</div>
        <div className="desc">多层次的结构列表。</div>
      </div>
      <ExampleItem
        title="基础用法"
        description="为每个 TreeNode 节点赋予全局唯一的 key（必填项），title 为该节点显示的内容。"
        codeContent={`import Tree from '../../../src/Tree';
const dataList = [
  { id: '0001', parent: '0', title: '用户信息管理' },
  { id: '0002', parent: '0', title: '订单管理' },
  { id: '0003', parent: '0', title: '商品管理' },
  { id: '0004', parent: '0', title: '地址信息管理' },
  { id: '0011', parent: '0001', title: '注册新用户' },
  { id: '0021', parent: '0002', title: '创建订单' },
  { id: '0022', parent: '0002', title: '商城订单管理' },
  { id: '00221', parent: '0022', title: '同步商城订单' },
  { id: '00222', parent: '0022', title: '查询商城订单' },
  { id: '00223', parent: '0022', title: '商城订单详情' },
  { id: '00031', parent: '0003', title: '创建商品分类' },
  { id: '00032', parent: '0003', title: '创建商品信息' },
];

ReactDOM.render(
  <div>
    <Tree
      showLine
      showIcon={false}
      fieldNames={{
        key: 'id',
        title: 'title',
        parent: 'parent',
      }}
      dataList={dataList}
    />
  </div>,
CONTAINER)`}
      >
        <div>
          <Tree
            showLine
            showIcon={false}
            fieldNames={{
              key: 'id',
              title: 'title',
              parent: 'parent',
            }}
            dataList={dataList}
          />
        </div>
      </ExampleItem>

      <ExampleItem
        title="带复选框"
        description=""
        codeContent={`import React, { useState } from 'react';
import Tree from '../../../src/Tree';

const [checkedList, setCheckedList] = useState<string[]>(['0001', '0011']);

ReactDOM.render(
  <div>
    <Tree
      style={{ width: '200px', display: 'inline-block' }}
      showLine
      checkedKeys={checkedList}
      onCheck={setCheckedList}
      enableCheck
      showIcon={false}
      fieldNames={{
        key: 'id',
        title: 'title',
        parent: 'parent',
      }}
      dataList={dataList}
    />
  </div>,
CONTAINER)`}
      >
        <div className="checkedList">当前选中项:{JSON.stringify(checkedList)}</div>
        <Tree
          style={{ width: '200px', display: 'inline-block' }}
          showLine
          checkedKeys={checkedList}
          onCheck={setCheckedList}
          enableCheck
          showIcon={false}
          fieldNames={{
            key: 'id',
            title: 'title',
            parent: 'parent',
          }}
          dataList={dataList}
        />
      </ExampleItem>

      <ExampleItem
        title="搜索树"
        description=""
        codeContent={`import React, { useState } from 'react';
import Tree from '../../../src/Tree';
import Input from '../../../src/Input';

const dataList = [
  { id: '0001', parent: '0', title: '用户信息管理' },
  { id: '0002', parent: '0', title: '订单管理' },
  { id: '0003', parent: '0', title: '商品管理' },
  { id: '0004', parent: '0', title: '地址信息管理' },
  { id: '0011', parent: '0001', title: '注册新用户' },
  { id: '0021', parent: '0002', title: '创建订单' },
  { id: '0022', parent: '0002', title: '商城订单管理' },
  { id: '00221', parent: '0022', title: '同步商城订单' },
  { id: '00222', parent: '0022', title: '查询商城订单' },
  { id: '00223', parent: '0022', title: '商城订单详情' },
  { id: '00031', parent: '0003', title: '创建商品分类' },
  { id: '00032', parent: '0003', title: '创建商品信息' },
];

const [newList, setNewList] = useState(dataList);

const handleFilter = (key: string) => {
  const sourceData = _cloneDeep(dataList.reduce((a, b) => ({ ...a, [b.id]: b }), {}));
  const newDatas = {};
  Object.entries(sourceData).forEach(([id, data]) => {
    const includeName = data.title.toLowerCase().indexOf(key.toLowerCase()) !== -1;
    if (includeName === true) {
      newDatas[id] = data;
      let parent = sourceData[data.parent];
      while (parent !== undefined && newDatas[parent.id] !== parent) {
        newDatas[parent.id] = parent;
        parent = sourceData[parent.parent];
      }
    }
  });
  setNewList(Object.values(newDatas));
};

ReactDOM.render(
  <div>
    <Input onChange={handleFilter} />
    <Tree
      showLine
      showIcon={false}
      fieldNames={{
        key: 'id',
        title: 'title',
        parent: 'parent',
      }}
      dataList={newList}
    />
  </div>,
CONTAINER)`}
      >
        <div style={{ width: '200px', display: 'inline-block' }}>
          <Input value={filterKey} onChange={handleFilter} />
          <Tree
            showLine
            showIcon={false}
            fieldNames={{
              key: 'id',
              title: 'title',
              parent: 'parent',
            }}
            dataList={newList}
          />
        </div>
      </ExampleItem>

      <div className="titles">
        <div className="basetitle">API说明</div>
        <div className="desc" />
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
              <td>dataList</td>
              <td>数据源列表</td>
              <td>TreeDataType []</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showLine</td>
              <td>展示层级竖线</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>draggable</td>
              <td>是否可以拖拽</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>enableCheck</td>
              <td>树节点是否带复选框</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>checkboxReadOnly</td>
              <td>复选框只读 该属性仅在enableCheck为true时生效</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isExpandAllKeys</td>
              <td>是否展开全部节点</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultExpandKeys</td>
              <td>默认展开指定节点</td>
              <td>string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onExpandKeysChange</td>
              <td>节点展开触发的回调方法</td>
              <td>onExpandKeysChange?: (_keyArr: string[]) =&gt; void; </td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultCheckedKeys</td>
              <td>默认选中节点， 该属性仅在enableCheck为true时生效</td>
              <td>strin [] </td>
              <td>-</td>
            </tr>
            <tr>
              <td>checkedKeys</td>
              <td>默认选中节点， 该属性仅在enableCheck为true时生效</td>
              <td>strin [] </td>
              <td>-</td>
            </tr>
            <tr>
              <td>onCheck</td>
              <td>选中复选框回调事件</td>
              <td>() => void </td>
              <td>-</td>
            </tr>
            <tr>
              <td>render</td>
              <td>自定义树节点</td>
              <td>() => ReactNode </td>
              <td>-</td>
            </tr>
            <tr>
              <td>showIcon</td>
              <td>是否显示icon</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onNodeClick</td>
              <td>点击节点回调方法</td>
              <td>() => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onNodeDragEnd</td>
              <td>节点拖拽事件结束回调方法</td>
              <td>() => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onMultiSelect</td>
              <td>多选节点回调方法</td>
              <td>() => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onCheckAll</td>
              <td>全选全部节回调方法，该属性仅在enableCheck为true时生效</td>
              <td>() => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onRightClick</td>
              <td>节点右侧内容点击回调方法</td>
              <td>() => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>selectedKeys</td>
              <td>当前选中节点</td>
              <td>string[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onOutSideClick</td>
              <td>tree外部点击事件</td>
              <td>() => void</td>
              <td>-</td>
            </tr>
            <tr>
              <td>enableVirtualList</td>
              <td>是否虚拟列表显示</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>nodeSort</td>
              <td>节点排序条件</td>
              <td>any</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputSamples;
