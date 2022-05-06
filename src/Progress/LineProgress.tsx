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

  const getText = useCallback(() => {
    // if (isFunction(formatText)) {
    //   return formatText(percent);
    // }
    switch (status) {
      case 'error':
        return <span>{percent}%</span>;
      default:
        return `${percent}%`;
    }
  }, [formatText, percent, status]);

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
            // ...getBackground(color, percent),
          }}
        />
      </div>
      {showText && <div className={`${cls}-wrapper-percent`}>{percent}%</div>}
      {/* {showText && (
        <div className={cs(`${cls}-text`, { [`${cls}-text-with-icon`]: status })}>{getText()}</div>
      )} */}
    </div>
  );
}

export default LineProgress;
