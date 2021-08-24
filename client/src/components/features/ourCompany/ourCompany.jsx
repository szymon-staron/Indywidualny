import React from 'react';
import styles from './ourCompany.module.scss';
import Header from '../../common/header/header';
import Rule from './subcomponents/eachList';

const OurCompany = () => {
  return (
    <section className={styles.ourCompany}>
      <Header title="Nasze zasady" />
      <div className={styles.imageBox}>
        <div className={styles.rulesBox}>
          <div className={styles.wrapper}>
            <ul className={styles.rules}>
              <Rule>Szybko</Rule>
              <Rule>Sprawnie</Rule>
              <Rule>Granie</Rule>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
