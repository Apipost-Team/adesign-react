import React, { useContext } from 'react';
import classnames from 'classnames';
import TabsContext from './context';
import TabRemove from '../assets/close.svg';
import './index.less';
import { TabPanProps, TabsContextProps } from './interface';

const TabPan: React.FC<TabPanProps> = (props) => {
  const {
    id,
    style,
    className,
    children,
    title,
    disabled = false,
    removable,
    ...restProps
  } = props;
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
  };

  const tempClassName = classnames(className, {
    'tabs-item': true,
    active: activeId === id,
    disable: disabled,
    removable: removable === true,
  });

  return (
    <>
      <div
        style={{
          ...style,
          width: itemWidth,
        }}
        {...restProps}
        onClick={handleChange}
        className={tempClassName}
      >
        {title}
        {removable && <TabRemove className="item-close" onClick={handleRemove} />}
      </div>
      {/* {children} */}
    </>
  );
};

export default TabPan;
