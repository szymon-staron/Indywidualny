import React from 'react';
import styles from '../ourCompany.module.scss';

const Rule = ({ children }) => (
  <li className={styles.eachRule}>
    <p>{children}</p>
  </li>
);

export default Rule;
