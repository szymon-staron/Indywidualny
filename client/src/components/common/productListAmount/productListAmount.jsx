import React from 'react';
import styles from './productListAmount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { chunkArrayWithSlice } from '../../../_helpers/utils';

const ProductListAmount = ({ array, value, index, handleSetIndex }) => {
  
  const handleNexIndex = () => {
    if (chunk <= index) {
      return chunk;
    } else handleSetIndex(index + 1);
    window.scrollTo(0, 200);
  };
  const handlePrevIndex = () => {
    if (chunk <= index && index <= 1) {
      return chunk;
    } else if (index > 1) {
      handleSetIndex(index - 1);
      window.scrollTo(0, 200);
    } else return index;
  };

  const chunk = chunkArrayWithSlice(array, value);

  return (
    <div className={styles.wrapper}>
      <div className={styles.amountPageProduct}>
        <FontAwesomeIcon
          name="prev"
          icon={faArrowLeft}
          className={styles.icon}
          onClick={handlePrevIndex}
        />
        <ul className={styles.listPage}>
          <li className={styles.eachPageProduct}>{index} </li>
          <li className={styles.eachPageProduct}>z</li>
          <li className={styles.eachPageProduct}>{chunk} </li>
        </ul>
        <FontAwesomeIcon
          name="next"
          icon={faArrowRight}
          className={styles.icon}
          onClick={handleNexIndex}
        />
      </div>
    </div>
  );
};
export default ProductListAmount;
