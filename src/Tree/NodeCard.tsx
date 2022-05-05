import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import _throttle from 'lodash/throttle';
import classNames from 'classnames';
import './index.less';
import { DragHover } from './interface';

const Card = (props) => {
  const {
    children,
    index,
    beginMove = () => undefined,
    moving = () => undefined,
    moved = () => undefined,
  } = props;

  const [dragHover, setDragHover] = useState<DragHover | null>(null);
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
        mode = DragHover.TOP;
      } else if (
        clientOffset.y >= hoverBoundingRect.y + hoverHeight / 3 &&
        clientOffset.y < hoverBoundingRect.y + hoverHeight * (2 / 3)
      ) {
        mode = DragHover.INSIDE;
      } else {
        mode = DragHover.BOTTOM;
      }
      setDragHover(mode);
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
      moved(item.index, index, dragHover);
    },
  });

  // useEffect(() => {
  // //  preview(getEmptyImage(), { captureDraggingState: true });
  // }, []);

  const opacity = isDragging ? 0.15 : 1;
  const background = isOver && canDrop && dragHover === DragHover.INSIDE ? '#409eff' : 'none';

  drag(drop(ref));
  return (
    <div
      ref={ref}
      style={{ opacity, background }}
      className={classNames({
        'drag-node': true,
      })}
    >
      <div className="drag-line" />
      {children}
    </div>
  );
};

export default Card;
