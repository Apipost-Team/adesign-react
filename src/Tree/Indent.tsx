import React, { useContext } from 'react';
import SvgArrowDown from '../assets/arrow-down.svg';
import TreeContext from './TreeContext';

const Indent = (props:any) => {
  const { nodeKey, perfixCls, nodeIndex, level, isLeaf } = props;
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
        list.push(<div key={i} className={`${perfixCls}-indent ${perfixCls}-indent-unit`} />);
      }
      if (showLine) {
        // 显示线条
        if (i < level) {
          list.push(<span key={i} className={`${perfixCls}-line`} />);
        }
      }

      if (!isLeaf && i === level) {
        // 如果是目录，展示目录信息
        list.push(
          <div key={`${i}expand`} className={`${perfixCls}-notleaf`}>
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

  return <div className={`${perfixCls}-indent`}>{renderIndents()}</div>;
};

export default Indent;
