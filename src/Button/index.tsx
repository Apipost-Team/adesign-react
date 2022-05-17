import React from 'react';
import classnames from 'classnames';
import './index.less';
import { ButtonProps } from './interface';

export const Button = React.forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  const {
    children = 'default',
    onClick,
    disabled = false,
    style = {},
    size = 'middle',
    type = 'default',
    shape = 'rectangle',
    className,
    afterFix,
    preFix,
    ...restProps
  } = props;
  const tempClassName = {
    'apipost-btn': true,
    [`apipost-btn-${type}`]: true,
    [`apipost-btn-${size}`]: true,
    [`apipost-btn-${shape}`]: shape !== undefined,
    [`apipost-btn-${size}-${shape}`]: shape !== undefined,
    'apipost-btn-disabled': disabled,
  };
  const btnclassName = classnames(className, tempClassName);
  const handleClick = (e: any) => {
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  return (
    <div {...restProps} ref={ref} className={btnclassName} onClick={handleClick} style={style}>
      {preFix !== undefined && <>{preFix}&nbsp;</>}
      {children}
      {afterFix !== undefined && <>{afterFix}&nbsp;</>}
    </div>
  );
});

export default Button;
