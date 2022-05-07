import React, { useState } from 'react';
import cn from 'classnames';
import { CardProps } from './interface';
import SvgClose from '../assets/close.svg';
import './index.less';

const Card: React.FC<CardProps> = (props) => {
  const { style, className, bordered, extra } = props;

  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      {visible && (
        <div
          style={{
            ...style,
            borderWidth: bordered ? '1px' : 0,
          }}
          className={cn('apipost-card', className)}
        >
          {props.children}
          {extra !== undefined ? (
            extra
          ) : (
            <span
              onClick={() => {
                setVisible(false);
              }}
              className="btn-card-close"
            >
              <SvgClose />
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
