import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './index.less';
import { SwitchProps } from './interface';

const PERFIX = 'apipost-switch';
const Switch: React.FC<SwitchProps> = (props) => {
  const {
    defaultChecked = false,
    style,
    className,
    disabled = false,
    onChange = () => undefined,
    size = 'default',
  } = props;

  const [checked, setChecked] = useState<boolean>(defaultChecked);
  const mergedChecked = 'checked' in props ? props.checked : checked;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled === true) {
      return;
    }
    if (!('checked' in props)) {
      setChecked(!mergedChecked);
    }
    onChange && onChange(!mergedChecked, event);
  };

  return (
    <button
      className={classnames(className, {
        [PERFIX]: true,
        checked: mergedChecked === true,
        [size]: size !== undefined,
        disabled: disabled === true,
      })}
      style={style}
      onClick={handleClick}
    >
      <span className="cycle"></span>
    </button>
  );
};

export default Switch;
