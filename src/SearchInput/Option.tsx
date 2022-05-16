import React, { useContext } from 'react';
import cn from 'classnames';
import { OptionProps, ContextProps } from './interface';
import Context from './Context';

const Option: React.FC<OptionProps> = (props) => {
  const { style, className, disabled = false, value, children } = props;
  const {
    selectDisabled = false,
  } = useContext<ContextProps>(Context);
  // console.error("selectedValue", selectedValue)


  return (
    <div
      style={style}
      className={cn(className, {
        'select-option': true,
        'select-option-disabled': disabled === true,
        disabled: disabled === true,
      })}
    >
      {children}
    </div>
  );
};

export default Option;
