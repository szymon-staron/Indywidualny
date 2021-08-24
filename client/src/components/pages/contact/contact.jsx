import React from 'react';
import styles from './contact.module.scss';
import Header from '../../common/header/header';
import PlaceInfo from '../../features/placeInfo/placeInfo';
import ContactForm from '../../features/contactForm/contactForm';

const Contact = () => {
  return (
    <section className={styles.contactPage}>
      <Header title="Kontakt" style={styles.header} />
      <PlaceInfo />
      <ContactForm />
    </section>
  );
};

export default Contact;
