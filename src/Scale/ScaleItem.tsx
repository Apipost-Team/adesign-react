import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import omit from 'lodash/omit';
import cloneDeep from 'lodash/cloneDeep';
import SplitBar from './SplitBar';
import { ScaleItemProps, Layout, ScaleData, Layouts } from './interface';

const ScaleItem: React.FC<ScaleItemProps> = (props, refForward) => {
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
    panelOffset = {},
    realTimeRender,
    enableOverflow,
  } = props;

  const layout = layouts[index];
  const [scaleData, setScaleData] = useState<ScaleData>({
    enable: false,
    startX: 0,
    startY: 0,
    defaultLayout: null,
  });

  const [barLayout, setBarLayout] = useState({ x: 0, y: 0 });

  const excuteUpdateLayout = (pageX, pageY) => {
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
      if (scaledY > parentHeight - layoutsHeight && enableOverflow === false) {
        // 不允许拖动到外面
        newLayout.height = preHeight + parentHeight - layoutsHeight;
      }
    }

    onLayoutChange(newLayout, index);
  };

  // 拖拽状态变化回调事件
  const handleScaling = (scaleData: ScaleData) => {
    // 鼠标释放时 更新最新布局
    if (scaleData.enable === false) {
      excuteUpdateLayout(scaleData.startX, scaleData.startY);
    }

    setScaleData({
      ...scaleData,
      defaultLayout: { ...layout },
    });

    // 重置滚动滑块位置
    if (scaleData.enable === true) {
      setBarLayout({ x: 0, y: 0 });
    }
  };

  const getBarTransStyle = () => {
    if (scaleData.enable && direction === 'horizontal') {
      return `translateX(${barLayout.x}px)`;
    }
    if (scaleData.enable && direction === 'vertical') {
      return `translateY(${barLayout.y}px)`;
    }
  };

  let itemStyle = { ...layout };
  if (layout?.flex === 1) {
    itemStyle = omit(layout, ['width', 'height']);
  } else {
    itemStyle = omit(layout, ['flex']);
  }

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
      } else if (item?.flex !== 1) {
        layoutsHeight += typeof item?.height === 'number' ? item.height : 0;
      } else if (typeof item?.nodeProps?.minHeight === 'number') {
        layoutsHeight += item.nodeProps.minHeight;
      }
    });
    return layoutsHeight;
  };

  // 更改滑块位置
  const handleBarMouseMove = (ev: MouseEvent) => {
    const { pageX, pageY } = ev;
    if (direction === 'horizontal') {
      const changedX = pageX - scaleData.startX;
      setBarLayout({ x: changedX });
    }
    if (direction === 'vertical') {
      const changedY = pageY - scaleData.startY;
      setBarLayout({ y: changedY });
    }
  };

  const handleMouseMove = (ev: MouseEvent) => {
    if (scaleData.enable === true) {
      if (realTimeRender === false) {
        handleBarMouseMove(ev);
        return;
      }
      const { pageX, pageY } = ev;
      excuteUpdateLayout(pageX, pageY);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scaleData.enable]);

  return (
    <div ref={refForward} style={itemStyle} className={cn('scale-item', className)}>
      <div className="scale-item-content">{children}</div>
      {enableScale && (
        <SplitBar
          className={cn({
            scaling: scaleData.enable,
          })}
          style={{ transform: getBarTransStyle() }}
          onScaling={handleScaling}
          scaleData={scaleData}
          barLocation={barLocation}
        />
      )}
    </div>
  );
};

export default React.forwardRef(ScaleItem);
