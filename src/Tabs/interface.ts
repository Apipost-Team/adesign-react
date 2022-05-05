import React from 'react';

export interface TabPanProps {
  id: string;
  style?: React.CSSProperties;
  className?: string | string[];
  children?: React.ReactNode;
  title: string | React.ReactNode;
  removable?: boolean;
  disabled?: boolean;
}

export interface RenderProps {
  headerTabItems: React.ReactNode;
  addButton: React.ReactNode;
  scrollButtons: React.ReactNode;
}

export interface TabsProps {
  style?: React.CSSProperties;
  className?: string | string[];
  defaultActiveId?: string;
  activeId?: string;
  draggable?: boolean;
  showAdd?: boolean;
  showScrollBtns?: boolean;
  children?: any;
  /**
   * @zh 标签页类型  默认样式 default ｜ 选项卡样式 card
   * @defaultValue default
   */
  type?: string;
  onChange?: (activeId: string, tabpan: TabPanProps) => void;
  onAddTab?: (id: string) => void;
  onRemoveTab?: (id: string, tabpan: TabPanProps) => void;
  renderHeader?: (tabsList: any[], tabs: RenderProps) => React.ReactNode;
}

export interface TabsContextProps {
  activeId: string;
  handleSwitchTab: (activeId: string, tabpan: TabPanProps) => void;
  handleRemoveTab: (tabId: string, tabpan: TabPanProps) => void;
}
