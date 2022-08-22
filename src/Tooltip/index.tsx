import React from 'react';
import cn from 'classnames';
import { TooltipProps } from './interface';
import Trigger from '../Trigger';
import './index.less';

const PERFIX = 'apipost-tooltip-popup';

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const {
    style,
    className,
    trigger = 'hover',
    placement = 'top',
    content,
    children,
    offset = [6, 6],
    showArrow = true,
    bgColor = '#1d2129', // 背景色
  } = props;

  // 获取箭头颜色
  const getPopupArrawColor = () => {
    return {
      borderLeftColor: ['left', 'left-start', 'left-end'].includes(placement) ? bgColor : undefined,
      borderTopColor: ['top', 'top-start', 'top-end'].includes(placement) ? bgColor : undefined,
      borderRightColor: ['right', 'right-start', 'right-end'].includes(placement)
        ? bgColor
        : undefined,
      borderBottomColor: ['bottom', 'bottom-start', 'bottom-end'].includes(placement)
        ? bgColor
        : undefined,
    };
  };

  const getPopup = () => {
    if (
      content === undefined ||
      typeof content === 'string' ||
      content.type === undefined ||
      content.type.toString() === React.Fragment.toString()
    ) {
      return (
        <div>
          {content}
          {showArrow === true && (
            <span
              style={{
                ...getPopupArrawColor(),
              }}
              className={cn('tooltip-arrow', {
                [placement]: true,
              })}
            ></span>
          )}
        </div>
      );
    }
    // console.log(content, '000000');
    return content;
  };

  return (
    <>
      <Trigger
        ref={ref}
        style={{
          ...style,
          backgroundColor: bgColor,
        }}
        offset={offset}
        placement={placement}
        popup={getPopup()}
        trigger={trigger}
        className={cn(PERFIX, className)}
      >
        {children}
      </Trigger>
    </>
  );
});

export default Tooltip;
