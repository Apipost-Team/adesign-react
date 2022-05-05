import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import omit from 'lodash/omit';
import cloneDeep from 'lodash/cloneDeep';
import SplitBar from './SplitBar';
import { ScaleItemProps, Layout, ScaleData, Layouts } from './interface';

const ScaleItem: React.FC<ScaleItemProps> = (props) => {
  const {
    index = -1,
    barLocation = 'end', // 分隔条位置 start/end
    children,
    layouts = {}, // 默认宽高
    onLayoutChange = (layout: Layout, index: number) => undefined,
    minWidth = 0, // 最小可调整宽度
    maxWidth, // 最大可调整宽度
    minHeight = 0, // 最小可调整高度
    maxHeight, // 最大可调整高度
    enableScale = true, // 是否可拖拽
    direction = 'horizontal',
    className,
    onScaling = (val: boolean) => undefined,
    panelOffset = {},
  } = props;

  const refItem: React.LegacyRef<HTMLDivElement> = useRef(null);

  const layout = layouts[index];
  const [scaleData, setScaleData] = useState<ScaleData>({
    enable: false,
    startX: 0,
    startY: 0,
    defaultLayout: null,
  });

  let itemStyle = { ...layout };
  if (layout?.flex === 1) {
    itemStyle = omit(layout, ['width', 'height']);
  } else {
    itemStyle = omit(layout, ['flex']);
  }

  // 拖拽状态变化回调事件
  const handleScaling = (scaleData: ScaleData) => {
    setScaleData({
      ...scaleData,
      defaultLayout: cloneDeep(layout),
    });
    onScaling(scaleData.enable);
  };

  const getLayoutsWidths = (layouts: Layouts) => {
    let layoutsWidth = 0;
    Object.entries(layouts).forEach(([key, item]) => {
      if (Number(key) <= index && typeof item?.width === 'number') {
        layoutsWidth += item.width;
      } else if (item.flex !== 1) {
        layoutsWidth += typeof item?.width === 'number' ? item.width : 0;
      } else if (typeof item?.nodeProps?.minWidth === 'number') {
        layoutsWidth += item.nodeProps.minWidth;
      }
    });
    return layoutsWidth;
  };

  const getLayoutsHeights = (layouts: Layouts) => {
    let layoutsHeight = 0;
    Object.entries(layouts).forEach(([key, item]) => {
      if (Number(key) <= index && typeof item?.height === 'number') {
        layoutsHeight += item.height;
      } else if (item.flex !== 1) {
        layoutsHeight += typeof item?.height === 'number' ? item.height : 0;
      } else if (typeof item?.nodeProps?.minHeight === 'number') {
        layoutsHeight += item.nodeProps.minHeight;
      }
    });
    return layoutsHeight;
  };

  const handleMouseMove = (ev: MouseEvent) => {
    if (scaleData.enable === true) {
      const { pageX, pageY } = ev;
      const newLayout = { ...layout };
      const { width: preWidth = 0, height: preHeight = 0 } = scaleData.defaultLayout || {};

      if (direction === 'horizontal') {
        const scaledX = pageX - scaleData.startX;
        const parentWidth = panelOffset?.width || 0;
        newLayout.width = preWidth + (barLocation === 'start' ? -scaledX : scaledX);
        if (minWidth !== undefined && newLayout.width <= minWidth) {
          newLayout.width = minWidth;
        }
        if (maxWidth !== undefined && newLayout.width >= maxWidth) {
          newLayout.width = maxWidth;
        }
        const layoutsWidth = getLayoutsWidths({ ...layouts, [index]: scaleData.defaultLayout });
        if (scaledX > parentWidth - layoutsWidth) {
          newLayout.width = preWidth + parentWidth - layoutsWidth;
        }
      } else if (direction === 'vertical') {
        const scaledY = pageY - scaleData.startY;
        const parentHeight = panelOffset?.height || 0;
        newLayout.height = preHeight + (barLocation === 'start' ? -scaledY : scaledY);
        if (minHeight !== undefined && newLayout.height <= minHeight) {
          newLayout.height = minHeight;
        }
        if (maxHeight !== undefined && newLayout.height >= maxHeight) {
          newLayout.height = maxHeight;
        }
        const layoutsHeight = getLayoutsHeights({ ...layouts, [index]: scaleData.defaultLayout });
        if (scaledY > parentHeight - layoutsHeight) {
          newLayout.height = preHeight + parentHeight - layoutsHeight;
        }
      }
      onLayoutChange(newLayout, index);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scaleData.enable, layout]);

  return (
    <div
      ref={refItem}
      style={itemStyle}
      className={cn(
        {
          'scale-item': true,
        },
        className
      )}
    >
      <div className="scale-item-content">{children}</div>
      {enableScale && <SplitBar onScaling={handleScaling} barLocation={barLocation} />}
    </div>
  );
};

export default ScaleItem;
