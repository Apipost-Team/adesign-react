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
    if (selectIndex !== -1) {
      setSelectIndex(-1);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      triggerRef?.current?.setPopupVisible(false);
    }, 200);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!triggerRef.current || !triggerRef.current.popupRef) {
      return;
    }

    switch (event.keyCode) {
      case KEY_CODE.UP:
        event.preventDefault();
        setSelectIndex((selectIndex) => {
          console.log(selectIndex, '-----');
          const updateIndex = selectIndex > 0 ? selectIndex - 1 : 0;
          // 190 除去boder影响，可视区域高度
          // if ((bottomIndex - updateIndex + 1) * 32 > 190) {
          //   triggerRef.current.popupRef.scrollTop -= 32;
          // }
          return updateIndex;
        });
        break;
      case KEY_CODE.DOWN:
        setSelectIndex((selectIndex) => {
          console.log(selectIndex, '-----');
          if (selectIndex < dataList.length - 1) {
            return selectIndex + 1;
          }

          return dataList.length - 1;

          // bottomIndex = selectIndex >= dataList.length - 1 ? dataList.length - 1 : selectIndex + 1;
          // if (bottomIndex * 32 > 190) {
          //   triggerRef.current.popupRef.scrollTop += 32;
          // }
          // return bottomIndex;
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
      <div>
        {dataList.map((item: SearchInputItem, index: number) => {
          return (
            <>
              {typeof itemRender === 'function' ? (
                itemRender(item, index)
              ) : (
                <div
                  key={index}
                  onClick={handleSelectItem.bind(null, item, index)}
                  onMouseEnter={handleSetSelectIndex.bind(null, index)}
                  onMouseLeave={handleClearSelectIndex}
                  className={cn({
                    'select-option': true,
                    selected: index === selectIndex,
                  })}
                >
                  {item.text}
                </div>
              )}
            </>
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
