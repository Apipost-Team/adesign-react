import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RadioContext } from './RadioContext';
import { RadioGroupProps } from './interface';

const Group: React.FC<RadioGroupProps> = (props) => {
  const { style, className, children, onChange, value, disabled } = props;
  let { name } = props;

  const [radioValue, setRadioValue] = useState(value || '');
  if (!name) {
    name = uuidv4();
  }
  useEffect(() => {
    setRadioValue(value);
  }, [value]);

  const handleRadioChange = (selectvalue: any) => {
    setRadioValue(selectvalue);
    if (onChange) onChange(selectvalue);
  };

  const contextProp = {
    onChange: handleRadioChange,
    value: radioValue,
    disabled,
    name,
  };

  return <RadioContext.Provider value={contextProp}>{children}</RadioContext.Provider>;
};

export default Group;
