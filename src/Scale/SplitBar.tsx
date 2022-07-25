import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { SplitBarProps, ScaleData } from './interface';

const SplitBar: React.FC<SplitBarProps> = (props) => {
  const {
    onScaling = (scaleData: ScaleData) => undefined,
    className,
    barLocation,
    scaleData,
    direction,
  } = props;

  const preRef = useRef(null);

  const handleMouseDown = (ev: React.MouseEvent) => {
    const { pageX, pageY } = ev;
    preRef.current = true;
    onScaling({
      enable: true,
      startX: pageX,
      startY: pageY,
    });
  };

  const handleMouseUp = (ev: MouseEvent) => {
    if (preRef.current !== true) {
      return;
    }

    const { pageX, pageY } = ev;
    onScaling({
      enable: false,
      startX: pageX,
      startY: pageY,
    });
    preRef.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [scaleData]);

  const splitStyles = () => {
    const splitStyle: React.CSSProperties = {};

    // 'horizontal' | 'vertical';
    if (direction === 'horizontal') {
      if (barLocation === 'start') {
        splitStyle.left = '-10px';
      } else {
        splitStyle.right = '-10px';
      }
    } else if (barLocation === 'start') {
      splitStyle.top = '-10px';
    } else {
      splitStyle.bottom = '-10px';
    }

    // if (barLocation === 'start') {
    //   splitStyle.top = '0px';
    //   splitStyle.left = '0px';
    // } else {
    //   splitStyle.bottom = '0px';
    //   splitStyle.right = '0px';
    // }
    return splitStyle;
  };

  return (
    <div
      style={{ ...props.style, ...splitStyles() }}
      className={cn('split-item', className)}
      onMouseDown={handleMouseDown}
    >
      <div className="split-bar"></div>
    </div>
  );
};

export default SplitBar;
