import React from 'react';
import styles from './searchInput.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../_actions/productActions';

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder="Wyszukaj produkt"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchInput;
