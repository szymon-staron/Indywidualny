import React from 'react';
import styles from './companyInfo.module.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../common/header/header';

const CompanyInfo = () => (
  <section className={styles.companyInfo}>
    <Header title="informacje" />
    <ul>
      <li className={styles.eachLink}>
        <NavLink className={styles.link} to="/information/regulation">
          Regulamin
        </NavLink>
      </li>
      <li className={styles.eachLink}>
        <NavLink className={styles.link} to="/information/privacy policy">
          Polityka prywatnosci
        </NavLink>
      </li>
      <li className={styles.eachLink}>
        <NavLink className={styles.link} to="/information/data">
          Zasady przetwarzania danych
        </NavLink>
      </li>
      <li className={styles.eachLink}>
        <NavLink className={styles.link} to="/information/cookes">
          Polityka cookie
        </NavLink>
      </li>
    </ul>
  </section>
);

export default CompanyInfo;
