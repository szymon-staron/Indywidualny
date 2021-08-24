import React from 'react';
import styles from './aboutCompany.module.scss';
import Logo from '../../common/logo/logo';

const AboutCompany = () => (
  <section className={styles.aboutCompany}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <p className={styles.description}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ut laborum
      consectetur, modi sit aliquid rem quaerat, necessitatibus qui beatae
      soluta earum, aliquam minus sequi sint perspiciatis pariatur! Sunt,
      soluta?
    </p>
  </section>
);

export default AboutCompany;
