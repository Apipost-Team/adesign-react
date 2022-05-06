import React, { ReactNode } from 'react';
import { ProgressProps } from './interface';

function CircleProgress(
  props: ProgressProps & {
    pathStrokeColor?: string;
    pathStrokeWidth?: number;
    prefixCls?: string;
    color?: string;
  }
) {
  const { prefixCls, type, color, percent, showText } = props;

  const cls = `${prefixCls}-${type}`;

  const width = props.width || 64;
  const strokeWidth = props.strokeWidth || 4;
  const centerPos = width / 2;
  const radius = (width - strokeWidth) / 2; // 半径
  const circumference = Math.PI * 2 * radius; // 周长

  return (
    <div className={`${cls}-wrapper`} style={{ width, height: width }}>
      <svg viewBox={`0 0 ${width} ${width}`} className={`${cls}-svg`}>
        <circle
          className={`${cls}-mask`}
          fill="none"
          cx={centerPos}
          cy={centerPos}
          r={radius}
          strokeWidth={props.pathStrokeWidth || Math.max(2, strokeWidth - 2)}
          style={{
            stroke: props.pathStrokeColor,
          }}
        ></circle>
        <circle
          className={`${cls}-path`}
          fill="none"
          cx={centerPos}
          cy={centerPos}
          r={radius}
          strokeWidth={strokeWidth}
          style={{
            stroke: color,
            strokeDasharray: circumference,
            strokeDashoffset: (percent > 100 ? 100 : 1 - percent / 100) * circumference,
          }}
        ></circle>
      </svg>
      {showText && <div className={`${cls}-wrapper-percent`}>{percent}%</div>}
    </div>
  );
}

export default CircleProgress;
