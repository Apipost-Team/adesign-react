import React, { useState, forwardRef } from 'react';
import classnames from 'classnames';
import { TextareaProps, TextareaRef } from './interface';
import Union from '../assets/Union.svg';
import './style/index.less';
import { isFunction } from 'lodash';

const Textarea: React.ForwardRefRenderFunction<TextareaRef, TextareaProps> = (props, ref) => {
  const {
    style,
    className,
    value,
    defaultValue,
    maxLength,
    allowClear,
    readonly,
    placeholder,
    width,
    height = 80,
    lineHeight = 20,
    autoFocus = false,
    bordered = true,
    onChange,
    onBlur = () => { },
    ...restProps
  } = props;

  const textareaWrapperStyle = {
    width,
    height,
  };

  const textareaClassNames = classnames(
    {
      mousetrap: true,
      'apipost-textarea': true,
      'apipost-textarea-border': bordered,
    },
    className
  );

  const handleChange = (e: any) => {
    if (isFunction(onChange)) {
      onChange(e?.target?.value, e);
    }
  };

  return (
    <div className="apipost-textarea-wrapper" style={textareaWrapperStyle}>
      <textarea
        ref={ref}
        spellCheck="false"
        className={textareaClassNames}
        maxLength={maxLength}
        placeholder={placeholder}
        readOnly={readonly}
        style={style}
        autoFocus={autoFocus}
        value={value}
        onChange={handleChange}
        {...restProps}
      >
        {value}
      </textarea>
    </div>
  );
};
export default forwardRef(Textarea);
