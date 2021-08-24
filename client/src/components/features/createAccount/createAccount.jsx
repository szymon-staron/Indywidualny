import React from 'react';
import styles from './createAccount.module.scss';
import Header from '../../common/header/header';
import Button from '../../common/buttonFirst/buttonFirst';
import { NavLink } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <section className={styles.createAccount}>
      <Header title="Załóż konto" style={styles.header} />
      <div className={styles.contentBox}>
        <p>
          Nie posiadasz jeszcze konta? Nie zwlekaj, dłuzej.
          <br />
          Dzięki naszemu kontu zyskasz:
        </p>
        <ul className={styles.advantage}>
          <li className={styles.eachAdvantage}>
            Jesteś wstanie śledzić swoje zamówienie
          </li>
          <li className={styles.eachAdvantage}>
            Masz wgląd do histori zamówień
          </li>
          <li className={styles.eachAdvantage}>
            Łatwo zachowasz swoje wybrane produkty na pózniej
          </li>
        </ul>
      </div>
      <div className={styles.createSubmit}>
        <Button>
          <NavLink to="/registration" className={styles.link}>
            Załóż konto
          </NavLink>
        </Button>
      </div>
    </section>
  );
};
export default CreateAccount;
