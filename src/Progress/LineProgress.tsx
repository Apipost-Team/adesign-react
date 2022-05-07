import React, { useCallback } from 'react';

const defaultStrokeWidth: any = {
  small: 3,
  default: 4,
  large: 8,
};

function LineProgress(props) {
  const {
    // textInside,
    type,
    size = 'default',
    prefixCls,
    percent,
    status,
    color,
    animation,
    showText,
    bufferColor,
    formatText,
    trailColor,
  } = props;

  const strokeWidth = props.strokeWidth || defaultStrokeWidth[size];
  const cls = `${prefixCls}-${type}`;
  const height = strokeWidth;
  const isFinish = status === 'success' || status === 'error' || percent >= 100;

  return (
    <div className={`${cls}-wrapper`}>
      <div
        className={`${cls}-outer`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        style={{ height, backgroundColor: trailColor }}
      >
        <div
          className={`${cls}-inner`}
          style={{
            width: `${percent}%`,
            backgroundColor: color,
            // ...getBackground(color, percent),
          }}
        />
      </div>
      {showText && <div className={`${cls}-wrapper-percent`}>{percent}%</div>}
    </div>
  );
}

export default LineProgress;
