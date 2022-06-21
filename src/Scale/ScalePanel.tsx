// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import pick from 'lodash/pick';
import cn from 'classnames';
import ScaleItem from './ScaleItem';
import './index.less';
import { ScalePanelProps, Layouts, Layout, PanelOffset } from './interface';

const ScalePanel: React.FC<ScalePanelProps> = (props) => {
  const {
    children,
    style,
    className = undefined,
    direction = 'horizontal', // 排序方式  horizontal / vertical
    defaultLayouts = {},
    layouts,
    onLayoutsChange = (layout: Layouts) => undefined,
  } = props;

  const [_layouts, setLayouts] = useState<Layouts>(defaultLayouts);
  const [scaling, setScaling] = useState<boolean>(false); // 是否正在调整中
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [panelOffset, setPanelOffset] = useState<PanelOffset>({
    width: 0,
    height: 0,
  });

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      setPanelOffset({
        width,
        height,
      });
    }
  });

  useEffect(() => {
    resizeObserver.observe(panelRef.current);

    return () => {
      if (panelRef.current) {
        panelRef.current?.disconnect();
        panelRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const newLayouts = layouts !== undefined ? layouts : { ..._layouts };
    children?.forEach((item: React.ReactNode, index: number) => {
      newLayouts[index] = {
        nodeProps: pick(item.props, ['minWidth', 'maxWidth', 'minHeight', 'maxHeight']),
        ...newLayouts[index],
      };
    });
    setLayouts(newLayouts);
  }, [layouts]);

  const handleLayoutChange = (newlayout: Layout, index: number) => {
    setLayouts({
      ..._layouts,
      [index]: newlayout,
    });
    onLayoutsChange(_layouts, panelOffset);
  };

  // console.log(mergedLayouts);

  return (
    <div
      ref={panelRef}
      className={cn(className, {
        'apipost-scale': true,
        [direction]: true,
        scaling,
      })}
      style={style}
    >
      {Array.isArray(children)
        ? children.map((d, index) => (
            <ScaleItem
              key={index}
              panelOffset={panelOffset}
              layouts={_layouts}
              onLayoutChange={handleLayoutChange}
              onScaling={setScaling}
              direction={direction}
              index={index}
              {...d.props}
            />
          ))
        : children}
    </div>
  );
};

export default ScalePanel;
