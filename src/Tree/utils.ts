import _omit from 'lodash/omit';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import { isEmpty, isUndefined } from 'lodash';

export const fillFieldNames = (fieldNames) => {
  const { title = 'title', _title, key = 'key', children = 'children' } = fieldNames || {};
  return {
    title,
    _title: _title || [title],
    key,
    children,
  };
};

export const getPosition = (level, index) => `${level}-${index}`;

export const getKey = (key, pos) => {
  if (key !== null && key !== undefined) {
    return key;
  }
  return pos;
};

const getNodeLevel = (node) => (node === null ? 0 : getNodeLevel(node.parent) + 1);

export const flattenTreeData = (
  treeNodeList,
  expandedKeys = [],
  fieldNames,
  nodeSort,
  checkLeafNode
) => {
  const {
    _title: fieldTitles,
    key: fieldKey,
    children: fieldChildren,
  } = fillFieldNames(fieldNames);

  if (nodeSort !== undefined) {
    treeNodeList.sort(nodeSort);
  }

  const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys); // 已展开的节点
  const flattenList = [];

  const dig = (list, parent = null) =>
    list.map((treeNode, index) => {
      // 遍历子节点列表
      const pos = getPosition(parent ? parent.pos : '0', index);
      const mergedKey = getKey(treeNode[fieldKey], pos);
      let mergedTitle;
      for (let i = 0; i < fieldTitles.length; i += 1) {
        const fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== undefined) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }

      const flattenNode = {
        ..._omit(treeNode, [...fieldTitles, fieldKey, fieldChildren]),
        title: mergedTitle,
        key: mergedKey,
        parent,
        pos,
        children: [],
        data: treeNode,
        isEnd: [...(parent ? parent.isEnd : []), index === list.length - 1],
        isLeaf: isFunction(checkLeafNode)
          ? checkLeafNode(treeNode)
          : isUndefined(treeNode?.children) || isEmpty(treeNode?.children),
        level: getNodeLevel(parent),
        show: [...(parent ? parent.show : []), true],
      };

      if (!flattenNode.isLeaf) {
        flattenNode.isExpand = expandedKeys === true || expandedKeys.includes(mergedKey);
      }
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(treeNode[fieldNames.key])) {
        const childList = treeNode[fieldChildren] || [];
        if (nodeSort !== undefined) {
          childList.sort(nodeSort);
        }
        flattenNode.children = dig(childList, flattenNode);
      }
      if (nodeSort !== undefined) {
        flattenNode.children.sort(nodeSort);
      }

      return flattenNode;
    });

  dig(treeNodeList);
  return flattenList;
};

// Array转树形结构对象
export const arrayToTreeObject = (
  data?: any[],
  param = { key: 'target_id', parent: 'parent_id' },
  filter
) => {
  const treeData: any = {};
  const rootData = [];
  if (!isArray(data)) {
    return;
  }
  // step1.把数字转换成对象
  data.forEach((item) => {
    treeData[item[param.key]] = {
      ...item,
      key: item[param.key],
      parent: item[param.parent],
    };
  });

  for (let i = 0; i < data.length; i++) {
    const itemKey = data[i][param.key];
    const item = treeData[itemKey];

    const parent = treeData[item.parent];
    if (parent === undefined) {
      // parent未定义说明被放在了根节点下
      if (isFunction(filter)) {
        filter(item) && rootData.push(item);
      } else {
        rootData.push(item);
      }
    } else {
      if (parent.children === undefined) {
        parent.children = [];
      }
      parent.children.push(item);
    }
  }
  return rootData;
};

// 打开树形目录
export const flatTreeItems = (nodes = [], sortFn) => {
  const nodeList = [];
  if (sortFn !== undefined) {
    nodes.sort(sortFn);
  }
  const dig = (childList = [], level) => {
    childList.forEach((item) => {
      nodeList.push({ ...item, level });

      const childItemList = item.children;
      if (sortFn !== undefined && childItemList !== undefined) {
        childItemList.sort(sortFn);
      }
      dig(childItemList, level + 1);
    });
  };
  dig(nodes, 1);
  return nodeList;
};
