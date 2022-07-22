import React from 'react';
import cn from 'classnames';
import { CollapseItemProps } from './interface';
import './index.less';
import Context from './Context';
import SvgRight from '../assets/arrow-right3.svg';

const CollapseItem: React.FC<CollapseItemProps> = (props) => {
  const { name, headerStyle, headerClassName, header } = props;

  const { activeKeys, handleUpdateKeys } = React.useContext(Context);

  const handleToggleVisible = () => {
    // 如果activeKeys是数组

    if (Array.isArray(activeKeys)) {
      activeKeys.includes(name)
        ? handleUpdateKeys(activeKeys.filter((d) => d !== name))
        : handleUpdateKeys([...activeKeys, name]);
    } else {
      activeKeys !== name ? handleUpdateKeys(name) : handleUpdateKeys(null);
    }
  };

  const isCollapse =
    (Array.isArray(activeKeys) && activeKeys.includes(name)) ||
    (typeof activeKeys === 'string' && activeKeys === name && activeKeys !== '');

  return (
    <div style={headerStyle} className={cn('apipost-collapse-item', headerClassName)}>
      <div className="collapse-header" onClick={handleToggleVisible}>
        <>{header}</>
        <SvgRight
          className={cn('collapse-arrow', {
            arrowdown: isCollapse,
          })}
        />
      </div>
      {isCollapse && <div className="collapse-body">{props.children}</div>}
    </div>
  );
};

export default CollapseItem;
