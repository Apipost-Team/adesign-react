import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { SearchInputProps, OptionProps } from './interface';

import Trigger from '../Trigger';
import Option from './Option';
import Context from './Context';
import './index.less';

const PERFIX = 'apipost-search-input';

const { Provider } = Context;

let bottomIndex = 0

const Select = React.forwardRef<HTMLDivElement, SearchInputProps>((props, ref) => {
  const {
    defaultValue,
    value,
    placeholder = '请选择',
    onVisibleChange = () => undefined,
    labelInValue = false,
    style,
    className,
    popupStyle,
    popupClassName,
    formatRender,
    dropdownRender,
    children,
    disabled = false,
    ...restProps
  } = props;

  const triggerRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    return () => {
      bottomIndex = 0
      setSelectIndex(-1)
    }
  }, [])
  const [selectIndex, setSelectIndex] = useState(-1)
  const [selectValue, setSelectValue] = useState<string | number | undefined>(defaultValue);

  const mergedValue = value !== undefined ? value : selectValue;
  const childrenList = Array.isArray(children)
    ? children.reduce((a: OptionProps[], b: OptionProps) => a.concat(b), [])
    : [children];
  const getPopup = () => {
    const popup =
      typeof dropdownRender === 'function' ? dropdownRender(childrenList) : childrenList;
    return <div {...restProps} style={{ display: childrenList.length > 0 ? "" : "none" }} >
      {
        popup.map((item: any, index: any) => {
          return (
            <div
              key={index}
              style={style}
              onClick={(event) => handleOptionClick(event)}
              onMouseEnter={(event: any) => handleOptionMouseEnter(event, index)}
              onMouseLeave={(event: any) => handleOptionMouseLeave(event, index)}
              className={cn(className, {
                'select-option': true,
                'select-option-disabled': disabled === true,
                selected: index === selectIndex,
                disabled: disabled === true,
              })}
            >
              {item}
            </div>
          )
        })
      }

    </div>;
  };
  const handleOptionMouseEnter = (event: any, index: number) => {
    setSelectIndex(index)
  }
  const handleOptionMouseLeave = (event: any, index: number) => {
    setSelectIndex(index)
  }
  const handleOptionClick = (event) => {
    if (disabled) {
      return;
    }
    bottomIndex = 0
    setSelectIndex(-1)
    if (labelInValue === true) {
      setSelectValue(event.target.innerHTML);
    } else {
      setSelectValue(event.target.innerHTML);
    }
    inputRef.current.value = event.target.innerHTML
    triggerRef?.current?.setPopupVisible(false);
  }

  const onOptionClick = (text: string, value: any) => {

  };

  let selectedText = placeholder;
  childrenList.forEach((item) => {
    if (item.props.value === mergedValue) {
      selectedText = item?.props?.children;
    }
  });
  const handleKeyDown = (event) => {
    if (!triggerRef.current || !triggerRef.current.popupRef) {
      return
    }
    if (event.keyCode === 38) {
      event.preventDefault()
      setSelectIndex(selectIndex => {
        let updateIndex = selectIndex > 0 ? selectIndex - 1 : 0
        // 190 除去boder影响，可视区域高度
        if ((bottomIndex - updateIndex + 1) * 32 > 190) {
          triggerRef.current.popupRef.scrollTop -= 32
        }
        return updateIndex
      })
    } else if (event.keyCode === 40) {
      setSelectIndex(selectIndex => {
        bottomIndex = selectIndex >= childrenList.length - 1 ? childrenList.length - 1 : selectIndex + 1
        if (bottomIndex * 32 > 190) {
          triggerRef.current.popupRef.scrollTop += 32
        }
        return bottomIndex
      })
    }
  }
  return (
    <Provider
      value={{
        selectedValue: mergedValue,
        selectDisabled: disabled,
      }}
    >
      <Trigger
        ref={triggerRef}
        autoAdjustWidth
        disabled={disabled}
        style={popupStyle}
        placement="bottom-start"
        outsideClose
        popup={getPopup()}
        trigger="click"
        className={cn(`${PERFIX}-popup`, popupClassName)}
        onVisibleChange={onVisibleChange}
      >
        <div
          ref={ref}
          className={cn(PERFIX, className, {
            disabled: disabled === true,
            unselect: mergedValue === undefined,
          })}
        >
          <input type="text" ref={inputRef} placeholder={placeholder} onChange={(e) => { props?.onChange(e) }} onKeyDown={handleKeyDown} />
        </div>
      </Trigger>
    </Provider>
  );
});

const SelectComponent = Select as typeof Select & {
  Option: typeof Option;
};

SelectComponent.Option = Option;

export default SelectComponent;
