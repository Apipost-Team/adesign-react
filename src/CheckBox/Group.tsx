import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CheckboxGroupContext } from './checkboxContext';
import { CheckBoxGroupProps } from './interface';

const Group: React.FC<CheckBoxGroupProps> = (props) => {
  const { children, onChange, value, disabled } = props;
  let { name } = props;

  const [checkValue, setCheckValue] = useState([] || '');
  if (!name) {
    name = uuidv4();
  }
  useEffect(() => {
    setCheckValue(value);
  }, [value]);

  const handleCheckBoxChange = (selectvalue: any, checked: boolean, e: any) => {
    setCheckValue(selectvalue);
    if (onChange) onChange(selectvalue, checked);
  };

  const contextProp = {
    onChange: handleCheckBoxChange,
    value: checkValue,
    disabled,
    name,
  };

  return (
    <CheckboxGroupContext.Provider value={contextProp}>{children}</CheckboxGroupContext.Provider>
  );
};

export default Group;
