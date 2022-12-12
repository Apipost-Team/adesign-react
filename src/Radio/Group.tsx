import React, { useState, useEffect } from "react";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import { RadioContext } from "./RadioContext";
import { RadioGroupProps } from "./interface";

const prefixCls = "apipost-radio-group";

const Group: React.FC<RadioGroupProps> = (props) => {
  const {
    style,
    className,
    children,
    onChange,
    value,
    disabled,
    type = "radio",
  } = props;
  let { name } = props;

  const [radioValue, setRadioValue] = useState(value || "");
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
    type,
  };

  return (
    <RadioContext.Provider value={contextProp}>
      <div
        className={cn(prefixCls, className, {
          [`${prefixCls}-button`]: type !== "radio",
        })}
        style={{ ...style }}
      >
        {children}
      </div>
    </RadioContext.Provider>
  );
};

export default Group;
