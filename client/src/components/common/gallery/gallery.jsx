import React, { useState } from 'react';
import styles from './gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import ButtonSecond from '../../common/buttonSecond/buttonSecond';

const Gallery = ({ handleListOption }) => {
  const [isShow,setIsShow] = useState(false);
  const [isChecked, setIschecked] = useState('list');
  const handleSetIsShow=() => setIsShow(prev=>!prev);

  const handleChecked = (e) => {
    handleListOption(e.target.dataset.value);
    setIschecked(e.target.name);
    setIsShow(false)
  };

  return (
    <div className={styles.gallerySection}>
      <ButtonSecond clasName={styles.btn} click={handleSetIsShow}>Lista</ButtonSecond>
      <ul className={[styles.gallery,isShow?styles.show:null].join(' ')}>
        <li className={styles.option}>
          <label className={styles.optionLabel}>
            <FontAwesomeIcon
              icon={faList}
              className={[
                styles.icon,
                isChecked === 'list' ? styles.active : null,
              ].join(' ')}
            />
            <span className={styles.listType}>lista</span>
            <input
              name="list"
              type="radio"
              className={styles.selectInput}
              checked={isChecked === 'list'}
              data-value="list"
              onChange={handleChecked}
            />
          </label>
        </li>
        <li className={styles.option}>
          <label className={styles.optionLabel}>
            <FontAwesomeIcon
              icon={faTh}
              className={[
                styles.icon,
                isChecked === 'mosaic' ? styles.active : null,
              ].join(' ')}
            />
            <span className={styles.listType}>mozaika</span>
            <input
              name="mosaic"
              type="radio"
              className={styles.selectInput}
              checked={isChecked === 'mosaic'}
              data-value="mosaic"
              onChange={handleChecked}
            />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
