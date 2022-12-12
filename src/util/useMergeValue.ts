import React, { useState, useEffect, useRef } from 'react';
import _isUndefined from 'lodash/isUndefined';

export default function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
  }
): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const { defaultValue, value } = props || {};
  const firstRenderRef = useRef(true);

  const [stateValue, setStateValue] = useState<T>(
    !_isUndefined(value) ? value : !_isUndefined(defaultValue) ? defaultValue : defaultStateValue
  );

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    // if (value === undefined) {
    //   setStateValue(value);
    // }
  }, [value]);

  const mergedValue = _isUndefined(value) ? stateValue : value;

  return [mergedValue, setStateValue, stateValue];
}
