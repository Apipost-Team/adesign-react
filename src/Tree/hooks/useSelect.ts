import React, { useEffect, useState } from 'react';
import _cloneDeep from 'lodash/cloneDeep';

const useSelect = (props) => {
  const { onNodeClick, onMultiSelect, selectedKeys = [], fieldNames } = props;

  // 单击节点
  const handleNodeClick = (data) => {
    // setSelectedKeys([data.target_id]);
    onNodeClick(data);
  };

  // 节点多选
  const handleMultiSelect = (data) => {
    const nodeKey = data[fieldNames.key];
    const selectedKeyList = Array.isArray(selectedKeys) ? _cloneDeep(selectedKeys) : [];
    if (!selectedKeyList.includes(nodeKey)) {
      selectedKeyList.push(nodeKey);
    }
    onMultiSelect(selectedKeyList);
  };

  return {
    selectedKeys,
    handleNodeClick,
    handleMultiSelect,
  };
};

export default useSelect;
