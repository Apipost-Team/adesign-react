import React, { FC, useEffect, useState, CSSProperties } from 'react';
import cn from 'classnames';
import { Button } from '../Button';
import TabCloseSvg from '../assets/tabpan-close.svg';
import { DrawerProps } from './interface';
import './index.less';

const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    visible,
    style,
    className,
    children,
    title,
    headerStyle,
    footer,
    footerStyle,
    okText = '确认',
    cancelText = '取消',
    placement = 'right',
    width = 300,
    height = 300,
    mask = true,
    maskClosable = true,
    closable = true,
    onOk,
    onCancel,
  } = props;

  const [drawerStyle, setDrawerStyle] = useState<CSSProperties>({});
  const [drawerPostion, setDrawerPostion] = useState('right');

  useEffect(() => {
    if (visible) {
      setDrawerStyle({ transform: 'translate(0, 0)' });
    }
    if (!visible) {
      if (placement === 'left') {
        setDrawerStyle({ transform: 'translate(-100%, 0)' });
      }
      if (placement === 'right') {
        setDrawerStyle({ transform: 'translate(100%, 0)' });
      }
      if (placement === 'top') {
        setDrawerStyle({ transform: 'translate(0, -100%)' });
      }
      if (placement === 'bottom') {
        setDrawerStyle({ transform: 'translate(0,100%)' });
      }
    }
  }, [visible]);

  return (
    <>
      {visible && (
        <>
          {!!mask && (
            <div
              className="apipost-drawer-mask"
              onClick={() => {
                maskClosable ? onCancel && onCancel() : null;
              }}
            ></div>
          )}
          <div
            className={cn(
              {
                'apipost-drawer': true,
                [`apipost-drawer-${placement}`]: true,
              },
              className
            )}
            style={{
              position: 'absolute',
              top: placement === 'left' || placement === 'right' ? 0 : undefined,
              left: placement === 'top' || placement === 'bottom' ? 0 : undefined,
              bottom: placement === 'bottom' ? 0 : undefined,
              height: placement === 'top' || placement === 'bottom' ? height : '100%',
              width: placement === 'top' || placement === 'bottom' ? '100%' : width,
              ...drawerStyle,
              ...style,
            }}
          >
            {title !== null && (
              <div className={cn({ 'apipost-drawer-header': true })} style={headerStyle}>
                {title}
              </div>
            )}
            {closable && (
              <div onClick={onCancel} className="apipost-drawer-close">
                <TabCloseSvg />
              </div>
            )}
            <div className="apipost-drawer-content">{children}</div>
            {footer !== null && (
              <div className={cn({ 'apipost-drawer-footer': true })} style={footerStyle}>
                {!footer ? (
                  <div>
                    <Button onClick={onOk} type="primary">
                      {okText}
                    </Button>
                    <Button onClick={onCancel}>{cancelText}</Button>
                  </div>
                ) : (
                  footer
                )}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Drawer;
