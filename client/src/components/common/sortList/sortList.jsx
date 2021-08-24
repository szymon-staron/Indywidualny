import React, { useState } from 'react';
import styles from './sortList.module.scss';
import ButtonSecond from '../../common/buttonSecond/buttonSecond';
import { useDispatch } from 'react-redux';
import { setOptionSort } from '../../../_actions/productActions';

const SortList = () => {
  const options = [
    { name: 'defaultSort', text: 'Sortowanie domyślne' },
    { name: 'maxPriceSort', text: 'Sortuj wg. ceny: od najwyższej' },
    { name: 'minPriceSort', text: 'Sortuj wg. ceny: od najniższej' },
    { name: 'popularitySort', text: 'Sortuj wg. popularności' },
    { name: 'newsProductSort', text: 'Sortuj od najnowszych' },
  ];

  const [isChecked, setIsChecked] = useState('defaultSort');
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);

  const handleSetIsShow = () => setIsShow((prev) => !prev);

  const handleChangeChecked = (e) => {
    dispatch(setOptionSort(e.target.dataset.value));
    setIsChecked(e.target.name);
    setIsShow(false);
  };

  const OptionElements = (
    <ul className={[styles.sortList, isShow ? styles.show : null].join(' ')}>
      {options.map((option) => (
        <li className={styles.option} key={option.name}>
          <label className={styles.optionLabel}>
            <span className={styles.listType}>{option.text}</span>
            <input
              name={option.name}
              type="radio"
              data-value={option.name}
              checked={isChecked === option.name}
              onChange={handleChangeChecked}
              className={styles.selectInput}
            />
          </label>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.sortSection}>
      <ButtonSecond clasName={styles.btn} click={handleSetIsShow}>
        Sortuj
      </ButtonSecond>
      {OptionElements}
    </div>
  );
};

export default SortList;
