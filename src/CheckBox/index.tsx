import React, { useState } from 'react';
import cn from 'classnames';
import Iconminus from '../assets/minus.svg';
import Iconcheck from '../assets/check.svg';
import './style/index.less';
import { CheckBoxProps, CheckStatus } from './interface';

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const {
    style,
    className,
    checked = CheckStatus.UNCHECK,
    defaultChecked=CheckStatus.UNCHECK,
    readOnly,
    onChange,
    disabled = false,
    ...restProps
  } = props;

  const [_checked, setChecked] = useState<CheckStatus>(defaultChecked);

  const mergeChecked = 'checked' in props ? checked : _checked;

  const handleOnChange = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (disabled || readOnly) {
      return;
    }
    if (mergeChecked === CheckStatus.CHECKED) {
      setChecked(CheckStatus.UNCHECK);
      onChange?.(CheckStatus.UNCHECK);
    } else {
      setChecked(CheckStatus.CHECKED);
      onChange?.(CheckStatus.CHECKED);
    }
  };

  return (
    <span
      {...restProps}
      style={style}
      className={cn(className, {
        'apipost-checkbox': true,
        readOnly: disabled !== true && readOnly,
        checked: mergeChecked === CheckStatus.CHECKED,
        halfcheck: mergeChecked === CheckStatus.HALFCHECK,
        disable: disabled,
      })}
      onClick={handleOnChange}
    >
      {mergeChecked === CheckStatus.CHECKED && <Iconcheck className="apipost-checkbox-svg" />}
      {mergeChecked === CheckStatus.HALFCHECK && <Iconminus className="apipost-checkbox-svg" />}
    </span>
  );
};


const CheckBoxComponent = CheckBox as typeof CheckBox & {
  CheckStatus:typeof CheckStatus
};

CheckBoxComponent.CheckStatus = CheckStatus;
export default CheckBoxComponent;



