import React, { useState, useEffect, useCallback, useImperativeHandle, useRef } from 'react';
import cn from 'classnames';
import _cloneDeep from 'lodash/cloneDeep';
import _throttle from 'lodash/throttle';
import _debounce from 'lodash/debounce';
import TabsContext from './context';
import ButtonAdd from '../assets/add.svg';
import ArrowLeft from '../assets/arrow-left2.svg';
import ArrowRight from '../assets/arrow-right2.svg';
import TabPan from './tabpan';
import './index.less';
import { TabPanProps, TabsProps } from './interface';

const Tabs = (props: TabsProps, rootRef: any) => {
  const {
    style,
    className,
    defaultActiveId,
    activeId,
    showAdd = false,
    showScrollBtns = false,
    children,
    type = 'default',
    onChange,
    onAddTab = () => undefined,
    onRemoveTab,
    renderHeader,
    itemWidth = 150,
    ...restProps
  } = props;

  const [enableTransition, setEnableTransition] = useState(true); // 是否开启动画效果
  const [activeTabId, setActiveTabId] = useState(defaultActiveId);
  const [translateX, setTranslateX] = useState(0);

  const { Provider } = TabsContext;

  const refHeadOuter = useRef<HTMLDivElement>(null);
  const refTranslateData = useRef<any>(null);

  const handleMouseWeelDone = useCallback(
    _debounce(() => {
      setEnableTransition(true);
    }, 100),
    []
  );

  useEffect(() => {
    refTranslateData.current = {
      translateX,
    };
    handleMouseWeelDone();
  }, [translateX]);

  const handleMouseWeel = useCallback(
    _throttle((e) => {
      // e.preventDefault();
      // e.stopPropagation();
      setEnableTransition(false);
      const moveStepX = e.nativeEvent.deltaY;
      let movedWidth = 0;
      if (e.nativeEvent.deltaY > 0) {
        const innerPanel = refHeadOuter.current?.firstElementChild;
        const outerPanel = refHeadOuter.current;
        movedWidth = refTranslateData.current.translateX - moveStepX;
        if (movedWidth < outerPanel?.offsetWidth - innerPanel.offsetWidth) {
          movedWidth = outerPanel?.offsetWidth - innerPanel.offsetWidth;
        }
      } else {
        movedWidth = refTranslateData.current.translateX - moveStepX;
      }
      if (movedWidth > 0) {
        movedWidth = 0;
      }
      setTranslateX(movedWidth);

      // e.stopPropagation();
      // e?.preventDefault();
    }, 20),
    []
  );

  const tabsList = Array.isArray(children)
    ? children.reduce((a: TabPanProps[], b: TabPanProps) => a.concat(b), [])
    : [children];

  const mergedActiveId = 'activeId' in props ? activeId : activeTabId;

  // useEffect(() => {
  //   if (mergedActiveId === undefined && tabsList.length > 0) {
  //     const firstTabId = tabsList[0].props.id;
  //     setActiveTabId(firstTabId);
  //   }
  // }, [tabsList]);

  const getTabIndex = (elements: any[], activeId: string) => {
    let index = -1;
    for (let i = 0; i < elements.length; i++) {
      const item = elements[i];
      if (item.props.id === activeId) {
        index = i;
      }
    }
    return index;
  };

  useEffect(() => {
    if (tabsList === 0) {
      setTranslateX(0);
    }
    if (refHeadOuter.current === null) {
      return;
    }
    const index = getTabIndex(tabsList, mergedActiveId);
    if (index === -1) {
      return;
    }
    const outerWidth = refHeadOuter.current.offsetWidth;
    const innerWidth = refHeadOuter.current.firstElementChild?.scrollWidth || 0;
    const leftOffset = -index * itemWidth;
    let newTranslateX = null;
    if (leftOffset > translateX) {
      newTranslateX = leftOffset;
    }
    const rightOffset = (index + 1) * itemWidth;
    if (rightOffset > outerWidth && translateX >= outerWidth - rightOffset) {
      newTranslateX = outerWidth - rightOffset;
      // setTranslateX(outerWidth - rightOffset);
    }

    // 右侧有空间时
    if (translateX < outerWidth - innerWidth) {
      if (outerWidth >= innerWidth) {
        newTranslateX = 0;
      } else {
        newTranslateX = outerWidth - innerWidth;
      }
    }
    if (newTranslateX !== null) {
      setTranslateX(newTranslateX);
    }
  }, [mergedActiveId, tabsList.length]);

  useEffect(() => {
    refTranslateData.current = {
      translateX,
    };
  }, [translateX]);

  const handleSwitchTab = (id: string, tabPan: TabPanProps) => {
    setActiveTabId(id);
    if (typeof onChange === 'function') {
      onChange(id, tabPan);
    }
  };

  const handleRemoveTab = (tabId: string, tabPan: TabPanProps) => {
    if (typeof onRemoveTab === 'function') {
      onRemoveTab(tabId, tabPan);
    }
  };

  const handleMoveLeft = () => {
    const tabsPanel = refHeadOuter.current;

    if (tabsPanel === null) {
      return;
    }

    let movedWidth = translateX + tabsPanel.offsetWidth;
    if (movedWidth > 0) {
      movedWidth = 0;
    }

    refTranslateData.current.translateX = movedWidth;
    setTranslateX(movedWidth);
  };

  const handleMoveRight = () => {
    const tabsPanel = refHeadOuter.current;
    if (tabsPanel === null) {
      return;
    }

    if (tabsPanel.scrollWidth <= tabsPanel.offsetWidth) {
      return;
    }
    let movedWidth = translateX - tabsPanel.offsetWidth;
    if (movedWidth < tabsPanel.offsetWidth - tabsPanel.scrollWidth) {
      movedWidth = tabsPanel.offsetWidth - tabsPanel.scrollWidth;
    }
    refTranslateData.current.translateX = movedWidth;
    setTranslateX(movedWidth);
  };

  const activedContent = tabsList.find((item: TabPanProps) => item?.props?.id === mergedActiveId)
    ?.props?.children;

  const headerTabItems = (
    <div
      className={cn({
        'tabs-content': true,
        [`tabs-content_${type}`]: true,
      })}
      ref={refHeadOuter}
    >
      <div
        className={cn({
          enableTransition: enableTransition === true,
        })}
        style={{
          transform: `translate3d(${translateX}px,0,0)`,
        }}
      >
        {tabsList}
      </div>
    </div>
  );
  const scrollButtons = (
    <div className="scroll-buttons">
      <div className="scroll-btn " onClick={handleMoveLeft}>
        <ArrowLeft />
      </div>
      <div className="scroll-btn " onClick={handleMoveRight}>
        <ArrowRight />
      </div>
    </div>
  );

  const addButton = (
    <div className="add-button" onClick={onAddTab}>
      <ButtonAdd />
    </div>
  );

  return (
    <div
      onWheel={handleMouseWeel}
      style={style}
      ref={rootRef}
      {...restProps}
      className={cn('apipost-tabs', className)}
    >
      <Provider
        value={{
          activeId: mergedActiveId,
          handleSwitchTab,
          handleRemoveTab,
          itemWidth,
        }}
      >
        <div className="apipost-tabs-header">
          {typeof renderHeader !== 'function' ? (
            <>
              {headerTabItems}
              {showAdd && addButton}
              {showScrollBtns && scrollButtons}
            </>
          ) : (
            <>{renderHeader(tabsList, { headerTabItems, addButton, scrollButtons })}</>
          )}
        </div>
        <div
          className={cn({
            'apipost-tabs-content': true,
          })}
        >
          {activedContent}
        </div>
      </Provider>
    </div>
  );
};

export default React.forwardRef<HTMLDivElement, TabsProps>(Tabs);
