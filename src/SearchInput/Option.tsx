import React from 'react';
import cn from 'classnames';
import { OptionProps } from './interface';

const Option: React.FC<OptionProps> = (props) => {
  const { style, className, children } = props;

  return (
    <div
      style={style}
      className={cn(className, {
        'select-option-inner': true,
      })}
    >
      {children}
    </div>
  );
};

export default Option;
