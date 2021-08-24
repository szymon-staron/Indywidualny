import React from 'react';
import styles from '../arrow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ArrowLeft = () => (
  <div className={styles.rightArrow}>
    <FontAwesomeIcon icon={faArrowRight} className={styles.arrowCenter} />
  </div>
);

export default ArrowLeft;
