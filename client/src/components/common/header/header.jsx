import React from 'react';
import styles from './header.module.scss';

const Header = ({ title, style }) => (
  <header className={[styles.header, style].join(' ')}>
    <h3 className={styles.title}>{title}</h3>
  </header>
);

export default Header;
