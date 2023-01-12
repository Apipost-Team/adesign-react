import React, { ReactNode } from "react";

export enum CheckStatus {
  UNCHECK = "uncheck",
  CHECKED = "checked",
  HALFCHECK = "halfcheck",
}

// 拖拽悬停位置
export enum DragHover {
  TOP = "top",
  INSIDE = "inside",
  BOTTOM = "bottom",
}

export interface TreeProps {
  style?: React.CSSProperties;
  className?: string;

  /**
   * @zh 数据源列表
   */
  dataList?: any[];

  /**
   * @zh 展示层级竖线
   */
  showLine?: boolean;

  /**
   * @zh 是否可以拖拽
   */
  draggable?: boolean;

  /**
   * @zh 树节点是否带复选框
   * @defaultValue false
   */
  enableCheck?: boolean;

  /**
   * @zh 复选框只读 该属性仅在enableCheck为true时生效
   */
  checkboxReadOnly?: boolean;

  /**
   * @zh 是否展开全部节点
   */
  isExpandAllKeys?: boolean;

  /**
   * @zh 默认展开指定节点
   */
  defaultExpandKeys?: string[];
  /**
   * @zh 节点展开触发的回调方法
   */
  onExpandKeysChange?: (_keyArr: string[]) => void;

  /**
   * @zh 默认选中节点， 该属性仅在enableCheck为true时生效
   */
  defaultCheckedKeys?: [];

  /**
   * @zh 当前选中节点， 该属性仅在enableCheck为true时生效
   */
  checkedKeys?: [];

  /**
   * @zh 指定渲染节点 dataList 中对应的字段
   */
  fieldNames?: {
    key?: string;
    title?: string;
    parent?: string;
    children?: string;
  };

  /**
   * @zh 选中复选框回调事件
   */
  onCheck?: (keys:any[]) => void;

  /**
   * @zh 自定义树节点
   */
  render?:(nodeItem: any, props: any)=> ReactNode;

  /**
   * @zh 是否显示icon
   */
  showIcon?: boolean;

  /**
   * @zh 点击节点回调方法
   */
  onNodeClick?: (params:any) => void;

  /**
   * @zh 多选节点回调方法
   */
  onMultiSelect?: () => void;

  /**
   * @zh 全选全部节回调方法，该属性仅在enableCheck为true时生效
   */
  onCheckAll?: (status:boolean) => void;

  /**
   * @zh 节点右侧内容点击回调方法
   */
  onRightClick?: (e:React.MouseEvent,nodeData?:any) => void;

  /**
   * @zh 当前选中节点
   */
  selectedKeys?: string[];

  /**
   * @zh tree外部点击事件
   */
  onOutSideClick?: () => void;

  /**
   * @zh 是否虚拟列表显示
   */
  enableVirtualList?: boolean;

  /**
   * @zh 节点排序
   */
  nodeSort?: any;

  checkLeafNode?: (nodeItem: any) => boolean;

  rootFilter?: (pre: any, after: any) => any[];
}

export interface treeContextProps {
  [key: string]: any;
}

export interface TreeNodeProps extends React.ReactElement {
  nodeKey: string;
  data: any;
  title: string;
  disabled: boolean;
  perfixCls: string;
  style: React.CSSProperties;
}
