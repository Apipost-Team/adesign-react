import React, { useState } from 'react';
import cn from 'classnames';
import { CardProps } from './interface';
import SvgClose from '../assets/close.svg';
import Button from '../Button';
import './style/index.less';
import { isFunction } from 'lodash';

const Card: React.FC<CardProps> = (props) => {
  const { style, className, bordered, onClose, extra } = props;

  const [visible, setVisible] = useState<boolean>(true);

  const handleClose = () => {
    setVisible(false);
    if (isFunction(onClose)) {
      onClose();
    }
  };

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
            <Button
              className="btn-card-close"
              type="info"
              size="mini"
              icon={<SvgClose />}
              onClick={handleClose}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Card;
