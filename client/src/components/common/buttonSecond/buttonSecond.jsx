import React from 'react';
import styles from './buttonSecond.module.scss';

const ButtonSecond = ({ children, clasName, click }) => {
  return (
    <button className={[clasName, styles.btn].join(' ')} onClick={click}>
      {children}
    </button>
  );
};

export default ButtonSecond;
