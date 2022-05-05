import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import Button from '../Button';
import SvgCloseSvg from '../assets/tabpan-close.svg';
import './index.less';
import { ConfirmProps } from './interface';

const PERFIX = 'apipost-confirm';

let add = (props: ConfirmProps) => {};
export const ConfirmContainer = () => {
  const [visible, setVisible] = useState(false);
  const [props, setProps] = useState<ConfirmProps>({});

  const {
    title, // 标题
    content, // 内容
    cancelText, // 取消文字
    diyText, // 自定义文字
    okText, //
    onOk, // 确认事件
    onCancel, // 取消事件
    large = false, //
  } = props;

  useEffect(() => {
    add = (param) => {
      setProps(param);
      setVisible(true);
    };
  }, []);

  const handleCancel = () => {
    setVisible(false);
    onCancel && onCancel();
  };
  const handleOnOK = () => {
    setVisible(false);
    onOk && onOk();
  };
  const diyClick = () => {
    setVisible(false);
    props?.onDiy && props?.onDiy();
  };
  return visible
    ? ReactDOM.createPortal(
        <div className={`${PERFIX}-mask`}>
          <div
            className={cn({
              [`${PERFIX}-container`]: true,
              large,
            })}
          >
            <div className="svg-close" onClick={handleCancel}>
              <SvgCloseSvg />
            </div>
            <div className={`${PERFIX}-container-title`}>{title}</div>
            <div className={`${PERFIX}-container-content`}>{content}</div>
            <div className={`${PERFIX}-container-footer`}>
              <Button onClick={handleCancel}>{cancelText || '取消'}</Button>
              {props.diyText ? <Button onClick={diyClick}>{diyText}</Button> : null}
              <Button type="primary" onClick={handleOnOK}>
                {okText || '确定'}
              </Button>
            </div>
          </div>
        </div>,
        document.querySelector('body') as HTMLElement
      )
    : null;
};

// let el = document.querySelector(`.${PERFIX}`);
// if (!el) {
//   el = document.createElement('div');
//   el.className = PERFIX;
//   el.id = PERFIX;
//   document.body.append(el);
// }
const div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(<ConfirmContainer />, div);

const ModalConfirm = (props: ConfirmProps) => {
  add(props);
};

export default ModalConfirm;
