import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import omit from 'lodash/omit';
import { isArray, isBoolean, isUndefined } from 'lodash';
import { arrayToTreeObject, flattenTreeData } from './utils';
import NodeList from './NodeList';
import TreeContext from './TreeContext';
import './style/index.less';
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
    // isExpandAllKeys = true,
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
    onNodeClick = (params: any) => undefined,
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
    checkLeafNode, // 检查当前节点是否叶子结点
    afterNodeRender,
    rowHeight,
  } = props;
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
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
    if (Array.isArray(defaultExpandKeys)) {
      setExpandedKeys(defaultExpandKeys);
    }
  }, [defaultExpandKeys]);

  // 批量展开/折叠
  const prepareExpandKeys = (expand: boolean, datalist?: any[]) => {
    const expandKeys: any = {};
    if (datalist === undefined) {
      return expandKeys;
    }
    if (expand === true) {
      const rootNode: any = {};
      datalist.forEach((item) => {
        rootNode[item[fieldNames.key || '']] = {};
      });
      datalist.forEach((item) => {
        const parent = rootNode[item[fieldNames.parent || '']];
        if (parent !== undefined) {
          parent.notLeaf = true;
        }
      });
      Object.entries(rootNode).forEach(([key, item]: [string, any]) => {
        if (item.notLeaf === true) {
          expandKeys[key] = true;
        }
      });
    }
    return expandKeys;
  };

  // 树形菜单对象
  const cachedTree = useMemo(() => {
    return arrayToTreeObject(isArray(dataList) ? dataList : [], fieldNames, rootFilter);
  }, [dataList, fieldNames, rootFilter]);

  // 被展开菜单节点
  const flattenNodes = useMemo(() => {
    return Array.isArray(expandedKeys) === false
      ? []
      : flattenTreeData(cachedTree, expandedKeys, fieldNames, nodeSort, checkLeafNode);
  }, [cachedTree, expandedKeys, fieldNames, nodeSort]);

  /*
     展开或闭合节点
    nodeKeys: sring 节点展开闭合/Array 要展开的节点
    scrollNodeKey 被滚动到的节点key
  */
  const handleExpandItem = (nodeKeys: string | string[], scrollNodeKey: string) => {
    let expandKeyData: { [key: string]: any } = {};
    if (isBoolean(nodeKeys)) {
      expandKeyData = prepareExpandKeys(nodeKeys, dataList);
    } else {
      const newExpandKeyData: any = {};
      expandedKeys.forEach((item) => {
        newExpandKeyData[item] = true;
      });
      expandKeyData = newExpandKeyData;
    }
    if (Array.isArray(nodeKeys)) {
      nodeKeys?.forEach((nodeKey: string) => {
        expandKeyData[nodeKey] = true;
      });
    } else if (!isBoolean(nodeKeys) && isUndefined(expandKeyData[nodeKeys])) {
      expandKeyData[nodeKeys] = true;
    } else {
      expandKeyData = omit(expandKeyData, nodeKeys);
    }
    const expandKeyArr: string[] = Object.keys(expandKeyData);
    setExpandedKeys(expandKeyArr);
    onExpandKeysChange(expandKeyArr);

    const nodes = flattenTreeData(cachedTree, expandKeyArr, fieldNames, nodeSort, checkLeafNode);

    // 滚动节点到指定位置
    const scrollIndex = nodes.findIndex((item) => item.key === scrollNodeKey);
    if (!isUndefined(scrollNodeKey) && scrollIndex !== -1) {
      setScrollToIndex(scrollIndex);
    }
  };

  const handleRightClick = (e: React.MouseEvent, nodeData?: any) => {
    const data = flattenNodes.filter((node) => selectedKeys.includes(node.key));

    if (Array.isArray(data) && data.length > 1) {
      const multiData = data.map((d) => d?.data);
      onRightClick(e, multiData);
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
      className={cn(perfixCls, className)}
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
          afterNodeRender,
        }}
      >
        <NodeList
          rowHeight={rowHeight}
          dataList={dataList}
          perfixCls={perfixCls}
          data={flattenNodes}
          ref={ref}
        />
      </Provider>
    </div>
  );
};

export default React.forwardRef<HTMLDivElement, TreeProps>(Tree);
