import React, { useEffect, useState, useRef, useLayoutEffect, useImperativeHandle } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import './style/index.less';
import { ShowProps } from './interface';

const PERFIX = 'apipost-modalshow';

let add: (props: ShowProps, pos: any, ref: any) => void;
export const ShowContainer = () => {
  const [visible, setVisible] = useState(false);
  const [props, setProps] = useState<ShowProps>({});
  const [position, setPosition] = useState<any>({});
  const [mref, setMref] = useState(null);
  const [direction, setDirection] = useState('bottom');
  const { outsideClose = true } = props;

  const ShowRef = useRef<any>(null);

  const handleClickOutside = (e: any) => {
    if (ShowRef.current === null || !outsideClose) {
      return;
    }
    const result = findDOMNode(ShowRef.current)?.contains(e.target);
    if (!result) {
      setVisible(false);
    }
  };

  useImperativeHandle(mref, () => ({
    hideMenu() {
      setVisible(false);
    },
  }));

  useEffect(() => {
    add = (param, pos, modalref) => {
      setProps(param);
      setVisible(true);
      setMref(modalref);
      setPosition(pos);
    };
    const rootDiv = document.getElementById('root');
    rootDiv && rootDiv.addEventListener('mousedown', (e) => handleClickOutside(e), false);
    return () => {
      rootDiv && rootDiv.removeEventListener('mousedown', (e) => handleClickOutside(e), false);
    };
  }, []);

  useLayoutEffect(() => {
    const documehtHeight = window.document.documentElement.offsetHeight;
    const menuHeight = ShowRef.current.offsetHeight;
    if (position.y > documehtHeight - menuHeight) {
      setDirection('bottom');
    } else {
      setDirection('top');
    }
  }, [position, ShowRef]);

  const menuStyle: any = { visibility: visible ? 'visible' : 'hidden', left: position?.x || 0 };
  if (direction === 'top') {
    menuStyle.top = position?.y || 0;
  }
  if (direction === 'bottom') {
    const bottom = window.document.documentElement.offsetHeight - (position?.y || 0);
    menuStyle.bottom = bottom;
  }
  return (
    <div ref={mref}>
      <div className="modal-show-container delay-visibility" ref={ShowRef} style={menuStyle}>
        {props?.props?.children}
      </div>
    </div>
  );
};

let el = document.querySelector(`.${PERFIX}`);
if (!el) {
  el = document.createElement('div');
  el.className = PERFIX;
  el.id = PERFIX;
  document.body.append(el);
}

ReactDOM.render(<ShowContainer />, el);

const ModalShow = (props: ShowProps, pos: any, modalRef: any) => {
  add(props, pos, modalRef);
};

export default ModalShow;
