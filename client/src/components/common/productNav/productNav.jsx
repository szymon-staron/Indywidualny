import React from 'react';
import styles from './productNav.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../_actions/productActions';

const ProductNav = () => {
  const categories = [
    { id: 'arcade', name: 'Automat' },
    { id: 'arcade2', name: 'Automat1' },
    { id: 'arcade3', name: 'Automat2' },
    { id: 'arcade4', name: 'Automat3' },
    { id: 'arcade5', name: 'Automat4' },
    { id: 'accessories', name: 'akcesoria' }
  ];
  const dispatch = useDispatch();
  const handleAddCategory = (e) => {
    dispatch(addCategory(e.target.dataset.name));
  };

  return (
    <nav className={styles.productNav} id="homeProductNav">
      <ul className={styles.navList}>
        {categories.map((el) => (
          <li key={el.id}>
            <p data-name={el.id} onClick={handleAddCategory}>
              {el.name}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

ProductNav.propTypes = {
  addCategories: PropTypes.func,
};
export default ProductNav;
