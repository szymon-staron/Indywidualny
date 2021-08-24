import React, { useState } from 'react';
import styles from './contactForm.module.scss';
import Header from '../../common/header/header';
import Button from '../../common/buttonFirst/buttonFirst';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Map from '../map/map';

const schema = yup.object().shape({
  name: yup.string().required('To pole jest wymagane'),
  surname: yup.string().required('To pole jest wymagane'),
  email: yup.string().email().required('To pole jest wymagane'),
  phone: yup
    .string()
    .min(9,'Numer musi się składać z 9 cyfr')
    .required('To pole jest wymagane'),
  option: yup.string(),
  message: yup
    .string()
    .min(25, 'Wiadomość musi się składać z min 25 znaków')
    .required('To pole jest wymagane'),
  permit: yup
    .boolean()
    .oneOf([true], 'Musisz zaakceptować zasady')
    .required('To pole jest wymagane'),
});

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const [permit, setPermit] = useState(false);

  const handleChange = () => {
    setPermit((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const messagelabel = (option) => (
    option  ? <span className={styles.error}>{option.message}</span> : null);

  return (
    <section className={styles.contactForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Header title="napisz do nas" style={styles.header} />
        <fieldset className={styles.fieldset}>
          <div className={styles.textInput}>
            {messagelabel(errors.name)}
            <label>
              <input
                name="name"
                type="text"
                placeholder="Imie*"
                autoComplete="true"
                className={styles.inputForm}
                ref={register}
              />
            </label>
          </div>
          <div className={styles.textInput}>
          {messagelabel(errors.surname)}
            <label>
              <input
                name="surname"
                type="text"
                placeholder="Nazwisko*"
                autoComplete="true"
                className={styles.inputForm}
                ref={register}
              />
            </label>
          </div>
          <div className={styles.textInput}>
          {messagelabel(errors.email)}
            <label>
              <input
                name="email"
                type="text"
                placeholder="Email*"
                autoComplete="true"
                className={styles.inputForm}
                ref={register}
              />
            </label>
          </div>
          <div className={styles.textInput}>
          {messagelabel(errors.phone)}
            <label>
              <input
                name="phone"
                type="text"
                placeholder="Telephone"
                autoComplete="true"
                className={styles.inputForm}
                ref={register}
              />
            </label>
          </div>
          <div className={styles.textInput}>
          {messagelabel(errors.option)}
            <label>
              <select
                name="option"
                className={[styles.inputForm, styles.selectForm].join(' ')}
                ref={register}
              >
                <option>Wycena indywidualna</option>
                <option>Reklamacja produktu</option>
                <option>Współpraca długoterminowa</option>
                <option>inne</option>
              </select>
            </label>
          </div>
          <div className={styles.textInput}>
          {messagelabel(errors.message)}
            <label>
              <textarea
                name="message"
                placeholder="Treść wiadomości"
                rows="10"
                className={styles.inputForm}
                ref={register}
              />
            </label>
          </div>
          {messagelabel(errors.permit)}
          <div className={styles.consentInput}>
            <input
              name="permit"
              type="checkbox"
              checked={permit}
              onChange={handleChange}
              className={styles.inputCheckbox}
              ref={register}
            />
            <span className={styles.consentDescription} onClick={handleChange}>
              Korzystając z formularza zgaszasz się na przechowywanie i
              przetwarzanie twoich danych przez te witrynę
            </span>
          </div>
          <Button style={styles.btn}>Wyślij wiadomość</Button>
        </fieldset>
      </form>
      <div className={styles.ourPlace}>
        <Header title="znajdziesz nas tutaj" style={styles.header} />
        <Map />
      </div>
    </section>
  );
};

export default ContactForm;
