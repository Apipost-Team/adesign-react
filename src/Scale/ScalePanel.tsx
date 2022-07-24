import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import cn from 'classnames';
import ScaleItem from './ScaleItem';
import './index.less';
import { ScalePanelProps, Layouts, Layout, PanelOffset } from './interface';
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
  const [panelOffset, setPanelOffset] = useState<PanelOffset>({
    width: 0,
    height: 0,
  });

  const mergedLayout = isObject(props?.layouts) ? props.layouts : _layouts;

  // const mergedLayout=

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setPanelOffset({
          width,
          height,
        });
      }
    });

    resizeObserver.observe(panelRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   const newLayouts = layouts !== undefined ? layouts : { ..._layouts };
  //   if (isUndefined(children)) {
  //     return;
  //   }

  //   scaleChildren?.forEach((item: React.ReactNode, index: number) => {
  //     newLayouts[index] = {
  //       nodeProps: pick(item.props, ['minWidth', 'maxWidth', 'minHeight', 'maxHeight']),
  //       ...newLayouts[index],
  //     };
  //   });
  //   setLayouts(newLayouts);
  // }, [layouts]);

  const handleLayoutChange = (newlayout: Layout, index: number) => {
    const newLayouts = {
      ...mergedLayout,
      [index]: newlayout,
    };
    if (isFunction(props?.onLayoutsChange)) {
      onLayoutsChange(newLayouts, panelOffset);
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
              panelOffset={panelOffset}
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
