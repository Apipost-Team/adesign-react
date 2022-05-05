import React, { useCallback, useEffect, useState } from 'react';
import isNumber from 'lodash/isNumber';
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
    value = '0',
    min = -Infinity,
    max = Infinity,
    onChange,
    disabled,
    modetype = 'input',
    type = 'row',
  } = props;
  const [values, setValues] = useState(value || '0');

  const handleChangeValue = (types = ADD) => {
    let val: any;
    val = values;
    switch (types) {
      case SUBTRACT:
        if ((!min && min !== 0) || values > min) {
          val--;
        }
        break;
      default:
        if ((!max && max !== 0) || values < max) {
          val++;
        }
        break;
    }
    if (onChange) {
      onChange(val);
      return;
    }
    if (val === 0 || val === '0') {
      val = '0';
    }
    setValues(val);
  };
  useEffect(() => {
    onChange && onChange(values);
  }, [values]);
  useEffect(() => {
    if (ruleType(+value) !== 'Number') {
      throw new Error('该数据类型不对');
    }
    setValues(value);
  }, [value]);
  const getFinalValue = useCallback(
    (value) => {
      let finalValue = value;
      if (finalValue === '' || finalValue === 0) {
        return '0';
      }
      finalValue = isNumber(finalValue) ? Number(finalValue) : values;

      if (finalValue < min) {
        finalValue = min;
      }

      if (finalValue > max) {
        finalValue = max;
      }

      return finalValue;
    },
    [min, max]
  );
  const handleInputChange = (e: any) => {
    const val = e;
    console.log(val, !val);

    // eslint-disable-next-line eqeqeq
    if (val === '' || val === 0 || val === '0' || val == '00') {
      setValues('0');
      return;
    }
    if (!/(^[0-9]\d*$)/.test(val)) {
      return;
    }
    if (val > max) {
      setValues(max);
    }
    if (val > max || val < min) {
      return;
    }
    if (val !== 0 || val !== '0') {
      setValues(parseInt(val, 10));
    }
  };

  const renderType = (tp: string) => {
    if (tp === 'row') {
      return (
        <>
          <div onClick={() => handleChangeValue(SUBTRACT)} className="apipost-input-number-step">
            <ArrowDown />
          </div>
          <div style={{ flex: 1, height: '100%' }}>
            {modetype === 'input' ? (
              <Input value={values} disabled={disabled} onChange={handleInputChange} />
            ) : (
              <div>{values}</div>
            )}
          </div>
          <div onClick={() => handleChangeValue(ADD)} className="apipost-input-number-step">
            <ArrowUp />
          </div>
        </>
      );
    }
    if (tp === 'column') {
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <InputUpSvg
            onClick={() => handleChangeValue(ADD)}
            className="cur_pointer column_before"
          />
          <Input value={values} disabled={disabled} onChange={handleInputChange} />
          <InputDownSvg
            onClick={() => handleChangeValue(SUBTRACT)}
            className="cur_pointer column_after"
          />
        </div>
      );
    }
  };
  return <div className="apipost-input-number">{renderType(type)}</div>;
};

export default InputNumber;
