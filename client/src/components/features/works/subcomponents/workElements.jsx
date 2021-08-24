import React from 'react';
import styles from '../works.module.scss';

const WorkElments = ({ title, src }) => {
  return (
    <div className={styles.eachWork}>
      <img src={src} alt="ourWorks" className={styles.image} />
      <div className={styles.bgc}>
        <h3 className={styles.subtitle}>{title}</h3>
      </div>
    </div>
  );
};

export default WorkElments;
