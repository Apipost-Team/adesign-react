import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { SelectProps, OptionProps } from './interface';
import SvgArrowDown from '../assets/arrow-down.svg';
import Trigger from '../Trigger';
import Option from './Option';
import './style/index.less';
import Context from './Context';
import { ConfigContext } from '../ConfigProvider';
import { TriggerProps } from '../Trigger/interface';

const PERFIX = 'apipost-select';

const { Provider } = Context;

const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const { locale } = React.useContext(ConfigContext);

  const {
    defaultValue,
    value,
    placeholder = locale?.Select.noData,
    onChange,
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
    placement = 'bottom-start',
    autoAdjustWidth = true,
    size = 'middle',
    ...restProps
  } = props;

  const triggerRef = useRef<any>(null);

  const [selectValue, setSelectValue] = useState<string | number | undefined>(defaultValue);

  const mergedValue = value !== undefined ? value : selectValue;

  const childrenList: OptionProps[] = Array.isArray(children)
    ? (children as OptionProps[]).reduce((a: OptionProps[], b: OptionProps) => a.concat(b), [])
    : ([children] as OptionProps[]);

  const getPopup = () => {
    const popup =
      typeof dropdownRender === 'function' ? dropdownRender(childrenList) : childrenList;
    return <div {...restProps}>{popup}</div>;
  };

  const onOptionClick = (text: string, value: any) => {
    if (labelInValue === true) {
      setSelectValue(value);
      onChange?.({ text, value });
    } else {
      setSelectValue(value);
      onChange?.(value);
    }
    triggerRef?.current?.setPopupVisible(false);
  };

  let selectedText = placeholder;
  childrenList.forEach((item: any) => {
    if (item.props.value === mergedValue) {
      selectedText = item?.props?.children;
    }
  });

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
        autoAdjustWidth={autoAdjustWidth}
        disabled={disabled}
        style={popupStyle}
        placement={placement}
        outsideClose
        popup={getPopup()}
        trigger="click"
        className={cn(`${PERFIX}-popup`, popupClassName)}
        onVisibleChange={onVisibleChange}
      >
        <div
          ref={ref}
          style={style}
          className={cn(PERFIX, className, {
            disabled: disabled === true,
            unselect: mergedValue === undefined,
            [`${PERFIX}-${size}`]: true,
          })}
        >
          <div className={`${PERFIX}-view`}>
            <div className={`${PERFIX}-view-text`}>
              {formatRender !== undefined
                ? formatRender(mergedValue, childrenList, selectedText)
                : selectedText}
            </div>
            <div className={`${PERFIX}-view-suffix`}>
              <SvgArrowDown />
            </div>
          </div>
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
