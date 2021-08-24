import React from 'react';
import styles from './workShopBanner.module.scss';

const WorkShopBanner = () => {
  return (
    <section>
      <article className={styles.imageBackground}>
        <div className={styles.shadowBackground}>
          <div className={styles.shadow}>
            <h3 className={styles.header}>M-TIBI-BIS</h3>
          </div>
          <div className={styles.shadow}>
            <p>Od ogółu do szczegółu</p>
          </div>
          <div className={styles.shadow}>
            <p>Z nami jedynie zyskasz</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WorkShopBanner;
