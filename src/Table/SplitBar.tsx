import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import cn from 'classnames';

const SplitBar = (props) => {
  const { layout = {}, tableHeight = 0, onLayoutChange = () => undefined } = props;

  const [refSplit, setRefSplit] = useState(null);
  const [scaling, setScaling] = useState(false);
  const [scaleData, setScaleData] = useState({
    enable: false,
    startX: 0,
  });
  const [maskLayout, setMaskLayout] = useState({});

  useEffect(() => {
    setMaskLayout(layout);
  }, [layout]);

  const handleMouseDown = (ev: MouseEvent) => {
    if (refSplit.contains(ev.target)) {
      const { pageX } = ev;
      const defaultLayout = cloneDeep(layout);
      setScaling(true);
      setScaleData({
        enable: true,
        startX: pageX,
        defaultLayout,
      });
    }
  };

  // 开始调整组件高宽
  const handleMouseMove = (ev) => {
    if (scaleData.enable) {
      const { pageX } = ev;
      const newLayout = cloneDeep(layout);
      const scaledX = pageX - scaleData.startX;
      newLayout.width = (layout?.width || 0) + scaledX;
      setMaskLayout(newLayout);
    }
  };

  const handleMouseUp = (ev) => {
    setScaleData({
      enable: false,
      startX: 0,
    });
    if (scaling) {
      setScaling(false);
    }
    if (scaleData.enable) {
      const { pageX } = ev;
      const newLayout = cloneDeep(layout);
      const scaledX = pageX - scaleData.startX;
      newLayout.width = (layout?.width || 0) + scaledX;
      onLayoutChange(newLayout);
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [scaleData]);

  return (
    <>
      {scaling && (
        <div
          style={{
            width: `${maskLayout?.width - 2}px`,
            height: `${tableHeight - 1}px`,
          }}
          className="td-mask"
        />
      )}
      <div
        ref={setRefSplit}
        onMouseDown={handleMouseDown}
        style={{
          left: `${maskLayout.width - 2}px`,
          height: `${tableHeight - 1}px`,
        }}
        className={cn({
          'td-scale': true,
          scaling,
        })}
      />
    </>
  );
};

export default SplitBar;
