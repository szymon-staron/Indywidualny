import React, { useState } from 'react';
import styles from './shop.module.scss';
import CategoryNav from '../../features/categoryNav/categoryNav';
import ProductsCard from '../../features/productCard/productCard';
import Header from '../../common/header/header';

const Shop = () => {
  const [filterPrice, setFilterPrice] = useState(0);
  const handleSetFilterPrice = (price) => setFilterPrice(price);

  return (
    <section className={styles.shop}>
      <Header title="sklep" style={styles.header} />
      <div className={styles.shopContent}>
        <CategoryNav
          price={filterPrice}
          handleSetFilterPrice={handleSetFilterPrice}
        />
        <ProductsCard filterPrice={filterPrice} />
      </div>
    </section>
  );
};

export default Shop;
