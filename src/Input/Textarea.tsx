import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { TextareaProps } from './interface';
import Union from '../assets/Union.svg';
import './Textarea.less';

const Textarea: React.FC<TextareaProps> = (props) => {
  const {
    style,
    className,
    value,
    autoSize = false,
    defaultValue,
    maxLength,
    allowClear,
    readonly,
    placeholder,
    width,
    height = 80,
    lineHeight = 20,
    autoFocus = false,
    onChange,
    onPressEnter,
    onBlur = () => {},
    autoHeight = true,
  } = props;

  const textareaRef: any = useRef<HTMLTextAreaElement>();

  const [textareaValue, setTextareaValue] = useState(defaultValue || value);
  useEffect(() => {
    setTextareaValue(value);
  }, [value]);

  const [textareaStyle, setTextareaStyle] = useState<any>({
    height: height || 26,
    lineHeight: `${lineHeight}px`,
  });
  useEffect(() => {
    let teamStyle: any;
    teamStyle = {
      minHeight: 40,
      maxHeight: 100,
    };
    if (autoSize) {
      if (typeof autoSize === 'object') {
        const { minRows, maxRows } = autoSize;
        if (minRows) {
          teamStyle.minHeight += (minRows - 1) * 22;
        }
        if (maxRows) {
          teamStyle.maxHeight += (maxRows - 1) * 22;
        }
      } else if (typeof autoSize === 'boolean') {
        if (autoSize) {
          teamStyle.maxHeight = 99999;
        }
      }
    } else {
      teamStyle = {};
    }
    setTextareaStyle({
      ...teamStyle,
      ...textareaStyle,
    });
  }, []);
  const textareaWrapperStyle = {
    width,
    height,
  };

  const onKeyDownchange = (e: any) => {
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
  };
  const textareaClassNames = classnames(
    {
      'apipost-textarea': true,
    },
    className
  );
  const AutoHeight = (e: any) => {
    if (!autoHeight) return;
    const StylelineHeight = +e.target.style.lineHeight.replace('px', '');
    let lines = Math.round(textareaRef.current.scrollHeight / StylelineHeight);
    // const splieLength = e.target.value.split(/\r*\n/);
    if (e.target.value === '') {
      lines = 1;
    }

    setTextareaStyle({
      ...textareaStyle,
      scrollTop: 0,
      height: StylelineHeight * lines < height ? height : StylelineHeight * lines + 10,
      zIndex: 101,
      position: 'absolute',
      overflow: 'hidden',
    });
  };
  const handleBlur = (e: any) => {
    onBlur(e);
    setTextareaStyle({
      ...textareaStyle,
      zIndex: '99',
      height,
    });
  };
  const TextareaElement = (
    <textarea
      ref={textareaRef}
      spellCheck="false"
      className={textareaClassNames}
      maxLength={maxLength}
      placeholder={placeholder}
      readOnly={readonly}
      style={{ ...textareaStyle, ...style }}
      autoFocus={autoFocus}
      onFocus={(e) => {
        AutoHeight(e);
      }}
      autoheight
      onBlur={handleBlur}
      onKeyDown={(e) => onKeyDownchange(e)}
      value={textareaValue}
      onChange={(e) => {
        setTextareaValue(e.target.value);
        AutoHeight(e);
        if (onChange) {
          onChange(e.target.value, e);
        }
      }}
      onInput={AutoHeight}
    >
      {textareaValue}
    </textarea>
  );
  return (
    <div className="apipost-textarea-wrapper" style={textareaWrapperStyle}>
      {TextareaElement}
      <span
        className="apiinput-clear-icon"
        onClick={() => {
          setTextareaValue('');
        }}
      >
        {allowClear ? <Union /> : ''}
      </span>
    </div>
  );
};
export default Textarea;
