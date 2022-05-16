import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { SearchInputProps, OptionProps } from './interface';

import Trigger from '../Trigger';
import Option from './Option';
import Context from './Context';
import './index.less';

const PERFIX = 'apipost-search-input';

const { Provider } = Context;

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


  const [selectValue, setSelectValue] = useState<string | number | undefined>(defaultValue);

  const mergedValue = value !== undefined ? value : selectValue;
  const childrenList = Array.isArray(children)
    ? children.reduce((a: OptionProps[], b: OptionProps) => a.concat(b), [])
    : [children];
  const getPopup = () => {
    const popup =
      typeof dropdownRender === 'function' ? dropdownRender(childrenList) : childrenList;
    return <div {...restProps} style={{ display: childrenList.length > 0 ? "" : "none" }}>{popup}</div>;
  };

  const onOptionClick = (text: string, value: any) => {
    if (labelInValue === true) {
      setSelectValue(value);
      // onChange?.({ text, value: mergedValue });
    } else {
      setSelectValue(value);
      // onChange?.(mergedValue);
    }
    inputRef.current.value = value
    triggerRef?.current?.setPopupVisible(false);
  };

  let selectedText = placeholder;
  childrenList.forEach((item) => {
    if (item.props.value === mergedValue) {
      selectedText = item?.props?.children;
    }
  });
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      props?.onSearch(inputRef?.current?.value)
    }
  }
  const handleBlur = () => {
    props?.onSearch(inputRef?.current?.value)
  }
  return (
    <Provider
      value={{
        selectedValue: mergedValue,
        selectDisabled: disabled,
        onOptionClick,
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
          style={{ width: '240px', background: 'none' }}
        >
          <input type="text" ref={inputRef} placeholder={placeholder} style={{ width: '100%', border: 'none', height: "90%", lineHeight: '32px' }} onKeyDown={handleKeyDown} onBlur={handleBlur} onChange={(e) => { props?.onChange(e) }} />
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
