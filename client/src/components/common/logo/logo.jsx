import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = () => (
  <NavLink to="/" className={styles.logo}>
    <img src="/image/logo1.jpg" alt="logoCompany" />
  </NavLink>
);

export default Logo;
