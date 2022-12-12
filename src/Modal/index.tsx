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
import Show from './Show';
import './style/index.less';
import { ConfigContext } from '../ConfigProvider';
import { ShowProps } from './interface';

const PERFIXNAME = 'apipost-modal';
// const Modal: React.FC<ModalProps> = (props) => {
// const Modal = (props) => {
function Modal(props: PropsWithChildren<ModalProps>, ref: any) {
  const { locale } = React.useContext(ConfigContext);

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
    okText = locale?.Modal.okText,
    cancelText = locale?.Modal.cancelText,
    escToExit = true,
    showTopClosable = true,
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
              onClick={() => {
                maskClosable && onCancel();
              }}
            >
              <div
                className={cn({ [`${PERFIXNAME}-container`]: true })}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {title !== null && (
                  <div className={cn({ [`${PERFIXNAME}-header`]: true }, headerClassName)}>
                    {title}
                  </div>
                )}
                {showTopClosable && (
                  <Button
                    className={`${PERFIXNAME}-close`}
                    type="info"
                    size="mini"
                    icon={<TabCloseSvg />}
                    onClick={onCancel}
                  />
                )}
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
  Show: (props: ShowProps, pos: any, modalRef: any) => void;
}

const ExportedModalComponent: ModalComponent = forwardRef(Modal) as ModalComponent;
ExportedModalComponent.displayName = 'Modal';

ExportedModalComponent.confirm = Confirm;
ExportedModalComponent.Show = Show;

export default ExportedModalComponent;
