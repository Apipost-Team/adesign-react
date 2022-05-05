import React, { useContext } from 'react';
import classNames from 'classnames';
import Indent from './Indent';
import TreeContext from './TreeContext';
import CheckBox from '../CheckBox';
import { CheckStatus } from '../CheckBox/interface';

const TreeNode = (props) => {
  const { perfixCls, data, disabled, children, parent, ...restNodeProps } = props;

  const {
    enableCheck,
    checkboxReadOnly,
    handleCheckNode,
    checkedKeys,
    halfCheckedKeys,
    selectedKeys,
    render,
    onRightClick = () => undefined,
    onNodeClick = () => undefined,
    onMultiSelect = () => undefined,
  } = useContext(TreeContext);

  const nodePerfixCls = `${perfixCls}-node`;

  const getCheckStatus = () => {
    if (halfCheckedKeys.includes(props.nodeKey)) {
      return CheckStatus.HALFCHECK;
    }
    if (checkedKeys.includes(props.nodeKey)) {
      return CheckStatus.CHECKED;
    }
    return CheckStatus.UNCHECK;
  };

  const handleNodeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.metaKey || e.ctrlKey) {
      onMultiSelect(props?.data);
      return;
    }
    onNodeClick(props?.data);
  };

  const handleContextMenu = (e) => {
    onRightClick(e, props?.data);
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const indent = <Indent perfixCls={nodePerfixCls} {...restNodeProps} />;
  const checkbox = (
    <>
      {enableCheck && (
        <CheckBox
          className="tree-node-checkbox"
          checked={getCheckStatus()}
          disabled={disabled}
          readOnly={checkboxReadOnly}
          onChange={(checked) => {
            handleCheckNode({ key: props.nodeKey, checked });
          }}
        />
      )}
    </>
  );
  const nodeTitle = <div className={`${nodePerfixCls}-title`}>{props.title}</div>;

  return (
    <div
      className={classNames({
        [nodePerfixCls]: true,
        'tree-node-selected': selectedKeys.includes(props.nodeKey),
      })}
      onClick={handleNodeClick}
      onContextMenu={handleContextMenu}
    >
      {typeof render !== 'function' ? (
        <>
          {indent}
          {nodeTitle}
          {checkbox}
        </>
      ) : (
        render(props, { indent, checkbox, nodeTitle })
      )}
    </div>
  );
};

export default TreeNode;
