import React from 'react';
import cn from 'classnames';
import { DropdownProps } from './interface';
import Trigger from '../Trigger';
import './style/index.less';

const PERFIX = 'apipost-dropdown';

const DropDown = React.forwardRef<any, DropdownProps>((props, ref) => {
  const {
    style,
    className,
    trigger = 'click',
    placement = 'bottom-start',
    outsideClose = true,
    onVisibleChange = () => undefined,
    content,
    offset = [0, 0],
    children,
  } = props;

  const getPopup = () => {
    if (content.type === undefined || content.type.toString() === React.Fragment.toString()) {
      return <div>{content}</div>;
    }
    return content;
  };
  return (
    <>
      <Trigger
        ref={ref}
        style={style}
        placement={placement}
        offset={offset}
        outsideClose={outsideClose}
        popup={getPopup()}
        trigger={trigger}
        className={cn(PERFIX, className)}
        onVisibleChange={onVisibleChange}
      >
        {children}
      </Trigger>
    </>
  );
});

export default DropDown;
