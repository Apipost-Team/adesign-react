import React from 'react';

export interface CardProps {
  extra?: React.ReactNode; // 右上角样式
  bordered?: boolean; // 是否有边框
  style?: React.CSSProperties;
  className?: string | string[];
  children?:React.ReactNode,
  onClose?:()=>void
}
