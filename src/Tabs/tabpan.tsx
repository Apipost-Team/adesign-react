import React, { useContext } from 'react';
import classnames from 'classnames';
import TabsContext from './context';
import TabRemove from '../assets/close.svg';
import './style/index.less';
import { TabPanProps, TabsContextProps } from './interface';

const TabPan: React.FC<TabPanProps> = (props) => {
  const { id, style, className, title, disabled = false, removable, ...restProps } = props;
  const { itemWidth, activeId, handleSwitchTab, handleRemoveTab } =
    useContext<TabsContextProps>(TabsContext);

  // 切换tabitem
  const handleChange = () => {
    if (!disabled) {
      handleSwitchTab(id, props);
    }
  };

  // 移除tabitem
  const handleRemove = (ev: Event) => {
    handleRemoveTab(id, props);
    ev.stopPropagation();
    ev.preventDefault();
  };

  const tempClassName = classnames(className, {
    'tabs-item': true,
    active: activeId === id,
    disable: disabled,
    removable: removable === true,
  });

  return (
    <div
      style={{
        ...style,
        width: itemWidth,
      }}
      {...restProps}
      onClick={handleChange}
      className={tempClassName}
    >
      <React.Fragment key="tabTitle">{title}</React.Fragment>
      {removable && <TabRemove key="tabBtn" className="item-close" onClick={handleRemove} />}
    </div>
  );
};

export default TabPan;
