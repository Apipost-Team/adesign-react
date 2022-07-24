import React from 'react';

export type Layout = {
  nodeProps?: any;
  width?: number | undefined;
  height?: number | undefined;
  flex?: number | undefined;
};

export type Layouts = { [key: string]: Layout };

export type PanelOffset = {
  width: number;
  height: number;
};

export interface ScalePanelProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string | string[];
  direction?: 'horizontal' | 'vertical';
  layouts?: Layouts;
  defaultLayouts: Layouts;
  onLayoutsChange?: (layouts: Layouts, panelOffset: PanelOffset) => void;

  // 拖动时是否实时渲染
  realTimeRender?: boolean;

  // 是否允许拖动到外面
  enableOverflow?: boolean;
}

export interface ScaleItemProps {
  index?: number;
  flex?: number;
  barLocation?: 'start' | 'end'; // 分隔条位置 start/end
  children: React.ReactNode;
  layouts?: Layouts;
  onLayoutChange?: (layout: Layout, index: number) => void;
  minWidth?: number; // 最小可调整宽度
  maxWidth?: number; // 最大可调整宽度
  minHeight?: number; // 最小可调整高度
  maxHeight?: number; // 最大可调整高度
  enableScale?: boolean; // 是否可拖拽
  direction?: 'horizontal' | 'vertical';
  className?: React.CSSProperties;
  scaling?: boolean;
  onScaling?: (val: boolean) => void;
  panelOffset?: PanelOffset;
  realTimeRender?: boolean;
  enableOverflow?: boolean;
}

export type ScaleData = {
  enable: boolean;
  startX: number;
  startY: number;
  defaultLayout?: Layout | null;
};
export interface SplitBarProps {
  onScaling: (scaleData: ScaleData | undefined) => void;
  barLocation: 'start' | 'end'; // 拖拽条位置
}
