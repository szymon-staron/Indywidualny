import React from 'react';
import styles from './basket.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Basket = () => {
  const order = useSelector((state) => state.order);

  const amountOfProduct = order.length === 0 ? 0 : order.length;

  return (
    <>
      <button className={styles.basketBtn}>
        <NavLink to="/basket" style={{ outline: 'none' }}>
          <div className={styles.circleAmount}>{amountOfProduct}</div>
          <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon} />
        </NavLink>
      </button>
    </>
  );
};

export default Basket;
