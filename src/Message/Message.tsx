import React from 'react';
import classnames from 'classnames';
import SuceesIcon from '../assets/message/success.svg';
import ErrorIcon from '../assets/message/error.svg';
import WarningIcon from '../assets/message/warning.svg';
import PromptIcon from '../assets/message/prompt.svg';
import { MessageProps } from './interface';

const apiMessage: React.FC<MessageProps> = (props) => {
  const { noticeKey, type, text, remove, showClose } = props;
  const iconType: any = {
    success: <SuceesIcon />,
    warning: <WarningIcon />,
    info: <PromptIcon />,
    error: <ErrorIcon />,
  };
  const closeOnclick = () => {
    if (remove) {
      remove({ key: noticeKey });
    }
  };
  const classNames = classnames({
    'apipost-message-content': true,
    [`apipost-message-${type}`]: true,
  });
  return (
    <div className={classNames}>
      <span className="apipost-message-icon">
        {/* <Icon component={icon} /> */}
        {iconType[type]}
      </span>
      <span className="apipost-message-text">{text}</span>
      {showClose ? (
        <span className="apipost-message-close" onClick={closeOnclick}>
          x
        </span>
      ) : (
        ''
      )}
    </div>
  );
};
export default apiMessage;
