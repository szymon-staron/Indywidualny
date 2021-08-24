import React from 'react';
import styles from './arrow.module.scss';
import ArrowRight from './subComponents/arrowRight';
import ArrowLeft from './subComponents/arrowLeft';

const Arrow = ({ direction, handleClick }) => {
  const arrowDirection = `${
    direction === 'right' ? 'right:-5px' : 'left:-5px'
  }`;

  return (
    <div onClick={handleClick} className={styles.arrow} styles={arrowDirection}>
      {direction === 'right' ? <ArrowRight /> : <ArrowLeft />}
    </div>
  );
};

export default Arrow;
