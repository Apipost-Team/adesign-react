import React, { useState } from 'react';

const useDrag = (props) => {
  const { flattenNodes, fieldNames, onNodeDragEnd, cachedTree } = props;

  const getTreeItem = (treeItem, keys) => {
    const [key, ...restKeys] = keys;
    const item = treeItem.find((d) => d[fieldNames.key] === key);
    if (item.children === undefined || restKeys.length === 0) {
      return [treeItem, item];
    }
    return getTreeItem(item.children, restKeys);
  };

  const getParentKeys = (nodeItem) => {
    const result = [];
    const digAll = (node) => {
      if (node.parent !== null) {
        digAll(node.parent);
      }
      result.push(node.key);
    };
    digAll(nodeItem);
    return result;
  };

  const handleNodeDragEnd = (sourceIndex, targetIndex, mode) => {
    const sourceNode = flattenNodes[sourceIndex];
    const targetNode = flattenNodes[targetIndex];
    const clonedTree = _.cloneDeep(cachedTree);
    const sourceKeys = getParentKeys(sourceNode);
    const targetKeys = getParentKeys(targetNode);

    // 禁止父节点拖动到子节点
    if (targetKeys.includes(sourceNode.key)) {
      return;
    }
    // 非目录禁止拖动到里面
    if (mode === 'inside' && targetNode?.target_type !== 'folder') {
      return;
    }

    const [sourceList, sourceData] = getTreeItem(clonedTree, sourceKeys);
    let [targetList, targetData] = getTreeItem(clonedTree, targetKeys);

    // 删除源节点
    sourceList.forEach((item, index) => {
      if (item[fieldNames.key] === sourceData[fieldNames.key]) {
        sourceList.splice(index, 1);
      }
    });

    // 将被删除的节点插入到目标节点
    const sortIndex = targetList.reduce(
      (a, b, index) => (b[fieldNames.key] === targetData[fieldNames.key] ? index : a),
      -1
    );
    if (mode === 'top') {
      targetList.splice(sortIndex, 0, sourceData);
    } else if (mode === 'bottom') {
      targetList.splice(sortIndex + 1, 0, sourceData);
    } else if (mode === 'inside') {
      const tlist = targetData.children || [];
      const targetKey = targetData[fieldNames.key];
      const tData = _.cloneDeep(sourceData);
      tData.parent_id = targetKey;
      tlist.splice(0, 0, tData);
      targetList = tlist;
      targetData = tData;
    }
    onNodeDragEnd(sourceData, targetData, targetList);
  };

  return {
    handleNodeDragEnd,
  };
};

export default useDrag;
