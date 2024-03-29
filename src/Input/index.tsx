import React, { useState, useRef, useEffect } from 'react';
import { isUndefined } from 'lodash';
import cn from 'classnames';
import {InputProps} from './interface';
import Textarea from './Textarea';
import './style/index.less';
import Iconcancel from '../assets/cancel.svg';

export const Input: React.FC<InputProps> = (props) => {
  const {
    defaultValue,
    value,
    type,
    onChange,
    className,
    style,
    size = 'middle',
    placeholder,
    beforeFix = null,
    afterFix = null,
    disabled = false,
    bordered = true,
    error,
    onClear,
    onBlur = () => undefined,
    onFocus = () => undefined,
    onKeyDown = () => undefined,
    readonly = false,
    allowClear,
    forceUseValue = false,
    ...restProps
  } = props;

  const isComposition = useRef(false);
  const [inputValue, setInputValue] = useState<string|number>(defaultValue || '');

  useEffect(() => {
    if (!isUndefined(value)) {
      setInputValue(value || '');
    }
  }, [value]);
  const [compositionValue, setCompositionValue] = useState<string | undefined>('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (!isComposition.current) {
      setInputValue(newValue);
      if (onChange) {
        onChange(newValue, e);
      }
    } else {
      setCompositionValue(newValue);
    }
  };

  const handleComposition = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.type === 'compositionend') {
      isComposition.current = false;
      setCompositionValue(undefined);
      if (onChange) {
        onChange(e.currentTarget.value, e);
      }
      setInputValue(e.currentTarget.value);
    } else {
      isComposition.current = true;
    }
  };

  const { width, height, border, borderRadius, ...restStyles } = style || {};

  const inputEl = useRef<any>(null);

  const [focus, setFocus] = useState(false);
  const wrapperClassnames = cn('apipost-input-inner-wrapper', {
    'apipost-input-inner-wrapper-focus': focus,
    'apipost-input-inner-wrapper-error': error,
    'apipost-input-inner-wrapper-disabled': disabled,
    [`apipost-input-inner-wrapper-${size}`]: true,
    'apipost-input-inner-wrapper-border': bordered,
  });

  const handleFocus = (e: any) => {
    setFocus(true);
    onFocus(e);
  };
  const handleBlur = (e:  React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur(e);
  };

  const handleClear = () => {
    onChange && onChange('', inputEl.current);
    setInputValue('');
    onClear && onClear();
  };

  // const inputProps = {
  //   value: compositionValue || inputValue || '',
  // };
  const getInputValue = () => {
    if (compositionValue) {
      return compositionValue;
    }
    if (!isUndefined(inputValue) && !forceUseValue) {
      return inputValue;
    }
    if (!isUndefined(value)) {
      return value;
    }
    return '';
  };
  return (
    <span
      ref={inputEl}
      className={cn(className, wrapperClassnames)}
      style={{ width, height, border, borderRadius }}
    >
      {beforeFix !== undefined && React.cloneElement(<>{beforeFix}</>, { key: 'beforeFix' })}
      <input
        spellCheck="false"
        className="apipost-input mousetrap"
        placeholder={placeholder}
        style={{ ...restStyles }}
        type={type}
        value={getInputValue()}
        // value={compositionValue !== '' ? compositionValue : value !== '' ? value : ''}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly={readonly}
        disabled={disabled}
        autoComplete="new-password"
        onCompositionStart={handleComposition}
        onCompositionUpdate={handleComposition}
        onCompositionEnd={handleComposition}
        onKeyDown={onKeyDown}
        {...restProps}
      />
      {afterFix !== undefined && React.cloneElement(<>{afterFix}</>, { key: 'afterFix' })}
      {allowClear && (
        <span onClick={handleClear} className="apipost-input-inner-clear">
          <Iconcancel />
        </span>
      )}
    </span>
  );
};

const InputComponent = Input as typeof Input & {
  Textarea: typeof Textarea;
};

InputComponent.Textarea = Textarea;

export default InputComponent;
