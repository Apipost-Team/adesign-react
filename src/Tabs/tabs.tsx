import React, { useState, useEffect, useCallback, useImperativeHandle, useRef } from 'react';
import cn from 'classnames';
import _throttle from 'lodash/throttle';
import _debounce from 'lodash/debounce';
import isFunction from 'lodash/isFunction';
import TabsContext from './context';
import ButtonAdd from '../assets/add.svg';
import ArrowLeft from '../assets/arrow-left2.svg';
import ArrowRight from '../assets/arrow-right2.svg';
import './index.less';
import { TabPanProps, TabsProps } from './interface';

const Tabs = (props: TabsProps<any>, rootRef: any) => {
  const {
    style,
    className,
    defaultActiveId,
    activeId,
    activeIndex = -1,
    showAdd = false,
    showScrollBtns = false,
    children,
    type = 'default',
    onChange,
    onAddTab = () => undefined,
    onRemoveTab,
    headerRender,
    itemWidth,
    elementCache = true,
    headerAutoScroll = false,
    ...restProps
  } = props;

  const [enableTransition, setEnableTransition] = useState(true); // 是否开启动画效果
  const [activeTabId, setActiveTabId] = useState(defaultActiveId);
  const [translateX, setTranslateX] = useState(0);

  const { Provider } = TabsContext;

  const refHeadOuter = useRef<HTMLDivElement>(null);
  const refTranslateData = useRef<any>(null);

  const handleMouseWheelDone = useCallback(
    _debounce(() => {
      setEnableTransition(true);
    }, 100),
    []
  );

  useEffect(() => {
    refTranslateData.current = {
      translateX,
    };
    handleMouseWheelDone();
  }, [translateX]);

  const handleMouseWheel = useCallback(
    _throttle((e) => {
      if (!headerAutoScroll) {
        return;
      }

      // e.preventDefault();
      // e.stopPropagation();
      setEnableTransition(false);
      const moveStepX = e.nativeEvent.deltaY;
      let movedWidth = 0;
      if (e.nativeEvent.deltaY > 0) {
        if (refHeadOuter.current === null) {
          return;
        }
        const outerPanel: HTMLDivElement = refHeadOuter.current;
        const innerPanel: HTMLDivElement = refHeadOuter.current?.firstElementChild;
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

  const mergedActiveIndex =
    'activeIndex' in props ? activeIndex : getTabIndex(tabsList, mergedActiveId);

  useEffect(() => {
    if (mergedActiveIndex === 0) {
      return;
    }
    if (refHeadOuter.current === null) {
      return;
    }
    const index = mergedActiveIndex;
    if (index === -1) {
      return;
    }
    if (itemWidth === undefined) {
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
  }, [mergedActiveIndex, children]);

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

  const headerTabItems: React.ReactNode = (
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

  const renderScrollItems = (tabsItemList) => {
    return (
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
          {tabsItemList}
        </div>
      </div>
    );
  };

  const scrollButtons: React.ReactNode = (
    <div className="scroll-buttons">
      <div className="scroll-btn " onClick={handleMoveLeft}>
        <ArrowLeft />
      </div>
      <div className="scroll-btn " onClick={handleMoveRight}>
        <ArrowRight />
      </div>
    </div>
  );

  const addButton: React.ReactNode = (
    <div className="add-button" onClick={onAddTab}>
      <ButtonAdd />
    </div>
  );

  useImperativeHandle(rootRef, () => ({
    handleMoveLeft,
    handleMoveRight,
  }));

  return (
    <div style={style} ref={rootRef} {...restProps} className={cn('apipost-tabs', className)}>
      <Provider
        value={{
          activeId: mergedActiveId,
          handleSwitchTab,
          handleRemoveTab,
          itemWidth,
        }}
      >
        {isFunction(headerRender) ? (
          headerRender({
            tabsList,
            headerTabItems,
            renderScrollItems,
            addButton,
            scrollButtons,
            handleMouseWheel,
          })
        ) : (
          <div onWheel={handleMouseWheel} className="apipost-tabs-header">
            {renderScrollItems(tabsList)}
            {showAdd && addButton}
            {showScrollBtns && scrollButtons}
          </div>
        )}
        <div className="apipost-tabs-content">
          {elementCache !== true ? (
            activedContent
          ) : (
            <>
              {tabsList.map((item, index) => (
                <div
                  key={index}
                  className={cn('tab-content-item', {
                    active: item?.props?.id === mergedActiveId,
                  })}
                >
                  {item.props.children}
                </div>
              ))}
            </>
          )}
        </div>
      </Provider>
    </div>
  );
};

export default React.forwardRef<HTMLDivElement, TabsProps<any>>(Tabs);
