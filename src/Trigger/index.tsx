import React, { PureComponent, ReactElement, PropsWithChildren, CSSProperties } from 'react';
import ReactDom from 'react-dom';
import cn from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';
import { TriggerProps, TriggerState, PopupStyleProps } from './interface';
import { addEvent, removeEvent, getScrollElements } from '../util/dom';

class Trigger extends PureComponent<TriggerProps, TriggerState> {
  triggerRef: any = null;

  popupRef: any = null;

  childrenComponent: any = null;

  scrollElements: any = null;

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      popupVisible: this.props.popupVisible === true,
      popupStyle: {},
    };
  }

  onContainersScroll = () => {
    if (this.scrollElements) {
      return;
    }
    const childrenDom = ReactDom.findDOMNode(this);
    this.scrollElements = getScrollElements(childrenDom, this.popupRef?.parentNode);
    this.scrollElements.forEach((item) => {
      addEvent(item, 'scroll', this.updatePopupPosition);
    });
  };

  // 点击区域外部关闭
  onClickOutside = (event: any) => {
    if (
      (this.props.trigger !== 'click' && this.props.trigger !== 'contextmenu') ||
      this.state.popupVisible === false
    ) {
      return;
    }
    const eleTrigger = ReactDom.findDOMNode(this.triggerRef);
    const elePopup = ReactDom.findDOMNode(this.popupRef);
    const isInsideClick =
      [eleTrigger, elePopup].some((ref) => ref?.contains(event.target)) || false;
    if (isInsideClick !== true) {
      this.setPopupVisible(false);
    }
  };

  // 鼠标移到外部关闭
  onMouseMovingOutside = (event: any) => {
    if (this.props.trigger !== 'hover' || this.state.popupVisible === false) {
      return;
    }
    const eleTrigger = ReactDom.findDOMNode(this.triggerRef);
    const elePopup = ReactDom.findDOMNode(this.popupRef);
    const isInsideClick =
      [eleTrigger, elePopup].some((ref) => ref?.contains(event.target)) || false;
    if (isInsideClick !== true) {
      this.setPopupVisible(false);
    }
  };

  getTriggerOffset = () => {
    const triggerOffset = this.triggerRef?.getBoundingClientRect();
    const popupStyle = {
      left: triggerOffset.left,
      top: triggerOffset.top + triggerOffset.height,
    };

    return popupStyle;
  };

  componentDidMount() {
    this.updatePopupPosition();
    // 注册页面点击事件
    if (this.props.outsideClose === true) {
      document.body.addEventListener('mousedown', this.onClickOutside, false);
    }

    if (this.props.trigger === 'hover') {
      document.body.addEventListener('mousemove', this.onMouseMovingOutside, false);
    }
  }

  componentDidUpdate() {
    this.onContainersScroll();
  }

  componentWillUnmount() {
    if (this.props.outsideClose === true) {
      document.body.removeEventListener('mousedown', this.onClickOutside, false);
    }

    if (this.props.trigger === 'hover') {
      document.body.removeEventListener('mousemove', this.onMouseMovingOutside, false);
    }
    this.scrollElements?.forEach((item) => {
      removeEvent(item, 'scroll', this.updatePopupPosition);
    });
  }

  // 更新组件显示隐藏状态
  setPopupVisible = (val: boolean) => {
    if (this.props.disabled === true) {
      return;
    }
    const { onVisibleChange = (val) => undefined } = this.props;
    this.setState(
      {
        popupVisible: val,
      },
      () => {
        if (typeof onVisibleChange === 'function') {
          onVisibleChange(val);
          this.updatePopupPosition();
        }
      }
    );
  };

  // 更新组件位置
  updatePopupPosition = () => {
    if (this.state.popupVisible !== true) {
      return;
    }

    const { placement = 'bottom-start', autoAdjustWidth = false, offset = [0, 0] } = this.props;

    const triggerOffset = this.triggerRef?.getBoundingClientRect();
    const popupOffset = this.popupRef?.getBoundingClientRect();
    const popupStyle: PopupStyleProps = {};

    if (autoAdjustWidth === true) {
      popupOffset.width = triggerOffset.width;
      popupStyle.width = triggerOffset.width;
    }

    if (['bottom', 'bottom-start', 'bottom-end'].includes(placement)) {
      popupStyle.top = triggerOffset.top + triggerOffset.height + offset[1];
    }
    if (['top', 'top-start', 'top-end'].includes(placement)) {
      popupStyle.top = triggerOffset.top - popupOffset.height - offset[1];
    }
    if (['bottom', 'top'].includes(placement)) {
      const midLeft = triggerOffset.left + triggerOffset.width / 2;
      popupStyle.left = midLeft - popupOffset.width / 2;
    }
    if (['top-start', 'bottom-start'].includes(placement)) {
      popupStyle.left = triggerOffset.left;
    }
    if (['top-end', 'bottom-end'].includes(placement)) {
      popupStyle.left = triggerOffset.left + triggerOffset.width - popupOffset.width;
    }
    if (['left-start', 'left', 'left-end'].includes(placement)) {
      popupStyle.left = triggerOffset.left - popupOffset.width - offset[0];
    }
    if (['right-start', 'right', 'right-end'].includes(placement)) {
      popupStyle.left = triggerOffset.left + triggerOffset.width + offset[0];
    }
    if (['left-start', 'right-start'].includes(placement)) {
      popupStyle.top = triggerOffset.top;
    }
    if (['left', 'right'].includes(placement)) {
      const midTop = triggerOffset.top + triggerOffset.height / 2;
      popupStyle.top = midTop - popupOffset.height / 2;
    }
    if (['left-end', 'right-end'].includes(placement)) {
      popupStyle.top = triggerOffset.top + triggerOffset.height - popupOffset.height;
    }

    this.setState({
      popupStyle,
    });
  };

  render(): React.ReactNode {
    const { popup, children, className, trigger = 'click' } = this.props;

    const mergeProps: any = {};

    if (trigger === 'click') {
      mergeProps.onClick = () => {
        this.setPopupVisible(!this.state.popupVisible);
      };
    }
    if (trigger === 'hover') {
      mergeProps.onMouseOver = () => {
        this.setPopupVisible(true);
      };
    }
    if (trigger === 'contextmenu') {
      mergeProps.onContextMenu = (e: MouseEvent) => {
        this.setPopupVisible(true);
        e.preventDefault();
        e.stopPropagation();
      };
    }

    const childrenComponent = React.cloneElement(children, {
      ...mergeProps,
      className: cn(children?.props?.className, {
        'popup-open': this.state.popupVisible === true,
      }),
      ref: (val: any) => {
        this.triggerRef = val;
      },
    });
    const portal = React.cloneElement(popup, {
      ref: (val: any) => {
        this.popupRef = val;
      },
      className: cn(popup?.props?.className, className),
      style: {
        ...this.props.style,
        ...popup?.props?.style,
        ...this?.state?.popupStyle,
      },
    });

    this.childrenComponent = childrenComponent;

    return (
      <React.Fragment>
        {childrenComponent}
        {this.state.popupVisible && ReactDom.createPortal(portal, document.body)}
      </React.Fragment>
    );
  }
}

export default Trigger;
