import React from 'react';
import styles from './fanPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from '../../common/header/header';

const FanPage = () => (
  <section className={styles.fanPage}>
    <Header title="Nasz fanpage" />
    <div className={styles.instagram}>
      <FontAwesomeIcon icon={faInstagram} />
    </div>
    <div className={styles.facebook}>
      <FontAwesomeIcon icon={faFacebook} />
    </div>
  </section>
);

export default FanPage;
