import React from 'react';
import styles from './ourBasket.module.scss';
import ProductSecurity from '../../features/productSecurity/productSecurity';
import OrderProduct from '../../features/orderProduct/orderProduct';

const OurBasket = () => {
  return (
    <section className={styles.sectionPage}>
      <h3 className={styles.title}>Twój koszyk</h3>
      <OrderProduct />
      <ProductSecurity />
    </section>
  );
};

export default OurBasket;
