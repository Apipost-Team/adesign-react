import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Message from './Message';
import './index.less';

let add: (notice: any) => void;
export const MessageContainer = () => {
  const [notices, setNotices] = useState<any[]>([]);
  const maxCount = 1;
  const defalutTimeout = 3 * 1000;
  const remove = (notice: any) => {
    const { key } = notice;
    setNotices((preNotices) => preNotices.filter(({ key: itemKey }) => key !== itemKey));
  };
  add = (notice) => {
    setNotices((preNotices) => [...preNotices, notice]);
    setTimeout(
      () => {
        remove(notice);
      },
      notice.timeout ? notice.timeout * 1000 : defalutTimeout
    );
  };

  useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices;
      remove(firstNotice);
    }
  }, [notices]);
  return (
    <>
      {notices.map(({ text, key, type }) => (
        <div className="apipost-message" key={key}>
          <Message key={key} noticeKey={key} type={type} text={text} remove={remove} />
        </div>
      ))}
    </>
  );
};

let el = document.querySelector('.apipost-message-group');
if (!el) {
  el = document.createElement('div');
  el.className = 'apipost-message-group';
  el.id = 'apipost-message-group';
  document.body.append(el);
}

ReactDOM.render(<MessageContainer />, el);
export const message = (type: string, text: string, timeout?: number) => {
  if (text && text.length > 0) {
    add({ key: uuidv4(), type, text, timeout });
  }
};
export default message;
