import React, { useContext } from 'react';
import cn from 'classnames';
import { OptionProps, ContextProps } from './interface';
import Context from './Context';

const Option: React.FC<OptionProps> = (props) => {
  const { style, className, disabled = false, value, children } = props;
  const {
    // selectedValue,
    selectDisabled = false,
    onOptionClick,
  } = useContext<ContextProps>(Context);
  // console.error("selectedValue", selectedValue)

  const handleOptionClick = () => {
    if (disabled || selectDisabled) {
      return;
    }
    onOptionClick(children as string, value);
  };

  return (
    <div
      style={style}
      onClick={handleOptionClick}
      className={cn(className, {
        'select-option': true,
        'select-option-disabled': disabled === true,
        // selected: selectedValue === value,
        disabled: disabled === true,
      })}
    >
      {children}
    </div>
  );
};

export default Option;
