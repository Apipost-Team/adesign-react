import React, { useCallback, useEffect, useState } from 'react';
import isNumber from 'lodash/isNumber';
import isFunction from 'lodash/isFunction';
import isNaN from 'lodash/isNaN';
import InputUpSvg from '../assets/inputUp.svg';
import InputDownSvg from '../assets/inputDown.svg';
import ArrowUp from '../assets/arrowUp.svg';
import ArrowDown from '../assets/arrowDown.svg';
import Input from '../Input';
import './index.less';
import { ruleType } from '../util/utils';

import { InputNumberProps } from './interface';

const ADD = 'add';
const SUBTRACT = 'subtract';

export const InputNumber: React.FC<InputNumberProps> = (props) => {
  const {
    defaultValue = 0,
    min = 100000,
    max = Number.MAX_SAFE_INTEGER,
    onChange,
    disabled,
    modetype = 'input',
    type = 'row',
  } = props;
  const [value, setValue] = useState(defaultValue);
  const mergedValue = 'value' in props ? props.value : value;

  const handleInputChange = (newVal: string) => {
    if (isNaN(parseInt(newVal))) {
      setValue(newVal);
      return;
    }

    let result = parseInt(newVal);
    if (newVal === '' || newVal === '0' || newVal === '00') {
      result = 0;
    }
    if (result > max) {
      result = max;
    }
    if (result < min && min > 0) {
      result = min;
    }
    setValue(result);
    if (isFunction(onChange)) {
      onChange(result);
    }
  };

  const handleChangeValue = (types = 'add') => {
    let result: number = mergedValue;
    if (types === 'add') {
      result += 1;
    } else {
      result -= 1;
    }
    if (result > max) {
      return;
    }
    if (result < min) {
      return;
    }
    setValue(result);
    if (isFunction(onChange)) {
      onChange(result);
    }
  };

  const handleInputBlur = (e) => {
    const val = e.target.value;
    const validValue = parseInt(val);
    if (isNaN(validValue)) {
      setValue(0);
      if (isFunction(onChange)) {
        onChange(0);
      }
      return;
    }
    let result = validValue;
    if (result > max) {
      result = max;
    }
    if (result < min) {
      result = min;
    }
    setValue(result);
    if (isFunction(onChange)) {
      onChange(result);
    }
  };

  const renderType = (tp: string) => {
    if (tp === 'row') {
      return (
        <>
          <div
            onClick={handleChangeValue.bind(null, 'subtract')}
            className="apipost-input-number-step"
          >
            <ArrowDown />
          </div>
          <div style={{ flex: 1, height: '100%' }}>
            {modetype === 'input' ? (
              <Input
                value={`${mergedValue}`}
                disabled={disabled}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
            ) : (
              <div>{`${mergedValue}`}</div>
            )}
          </div>
          <div onClick={handleChangeValue.bind(null, 'add')} className="apipost-input-number-step">
            <ArrowUp />
          </div>
        </>
      );
    }
    if (tp === 'column') {
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <InputUpSvg
            onClick={handleChangeValue.bind(null, 'add')}
            className="cur_pointer column_before"
          />
          <Input
            value={`${mergedValue}`}
            disabled={disabled}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
          <InputDownSvg
            onClick={handleChangeValue.bind(null, 'subtract')}
            className="cur_pointer column_after"
          />
        </div>
      );
    }
  };
  return <div className="apipost-input-number">{renderType(type)}</div>;
};

export default InputNumber;
