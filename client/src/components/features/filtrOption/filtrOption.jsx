import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSecond from '../../common/buttonSecond/buttonSecond';
import styles from './filtrOption.module.scss';
import ButtonFirst from '../../common/buttonFirst/buttonFirst';
import { addCategory } from '../../../_actions/productActions';

const FiltrOption = ({ price, handleSetFilterPrice }) => {
  const inputPrice = useRef(null);
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.product.minPrice);
  const maxPrice = useSelector((state) => state.product.maxPrice);

  const handleSetIsShow = () => setIsShow((prev) => !prev);

  const handleSetOption = (e) => {
    const category = e.target.parentNode.dataset.option;
    dispatch(addCategory(category));
    handleSetFilterPrice(0);
    setIsShow(false)
  };



  const ClickSubmit = (e) => {
    e.preventDefault();
    handleSetFilterPrice(inputPrice.current.value);
    setIsShow(false)
  };

  const handleChangePrice = (e) => {
    e.preventDefault();
    handleSetFilterPrice(inputPrice.current.value);
  };

  return (
    <div className={styles.filterOption}>
      <ButtonSecond clasName={styles.filterBtn} click={handleSetIsShow}>
        Filtruj
      </ButtonSecond>
      <div className={[styles.wrapper, isShow ? styles.show : null].join(' ')}>
        <ul className={styles.filterList}>
          <li
            className={styles.category}
            data-option="all"
            onClick={handleSetOption}
          >
            <ButtonSecond clasName={styles.btn}>Wszystkie</ButtonSecond>
          </li>
          <li
            className={styles.category}
            data-option="new"
            onClick={handleSetOption}
          >
            <ButtonSecond clasName={styles.btn}>Nowości</ButtonSecond>
          </li>
          <li
            className={styles.category}
            data-option="accessories"
            onClick={handleSetOption}
          >
            <ButtonSecond clasName={styles.btn}>Akcesoria</ButtonSecond>
          </li>
          <li
            className={styles.category}
            data-option="bed"
            onClick={handleSetOption}
          >
            <ButtonSecond clasName={styles.btn}>Automaty</ButtonSecond>
          </li>
          <li
            className={styles.category}
            data-option="sofa"
            onClick={handleSetOption}
          >
            <ButtonSecond clasName={styles.btn}>Automaty dla dzieci</ButtonSecond>
          </li>
          <li
            className={styles.category}
            data-option="kitchen"
            onClick={handleSetOption}
          >
            <ButtonSecond clasName={styles.btn}>Automaty limitowane</ButtonSecond>
          </li>

        </ul>
        <div className={styles.filterPrice}>
          <label className={styles.filter}>
            <h4 className={styles.subtitle}>Cena</h4>
            <input
              ref={inputPrice}
              type="range"
              min={minPrice}
              max={maxPrice}
              step={10}
              className={styles.priceRange}
              onChange={handleChangePrice}
              value={price}
            />
            <span className={styles.priceValue}>
              Cena: {price} zł - {maxPrice} zł
            </span>
            <ButtonFirst click={ClickSubmit} style={styles.filterSubmit}>
              filtruj
            </ButtonFirst>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltrOption;
