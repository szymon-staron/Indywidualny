import React, { useEffect } from 'react';
import styles from './modal.module.scss';
import Button from '../../common/button/button';
import ReactDOM from 'react-dom';

const Modal = ({ show, children, btn, close, title }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyDown) === 27) {
      close();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  });

  return ReactDOM.createPortal(
    <div
      className={[styles.modal, show ? styles.show : null].join(' ')}
      onClick={close}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{title}</h4>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          {btn ? (
            <Button click={close} style={styles.modalBtn}>
              {btn}
            </Button>
          ) : null}
        </div>
      </div>
    </div>,
    document.getElementById('root')
  );
};

export default Modal;
