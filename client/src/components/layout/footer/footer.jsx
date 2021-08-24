import React from 'react';
import styles from './footer.module.scss';
import CompanyInfo from '../../features/companyInfo/companyInfo';
import AboutCompany from '../../features/aboutCompany/aboutCompany';
import FanPage from '../../features/FanPage/fanPage';
import Newsletter from '../../features/newsletter/newsletter';

const Footer = () => (
  <footer>
    <Newsletter />
    <div className={styles.footer}>
      <AboutCompany />
      <CompanyInfo />
      <FanPage />
    </div>
  </footer>
);

export default Footer;
