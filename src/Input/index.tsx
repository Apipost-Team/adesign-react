import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';
import cn from 'classnames';
import { InputProps } from './interface';
import Textarea from './Textarea';
import './index.less';
import Iconcancel from '../assets/cancel.svg';

export const Input = React.forwardRef<any, InputProps>((props, inputRef) => {
  const {
    value,
    onChange,
    className,
    style,
    size = 'large',
    placeholder,
    beforeFix = null,
    afterFix = null,
    disabled = false,
    error,
    onClear,
    onBlur = () => undefined,
    onFocus = () => undefined,
    onKeyDown = () => undefined,
    readonly = false,
    allowClear,
    ...restProps
  } = props;

  const isComposition = useRef(false);
  const [inputValue, setInputValue] = useState(value || '');

  useEffect(() => {
    setInputValue(value);
  }, [value]);
  const [compositionValue, setCompositionValue] = useState<string | undefined>('');

  const handleChange = (e: React.FormEvent<HTMLement>) => {
    const newValue = e.currentTarget.value;
    if (!isComposition.current) {
      if (onChange) {
        onChange(newValue, e);
        return;
      }
      setInputValue(newValue);
    } else {
      setCompositionValue(newValue);
    }
  };

  const handleComposition = (e: React.FormEvent<HTMLement>) => {
    if (e.type === 'compositionend') {
      isComposition.current = false;
      setCompositionValue(undefined);
      if (onChange) {
        onChange(e.currentTarget.value, e);
        return;
      }
      setInputValue(e.currentTarget.value);
    } else {
      isComposition.current = true;
    }
  };

  const { width, height, border, borderRadius, ...restStyles } = style || {};

  const [focus, setFocus] = useState(false);
  const wrapperClassnames = cn('apipost-input-inner-wrapper', {
    'apipost-input-inner-wrapper-focus': focus,
    'apipost-input-inner-wrapper-error': error,
    'apipost-input-inner-wrapper-disabled': disabled,
    [`apipost-input-inner-wrapper-${size}`]: true,
  });

  const handleFocus = (e: any) => {
    setFocus(true);
    onFocus(e);
  };
  const handleBlur = (e: any) => {
    setFocus(false);
    onBlur(e);
  };

  const handleClear = () => {
    onChange && onChange('', inputRef?.current);
    setInputValue('');
    onClear && onClear();
  };

  const inputProps = {
    value: compositionValue || inputValue || '',
  };

  return (
    <span
      ref={inputRef}
      className={cn(className, wrapperClassnames)}
      style={{ width, height, border, borderRadius }}
    >
      {beforeFix !== undefined && beforeFix}
      <input
        {...restProps}
        className="apipost-input"
        spellCheck="false"
        placeholder={placeholder}
        style={{ ...restStyles }}
        // value={compositionValue !== '' ? compositionValue : inputValue !== '' ? inputValue : ''}
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
        {...inputProps}
      />
      {afterFix !== undefined && afterFix}
      {allowClear && (
        <span onClick={handleClear} className="apipost-input-inner-clear">
          <Iconcancel />
        </span>
      )}
    </span>
  );
});

const InputComponent = Input as typeof Input & {
  Textarea: typeof Textarea;
};

InputComponent.Textarea = Textarea;

export default InputComponent;
