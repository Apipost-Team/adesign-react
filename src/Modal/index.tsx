import React, {
  useEffect,
  useState,
  PropsWithChildren,
  ForwardRefExoticComponent,
  forwardRef,
  useRef,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import ReactDOM from 'react-dom';
import Button from '../Button';
import TabCloseSvg from '../assets/tabpan-close.svg';
import { ConfirmProps, ModalProps } from './interface';
import Confirm from './Confirm';
import './index.less';

const PERFIXNAME = 'apipost-modal';
// const Modal: React.FC<ModalProps> = (props) => {
// const Modal = (props) => {
function Modal(props: PropsWithChildren<ModalProps>, ref: any) {
  const {
    style,
    className,
    children,
    mask = true,
    maskClosable,
    title,
    headerClassName,
    bodyClassName = undefined,
    footer,
    footerClassName = '',
    visible,
    okText = '确认',
    cancelText = '取消',
    escToExit = true,
    onOk,
    onCancel = () => undefined,
  } = props;
  const [zIndex, setZIndex] = useState(1024);

  useEffect(() => {
    if (document.getElementsByClassName(`${PERFIXNAME}-mask`).length > 1) {
      setZIndex(zIndex + 1);
    } else {
      setZIndex(1024);
    }
  }, []);

  const [uuid] = useState(uuidv4());
  const modalRef = useRef<any>();
  const onEscExit = (e: any, uuid: string) => {
    setTimeout(() => {
      if (
        e.keyCode === 27 &&
        onCancel &&
        escToExit &&
        modalRef?.current?.getAttribute('data-uuid') === uuid
      ) {
        onCancel();
      }
    }, 10);
  };
  useEffect(() => {
    document.addEventListener('keyup', (e) => onEscExit(e, uuid), false);
    return () => {
      document.addEventListener('keyup', (e) => onEscExit(e, uuid), false);
    };
  }, []);

  return (
    <>
      {visible &&
        ReactDOM.createPortal(
          <div ref={modalRef} data-uuid={uuid}>
            {mask && (
              <div
                className={`${PERFIXNAME}-mask`}
                onClick={() => {
                  maskClosable && onCancel();
                }}
                style={{ zIndex }}
              />
            )}
            <div
              className={cn({ [`${PERFIXNAME}-wrapper`]: true }, className)}
              style={{ ...style, zIndex: zIndex + 1 }}
            >
              <div className={cn({ [`${PERFIXNAME}-container`]: true })}>
                {title !== null && (
                  <div className={cn({ [`${PERFIXNAME}-header`]: true }, headerClassName)}>
                    {title}
                  </div>
                )}
                <div onClick={onCancel} className={`${PERFIXNAME}-close`}>
                  <TabCloseSvg />
                </div>
                <div className={cn({ [`${PERFIXNAME}-body`]: true }, bodyClassName)}>
                  {children}
                </div>
                {footer !== null && (
                  <div className={`${PERFIXNAME}-footer ${footerClassName}`}>
                    {!footer ? (
                      <div>
                        <Button onClick={onCancel}>{cancelText}</Button>
                        <Button onClick={onOk} type="primary">
                          {okText}
                        </Button>
                      </div>
                    ) : (
                      footer
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.querySelector('body') as HTMLElement
        )}
    </>
  );
}

export interface ModalComponent extends ForwardRefExoticComponent<PropsWithChildren<ModalProps>> {
  confirm: (props: ConfirmProps) => void;
}

const ExportedModalComponent: ModalComponent = forwardRef(Modal) as ModalComponent;
ExportedModalComponent.displayName = 'Modal';

ExportedModalComponent.confirm = Confirm;

export default ExportedModalComponent;
