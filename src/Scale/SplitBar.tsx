import type { FC } from 'react';
import React, { useEffect } from 'react';
import { SplitBarProps, ScaleData } from './interface';

const SplitBar: FC<SplitBarProps> = (props) => {
  const { onScaling = (scaleData: ScaleData) => undefined, barLocation } = props;

  const handleMouseDown = (ev: React.MouseEvent) => {
    const { pageX, pageY } = ev;
    onScaling({
      enable: true,
      startX: pageX,
      startY: pageY,
    });
  };

  const handleMouseUp = (ev: MouseEvent) => {
    onScaling({
      enable: false,
      startX: 0,
      startY: 0,
    });
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const splitStyles = () => {
    const splitStyle: React.CSSProperties = {};
    if (barLocation === 'start') {
      splitStyle.top = '0px';
      splitStyle.left = '0px';
    } else {
      splitStyle.bottom = '0px';
      splitStyle.right = '0px';
    }
    return splitStyle;
  };

  return (
    <div style={{ ...splitStyles() }} className="split-item" onMouseDown={handleMouseDown}>
      <div className="split-bar" />
    </div>
  );
};

export default SplitBar;
