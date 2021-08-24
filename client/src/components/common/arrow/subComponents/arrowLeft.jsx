import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../arrow.module.scss';

const ArrowLeft = () => (
  <div className={styles.leftArrow}>
    <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowCenter} />
  </div>
);

export default ArrowLeft;
