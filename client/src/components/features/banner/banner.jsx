import React from 'react';
import styles from './banner.module.scss';
import Header from '../../common/header/header';
import { NavLink } from 'react-router-dom';
import Button from '../../common/buttonFirst/buttonFirst';
import Container from '../../layout/container/container';

const Banner = () => {
  return (
    <Container>
      <Header title="Wstaw rozrywkę do życia" />
      <div className={styles.banner}>
        <div className={styles.wrapper}>
          <h3 className={styles.subtitle}>Odwiedź nasz sklep</h3>
          <p className={styles.description}>Wybierz coś dla siebie</p>
          <Button style={styles.btn}>
            <NavLink className={styles.link} to="/shop">
              Sprawdz sam
            </NavLink>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
