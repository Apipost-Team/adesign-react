import React, { useState, useEffect, useCallback, ReactElement } from 'react';
import cn from 'classnames';
import debounce from 'lodash/debounce';
import LoadingSvg from '../assets/loading.svg';
import { SpinProps } from './interface';
import './index.less';

const prefixCls = 'apipost-spin';
function Spin(props: SpinProps, ref: any) {
  const {
    style,
    className,
    children,
    loading: propLoading,
    size = 24,
    icon,
    element,
    tip,
    delay,
    // block = false,
  } = props;

  const [loading, setLoading] = useState<boolean | undefined>(delay ? false : propLoading);
  const debouncedSetLoading = useCallback(debounce(setLoading, delay), [delay]);
  const _currentLoading = delay ? loading : propLoading;

  useEffect(() => {
    delay && debouncedSetLoading(propLoading);
    return () => {
      debouncedSetLoading && debouncedSetLoading.cancel();
    };
  }, [propLoading]);

  const loadingIcon = (
    <span className={`${prefixCls}-icon`} style={{ width: size, height: size }}>
      {icon
        ? React.cloneElement(icon as ReactElement, {
            className: cn(`${prefixCls}-icon-loading`),
            style: {
              fontSize: size,
            },
          })
        : element || (
            <div
              className="apipost-icon apipost-icon-loading"
              style={{ width: size, height: size }}
            >
              <LoadingSvg
                // className="apipost-icon apipost-icon-loading"
                style={{ width: size, height: size }}
              />
            </div>
          )}
    </span>
  );

  return (
    <div
      ref={ref}
      className={cn(
        prefixCls,
        {
          [`${prefixCls}-loading`]: _currentLoading,
          [`${prefixCls}-with-tip`]: tip && !children,
        },
        className
      )}
      style={style}
    >
      {children ? (
        <>
          <div className={`${prefixCls}-children`}>{children}</div>
          {_currentLoading && (
            <div className={`${prefixCls}-loading-layer`} style={{ fontSize: size }}>
              <span className={`${prefixCls}-loading-layer-inner`}>
                {loadingIcon}
                {tip ? <div className={`${prefixCls}-tip`}>{tip}</div> : null}
              </span>
            </div>
          )}
        </>
      ) : (
        <>
          {loadingIcon}
          {tip && <div className={`${prefixCls}-tip`}>{tip}</div>}
        </>
      )}
    </div>
  );
}

const SpinComponent = React.forwardRef<unknown, SpinProps>(Spin);

SpinComponent.displayName = 'Spin';

export default SpinComponent;
