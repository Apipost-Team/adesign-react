import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import cn from 'classnames';
import ScaleItem from './ScaleItem';
import './index.less';
import { ScalePanelProps, Layouts, Layout } from './interface';
import { isFunction, isObject } from 'lodash';

const ScalePanel: React.FC<ScalePanelProps> = (props) => {
  const {
    children,
    style,
    className = undefined,
    direction = 'horizontal', // 排序方式  horizontal / vertical
    defaultLayouts = {},
    onLayoutsChange = (layout: Layouts) => undefined,
    realTimeRender = false,
    enableOverflow = false,
  } = props;

  const scaleChildren: React.ReactNode = [].concat(children);
  const [_layouts, setLayouts] = useState<Layouts>(defaultLayouts); // 页面内容渲染信息
  const panelRef = useRef<HTMLDivElement | null>(null);

  const refPanelOffset = useRef(null);

  const mergedLayout = isObject(props?.layouts) ? props.layouts : _layouts;

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        refPanelOffset.current = {
          width,
          height,
        };
      }
    });

    resizeObserver.observe(panelRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleLayoutChange = (newlayout: Layout, index: number) => {
    const newLayouts = {
      ...mergedLayout,
      [index]: newlayout,
    };
    if (isFunction(props?.onLayoutsChange)) {
      onLayoutsChange(newLayouts, refPanelOffset.current);
    }
    setLayouts(newLayouts);
  };

  return (
    <div
      ref={panelRef}
      className={cn(className, {
        'apipost-scale': true,
        [direction]: true,
      })}
      style={style}
    >
      {Array.isArray(scaleChildren)
        ? scaleChildren.map((d, index) => (
            <ScaleItem
              key={index}
              realTimeRender={realTimeRender}
              enableOverflow={enableOverflow}
              panelOffset={refPanelOffset.current}
              layouts={mergedLayout}
              onLayoutChange={handleLayoutChange}
              direction={direction}
              index={index}
              {...d.props}
              ref={d.ref}
            />
          ))
        : children}
    </div>
  );
};

export default ScalePanel;
