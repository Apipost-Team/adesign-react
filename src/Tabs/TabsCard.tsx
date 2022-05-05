import React, { useRef, useState, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import _throttle from 'lodash/throttle';
import classNames from 'classnames';

const TabsCard = (props) => {
  const {
    children,
    index,
    beginMove = () => undefined,
    moving = () => undefined,
    moved = () => undefined,
  } = props;

  const DRAGMODE = {
    top: 'top',
    inside: 'inside',
    bottom: 'bottom',
  };

  const [drageMode, setDragMode] = useState(null);
  const ref = useRef(null);
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'card',
    item: () => {
      beginMove(index);
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleHover = useCallback(
    _throttle((item, monitor) => {
      if (!ref.current) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverHeight = hoverBoundingRect.bottom - hoverBoundingRect.top;
      const clientOffset = monitor.getClientOffset();
      let mode = null;
      if (clientOffset === null || hoverBoundingRect === null) {
        return;
      }
      if (clientOffset.y < hoverBoundingRect.y + hoverHeight / 3) {
        mode = DRAGMODE.top;
      } else if (
        clientOffset.y >= hoverBoundingRect.y + hoverHeight / 3 &&
        clientOffset.y < hoverBoundingRect.y + hoverHeight * (2 / 3)
      ) {
        mode = DRAGMODE.inside;
      } else {
        mode = DRAGMODE.bottom;
      }
      setDragMode(mode);
      moving(item.index, index, mode);
    }, 50),
    []
  );

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'card',
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
    hover: handleHover,
    drop(item) {
      moved(item.index, index, drageMode);
    },
  });

  // useEffect(() => {
  // //  preview(getEmptyImage(), { captureDraggingState: true });
  // }, []);

  const opacity = isDragging ? 0.15 : 1;
  const background = isOver && canDrop && drageMode === DRAGMODE.inside ? '#409eff' : 'none';

  drag(drop(ref));
  return (
    <div
      ref={ref}
      style={{ opacity }}
      className={classNames({
        'drag-node': true,
        'drag-node-top': isOver && drageMode === DRAGMODE.top,
        'drag-node-inside': isOver && canDrop && drageMode === DRAGMODE.inside,
        'drag-node-bottom': isOver && drageMode === DRAGMODE.bottom,
      })}
    >
      <div className="drag-line" />
      {children}
    </div>
  );
};

export default TabsCard;
