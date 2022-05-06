import React, { CSSProperties, forwardRef } from 'react';
import cn from 'classnames';
import LineProgress from './LineProgress';
import CircleProgress from './CircleProgress';
import { ProgressProps } from './interface';
import './index.less';

const prefixCls = 'apipost-progress';

function Progress(props: ProgressProps, ref: any) {
  const { className, type = 'line', width, style, showText = true, strokeWidth } = props;

  const widthStyle: CSSProperties = { width };
  widthStyle.width = width || '100%';

  const percent = props.percent || 0;
  const status = 'status' in props ? props.status : percent >= 100 ? 'success' : 'normal';

  return (
    <div
      className={cn(
        prefixCls,
        `${prefixCls}-${type}`,
        {
          [`${prefixCls}-is-${status}`]: status !== 'normal',
        },
        className
      )}
      style={{ ...widthStyle, ...style }}
    >
      {type === 'line' && (
        <LineProgress
          type={type}
          strokeWidth={strokeWidth || 4}
          status={status}
          prefixCls={prefixCls}
          {...props}
        />
      )}
      {type === 'circle' && (
        <CircleProgress
          showText={showText}
          type={type}
          strokeWidth={strokeWidth || 4}
          status={status}
          prefixCls={prefixCls}
          {...props}
        />
      )}
    </div>
  );
}

const ProgressRef = forwardRef(Progress);
ProgressRef.displayName = 'Progress';

export default ProgressRef;
