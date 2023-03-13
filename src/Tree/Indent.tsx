import React, { useContext } from 'react';
import SvgArrowDown from '../assets/arrow-down.svg';
import TreeContext from './TreeContext';

const Indent = (props:any) => {
  const { nodeKey, prefixCls, nodeIndex, level, isLeaf } = props;
  const { handleExpandItem, showLine } = useContext(TreeContext);

  const handleToggleExpand = (ev:React.MouseEvent) => {
    handleExpandItem(nodeKey, nodeIndex);
    ev.stopPropagation();
  };

  const renderIndents = () => {
    const list = [];
    for (let i = 0; i <= level; i++) {
      if (!showLine && i < level) {
        // 如果不显示线条
        list.push(<div key={i} className={`${prefixCls}-indent ${prefixCls}-indent-unit`} />);
      }
      if (showLine) {
        // 显示线条
        if (i < level) {
          list.push(<span key={i} className={`${prefixCls}-line`} />);
        }
      }

      if (!isLeaf && i === level) {
        // 如果是目录，展示目录信息
        list.push(
          <div key={`${i}expand`} className={`${prefixCls}-notleaf`}>
            <span className="foldbtn" onClick={handleToggleExpand}>
              {props.isExpand === true ? (
                <SvgArrowDown />
              ) : (
                <SvgArrowDown style={{ transform: 'rotate(-90deg)' }} />
              )}
            </span>
          </div>
        );
      }
    }
    return list;
  };

  return <div className={`${prefixCls}-indent`}>{renderIndents()}</div>;
};

export default Indent;
