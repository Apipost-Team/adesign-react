import React from 'react';

export interface TabPanProps {
  id: string;
  style?: React.CSSProperties;
  className?: string | string[];
  children?: React.ReactNode;
  title: string | React.ReactNode;
  removable?: boolean;
  disabled?: boolean;
  itemWidth?: number;
  props?: any;
}

export interface RenderProps {
  tabsList?: any;
  headerTabItems?: React.ReactNode;
  addButton?: React.ReactNode;
  scrollButtons?: React.ReactNode;
  handleMouseWheel?: (ev: MouseEvent) => void;
  activedContent?: React.ReactNode;
  renderScrollItems?: (elements: React.ReactNode) => void;
  activeId?: string;
}

export interface TabsProps<T> {
  style?: React.CSSProperties;
  className?: string | string[];
  defaultActiveId?: string;
  activeId?: string;
  activeIndex?: number;
  draggable?: boolean;
  showAdd?: boolean;
  showScrollBtns?: boolean;
  children?: any;
  elementCache?: boolean;
  /**
   * @zh 标签页类型  默认样式 default ｜ 选项卡样式 card
   * @defaultValue default
   */
  type?: string;
  onChange?: (activeId: string, tabpan: TabPanProps) => void;
  onAddTab?: (e: React.MouseEvent) => void;
  onRemoveTab?: (id: string, tabpan: TabPanProps) => void;

  // tab头自定义渲染
  headerRender?: (tabParams: RenderProps) => React.ReactNode;

  // tab内容自定义渲染
  contentRender?: (tabParams: RenderProps) => React.ReactNode;
  itemWidth?: number;

  // tabs header是否开启滚轮滚动
  headerAutoScroll?: boolean;

  // tab item为空时自定义渲染内容
  emptyContent?: React.ReactNode;
}

export interface TabsContextProps {
  activeId: string;
  handleSwitchTab: (activeId: string, tabpan: TabPanProps) => void;
  handleRemoveTab: (tabId: string, tabpan: TabPanProps) => void;
  itemWidth?: number;
}
