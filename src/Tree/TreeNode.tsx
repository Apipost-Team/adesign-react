import React, { useContext } from 'react';
import classNames from 'classnames';
import Indent from './Indent';
import TreeContext from './TreeContext';
import CheckBox from '../CheckBox';
import { CheckStatus } from '../CheckBox/interface';
import { TreeNodeProps } from './interface';

const TreeNode: React.FC<TreeNodeProps> = (props) => {
  const { style, itemCount, prefixCls, disabled, ...restNodeProps } = props;

  const {
    enableCheck,
    checkboxReadOnly,
    handleCheckNode,
    checkedKeys,
    halfCheckedKeys,
    selectedKeys,
    render,
    onRightClick = () => undefined,
    onNodeClick = (params: any) => undefined,
    onMultiSelect = () => undefined,
  } = useContext(TreeContext);

  const nodePrefixCls = `${prefixCls}-node`;

  const getCheckStatus = () => {
    if (halfCheckedKeys.includes(props.nodeKey)) {
      return CheckStatus.HALFCHECK;
    }
    if (checkedKeys.includes(props.nodeKey)) {
      return CheckStatus.CHECKED;
    }
    return CheckStatus.UNCHECK;
  };

  const handleNodeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.metaKey || e.ctrlKey) {
      onMultiSelect(props?.data);
      return;
    }
    onNodeClick(props?.data);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    onRightClick(e, props?.data);
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const indent = <Indent prefixCls={nodePrefixCls} {...restNodeProps} />;
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
  const nodeTitle = <div className={`${nodePrefixCls}-title`}>{props.title}</div>;

  const nodeProperties = {
    style,
    className: classNames({
      [nodePrefixCls]: true,
      'tree-node-selected': selectedKeys.includes(props.nodeKey),
    }),
    onClick: handleNodeClick,
    onContextMenu: handleContextMenu,
  };

  return (
    <>
      {typeof render !== 'function' ? (
        <div {...nodeProperties}>
          {indent}
          {nodeTitle}
          {checkbox}
        </div>
      ) : (
        React.cloneElement(
          render(props, {
            indent,
            nodeTitle,
            checkbox,
            itemCount,
          }),
          nodeProperties
        )
      )}
    </>
  );
};

export default TreeNode;
