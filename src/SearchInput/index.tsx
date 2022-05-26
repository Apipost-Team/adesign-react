import React, { useState, useRef } from 'react';
import cn from 'classnames';
import Input from '../Input';
import { SearchInputItem, SearchInputProps } from './interface';
import Trigger from '../Trigger';
import './index.less';

const PERFIX = 'apipost-search-input';

const KEY_CODE = {
  ENTER: 13,
  UP: 38,
  DOWN: 40,
};

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>((props, inputRef) => {
  const {
    defaultValue,
    onChange,
    placeholder = '请选择',
    dataList = [],
    style,
    className,
    disabled = false,
    itemRender,
  } = props;

  const [selectIndex, setSelectIndex] = useState<number>(-1);
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const triggerRef = useRef(null);

  const mergedValue = 'value' in props ? props.value : value;

  const handleChange = (text: string) => {
    setValue(text);
    typeof onChange === 'function' && onChange(text);
  };

  const handleSelectItem = (item: SearchInputItem, index: number, event: any) => {
    if (disabled) {
      return;
    }
    setSelectIndex(index);
    handleChange(item.text);
    triggerRef?.current?.setPopupVisible(false);
  };

  const handleSetSelectIndex = (index: number) => {
    if (index !== selectIndex) {
      setSelectIndex(index);
    }
  };

  const handleClearSelectIndex = () => {
    console.error(triggerRef?.current)
    if (selectIndex !== -1) {
      setSelectIndex(-1);
    }
  };

  const handleBlur = () => {
    handleClearSelectIndex()
    setTimeout(() => {
      triggerRef?.current?.setPopupVisible(false);
    }, 200);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!triggerRef.current || !triggerRef.current.popupRef) {
      return;
    }
    const popupHeight = triggerRef.current.popupRef.clientHeight; // 弹窗可视区域
    switch (event.keyCode) {
      case KEY_CODE.UP:
        event.preventDefault();
        setSelectIndex((selectIndex) => {
          const updateIndex = selectIndex > 0 ? selectIndex - 1 : 0;
          const opitonHeight = triggerRef.current.popupRef?.children[updateIndex]?.clientHeight || 0; // 每条搜索选项的高度
          if (triggerRef.current.popupRef.children[updateIndex]?.offsetTop - triggerRef.current.popupRef?.scrollTop < 0) {
            if (triggerRef.current.popupRef.scrollTop % opitonHeight > 0) {
              triggerRef.current.popupRef.scrollTop -= (triggerRef.current.popupRef.scrollTop % opitonHeight);
            } else {
              triggerRef.current.popupRef.scrollTop -= opitonHeight;
            }
          }
          return updateIndex;
        });
        break;
      case KEY_CODE.DOWN:
        setSelectIndex((selectIndex) => {
          const updateIndex =
            selectIndex >= dataList.length - 1 ? dataList.length - 1 : selectIndex + 1;
          const opitonHeight = triggerRef.current.popupRef?.children[updateIndex]?.clientHeight || 0; // 每条搜索选项的高度
          if (triggerRef.current.popupRef.children[updateIndex]?.offsetTop - popupHeight >= 0) {
            if (triggerRef.current.popupRef.scrollTop > triggerRef.current.popupRef.children[updateIndex]?.offsetTop - popupHeight) {
              if (triggerRef.current.popupRef.scrollTop % opitonHeight > 0) {
                triggerRef.current.popupRef.scrollTop += opitonHeight - (triggerRef.current.popupRef.scrollTop % opitonHeight);
              }
            } else {
              triggerRef.current.popupRef.scrollTop += opitonHeight;

            }
          }
          return updateIndex;
        });
        break;
      case KEY_CODE.ENTER:
        if (dataList[selectIndex]) {
          handleSelectItem(dataList[selectIndex], selectIndex, event);
        }
        break;
      default:
        break;
    }
  };
  const getPopup = () => {
    return (
      <div
        style={{ display: dataList.length > 0 ? '' : 'none' }}
      >
        {dataList.map((item: SearchInputItem, index: number) => {
          return (
            <React.Fragment key={index}>
              {typeof itemRender === 'function' ? (
                itemRender(item, index)
              ) : (
                  <div
                    key={index}
                    onClick={handleSelectItem.bind(null, item, index)}
                    onMouseEnter={handleSetSelectIndex.bind(null, index)}
                    className={cn({
                      'select-option': true,
                      selected: index === selectIndex,
                    })}
                  >
                    {item.text}
                  </div>
                )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <Trigger
      ref={triggerRef}
      autoAdjustWidth
      disabled={disabled}
      placement="bottom-start"
      outsideClose
      popup={getPopup()}
      trigger={['focus', 'input']}
      className={cn(`${PERFIX}-popup`)}
    >
      <Input
        type="text"
        style={style}
        className={cn(PERFIX, className)}
        ref={inputRef}
        placeholder={placeholder}
        value={mergedValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
    </Trigger>
  );
});

export default SearchInput;
