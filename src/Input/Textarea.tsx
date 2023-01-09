import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { TextareaProps } from './interface';
import Union from '../assets/Union.svg';
import './style/index.less';

const Textarea: React.FC<TextareaProps> = (props) => {
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
    onBlur = () => {},
    ...restProps
  } = props;

  const textareaRef: any = useRef<HTMLTextAreaElement>();

  const [textareaValue, setTextareaValue] = useState(defaultValue || value);

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

  return (
    <div className="apipost-textarea-wrapper" style={textareaWrapperStyle}>
      <textarea
        ref={textareaRef}
        spellCheck="false"
        className={textareaClassNames}
        maxLength={maxLength}
        placeholder={placeholder}
        readOnly={readonly}
        style={style}
        autoFocus={autoFocus}
        value={textareaValue}
        onChange={(e) => {
          setTextareaValue(e.target.value);
          if (onChange) {
            onChange(e.target.value, e);
          }
        }}
        {...restProps}
      >
        {textareaValue}
      </textarea>
    </div>
  );
};
export default Textarea;
