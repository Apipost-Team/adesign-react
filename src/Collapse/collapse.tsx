import React, { useState } from 'react';
import cn from 'classnames';
import { CollapseProps } from './interface';
import './style/index.less';
import Context from './Context';

const { Provider } = Context;
const Collapse: React.FC<CollapseProps> = (props) => {
  const { style, className, activeKey, defaultActiveKey, onChange } = props;

  const [_activeKey, setActiveKey] = useState<string | string[] | null | undefined>(
    defaultActiveKey
  );
  const mergedActiveKey = 'activeKey' in props ? activeKey : _activeKey;

  const handleUpdateKeys = (key: string | null) => {
    setActiveKey(key);
    if (typeof onChange === 'function') {
      onChange(key);
    }
  };

  return (
    <Provider
      value={{
        activeKeys: mergedActiveKey || null,
        handleUpdateKeys,
      }}
    >
      <div style={style} className={cn('apipost-collapse', className)}>
        {props?.children}
      </div>
    </Provider>
  );
};

export default Collapse;
