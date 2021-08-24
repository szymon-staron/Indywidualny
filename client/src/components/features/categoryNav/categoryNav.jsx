import React from 'react';
import styles from './categoryNav.module.scss';
import FiltrOption from '../filtrOption/filtrOption';
import SearchInput from '../../common/searchInput/searchInput';
import Header from '../../common/header/header';

const CategoryNav = ({ price, handleSetFilterPrice }) => {
  return (
    <section className={styles.categorySection}>
      <Header title="kategorie" style={styles.header} />
      <SearchInput />
      <FiltrOption price={price} handleSetFilterPrice={handleSetFilterPrice} />
    </section>
  );
};

export default CategoryNav;
