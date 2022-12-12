import React from 'react';

export interface CollapseProps {
  style?: React.CSSProperties;
  className?: string | string[];
  activeKey?: string | string[];
  defaultActiveKey?: string | string[];
  onChange?: (key: string | string[] | null) => void;
}

export interface CollapseItemProps {
  name: string; // 对应 activeKey，当前面板组件的的唯一标识
  headerStyle?: React.CSSProperties;
  headerClassName?: string | string[];
  header?: React.ReactNode;
}

export interface CollapseContextProps {
  activeKeys: string | string[] | null;
  handleUpdateKeys: (key: string | string[] | null) => void;
}
