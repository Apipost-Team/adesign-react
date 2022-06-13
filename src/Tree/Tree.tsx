import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';
import { arrayToTreeObject, flattenTreeData } from './utils';
import NodeList from './NodeList';
import TreeContext from './TreeContext';
import './index.less';
import useCheck from './hooks/useCheck';
import { TreeProps } from './interface';

const { Provider } = TreeContext;

const perfixCls = 'apipost-tree';

const Tree = (props: TreeProps, ref: any) => {
  const {
    dataList, // 数据源 一维数组格式
    showLine = false,
    enableCheck = false,
    checkboxReadOnly = false, // 所有的勾选框是否只读
    isExpandAllKeys = true,
    defaultExpandKeys = undefined, // 默认展开节点
    onExpandKeysChange = () => undefined,
    defaultCheckedKeys, // 默认选中节点
    checkedKeys, // 选中的节点 （受控）
    fieldNames = {
      key: 'key',
      title: 'title',
      parent: 'parent',
      children: 'children',
    },
    onCheck = () => undefined,
    render,
    onNodeClick = () => undefined,
    onRightClick = () => undefined,
    onMultiSelect = () => undefined,
    onCheckAll = () => undefined,
    onOutSideClick = () => undefined,
    selectedKeys = [], // 默认选中节点
    style,
    className, // 数组件class名称
    enableVirtualList = false, // 是否开启虚拟列表
    nodeSort = undefined, // 节点排序
    rootFilter, // 过滤顶级节点
  } = props;
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [flattenNodes, setFlattenNodes] = useState([]);
  const [cachedTree, setCachedTree] = useState({});
  const [scrollToIndex, setScrollToIndex] = useState(0);

  const { mergeCheckedKeys, halfCheckedKeys, handleCheckNode, handleCheckAll } = useCheck({
    onCheck,
    onCheckAll,
    dataList,
    fieldNames,
    checkboxReadOnly,
    defaultCheckedKeys,
    checkedKeys,
  });

  useEffect(() => {
    if (defaultExpandKeys !== undefined && isEqual(defaultExpandKeys, expandedKeys) === false) {
      setExpandedKeys(defaultExpandKeys);
    }
  }, [defaultExpandKeys, dataList]);

  // 批量展开/折叠
  const prepareExpandKeys = (expand, datalist) => {
    const expandKeys = {};
    if (expand === true) {
      const rootNode = {};
      datalist.forEach((item) => {
        rootNode[item[fieldNames.key]] = {};
      });
      datalist.forEach((item) => {
        const parent = rootNode[item[fieldNames.parent]];
        if (parent !== undefined) {
          parent.notLeaf = true;
        }
      });
      Object.entries(rootNode).forEach(([key, item]) => {
        if (item.notLeaf === true) {
          expandKeys[key] = true;
        }
      });
    }
    return expandKeys;
  };

  // 默认展开节点//暂时只支持是否全部展示
  useEffect(() => {
    if (expandedKeys !== null || dataList?.length === 0) {
      // 仅第一次生效
      return;
    }
    const keysObj = prepareExpandKeys(isExpandAllKeys, dataList);
    setExpandedKeys(Object.keys(keysObj));
  }, [isExpandAllKeys, dataList]);

  useEffect(() => {
    if (Array.isArray(expandedKeys) === false) {
      return;
    }
    const treeData = arrayToTreeObject(dataList, fieldNames, rootFilter);
    const node = flattenTreeData(treeData, expandedKeys, fieldNames, nodeSort);
    setCachedTree(treeData);
    setFlattenNodes(node);
  }, [dataList]);

  /*
     展开或闭合节点
    nodeKeys: sring 节点展开闭合/Array 要展开的节点
    callBack 回调
  */
  const handleExpandItem = (nodeKeys, nodeIndex) => {
    let expandKeyData = {};
    if (typeof nodeKeys === 'boolean') {
      expandKeyData = prepareExpandKeys(nodeKeys, dataList);
    } else {
      const newExpandKeyData = {};
      expandedKeys.forEach((item) => {
        newExpandKeyData[item] = true;
      });
      expandKeyData = newExpandKeyData;
    }
    if (Array.isArray(nodeKeys)) {
      nodeKeys.forEach((nodeKey) => {
        expandKeyData[nodeKey] = true;
      });
    } else if (expandKeyData[nodeKeys] === undefined) {
      expandKeyData[nodeKeys] = true;
    } else {
      expandKeyData = omit(expandKeyData, nodeKeys);
    }

    const expandKeyArr = Object.keys(expandKeyData);
    setExpandedKeys(expandKeyArr);
    const nodes = flattenTreeData(cachedTree, expandKeyArr, fieldNames, nodeSort);
    setFlattenNodes(nodes);
    onExpandKeysChange(expandKeyArr);
    setScrollToIndex(nodeIndex);
  };

  const handleRightClick = (e, nodeData) => {
    const data = flattenNodes.filter((node) => selectedKeys.includes(node.key));
    if (data.length > 1) {
      onRightClick(e, data);
    } else {
      onRightClick(e, nodeData);
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <div
      style={style}
      className={cn({
        [perfixCls]: true,
        [className]: className !== undefined,
      })}
      onClick={onOutSideClick}
      onContextMenu={handleRightClick}
    >
      <Provider
        value={{
          fieldNames,
          dataList,
          showLine,
          handleCheckNode,
          expandedKeys,
          handleExpandItem,
          enableCheck,
          checkboxReadOnly,
          checkedKeys: mergeCheckedKeys,
          halfCheckedKeys,
          render,
          onNodeClick,
          onRightClick: handleRightClick,
          selectedKeys,
          onMultiSelect,
          handleCheckAll,
          enableVirtualList,
          scrollToIndex,
          setScrollToIndex,
        }}
      >
        <NodeList dataList={dataList} perfixCls={perfixCls} data={flattenNodes} ref={ref} />
      </Provider>
    </div>
  );
};

export default React.forwardRef<HTMLDivElement, TreeProps>(Tree);
