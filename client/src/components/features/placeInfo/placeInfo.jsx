import React from 'react';
import styles from './placeInfo.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';

const PlaceInfo = () => {
  return (
    <section className={styles.placeContact}>
      <h4 className={styles.cityPlace}>
        Bohaterów Modlina 32 <br /> 05-100 Nowy Dwór Mazowiecki
      </h4>
      <div className={styles.contactOption}>
        <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
        <a href="tel:+48 999 999 999" className={styles.contact}>
          Jarosław +48 999 999 999
        </a>
      </div>
      <div className={styles.contactOption}>
        <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
        <a href="tel:+48 999 999 999" className={styles.contact}>
          {' '}
          Jarosław+48 999 999 999
        </a>
      </div>
      <div className={styles.contactOption}>
        <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.icon} />
        <a href="mailto:Jan_Kowalski@gmail.com" className={styles.contact}>
          Jan_Kowalski@gmail.com
        </a>
      </div>
    </section>
  );
};

export default PlaceInfo;
