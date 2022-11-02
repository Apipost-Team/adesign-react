import React from 'react';
import classnames from 'classnames';
import merge from 'lodash/merge';
import isUndefined from 'lodash/isUndefined';
import { ButtonProps } from './interface';
import { ConfigContext } from '../ConfigProvider';
import './style/index.less';

export const Button = React.forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  const globalProps = React.useContext(ConfigContext);

  const {
    children = isUndefined(props?.icon) ? 'default' : undefined,
    prefixCls = 'apipost',
    onClick,
    disabled = false,
    style = {},
    size = 'middle',
    type = 'default',
    shape = 'square',
    className,
    afterFix,
    preFix,
    icon,
    ...restProps
  } = merge({ size: globalProps.size, prefixCls: globalProps.prefixCls }, props);

  const tempClassName = {
    [`${prefixCls}-btn`]: true,
    [`${prefixCls}-btn-${type}`]: true,
    [`${prefixCls}-btn-${size}`]: true,
    [`${prefixCls}-btn-${shape}`]: shape !== undefined,
    [`${prefixCls}-btn-${size}-${shape}`]: shape !== undefined,
    [`${prefixCls}-btn-disabled`]: disabled,
    [`${prefixCls}-btn-had-icon`]: props.icon !== undefined,
  };
  const btnclassName = classnames(className, tempClassName);
  const handleClick = (e: any) => {
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  return (
    <div {...restProps} ref={ref} className={btnclassName} onClick={handleClick} style={style}>
      {icon}
      <React.Fragment key="prefix"> {preFix !== undefined && <>{preFix}</>}</React.Fragment>
      <React.Fragment key="children">{children}</React.Fragment>
      <React.Fragment key="afterFix">{afterFix !== undefined && <>{afterFix}</>}</React.Fragment>
    </div>
  );
});

export default Button;
