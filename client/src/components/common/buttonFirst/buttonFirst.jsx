import React from 'react';
import styles from './buttonFirst.module.scss';
import PropTypes from 'prop-types';

const ButtonFirst = ({ children, style, click }) => (
  <button className={[styles.btn, style].join(' ')} onClick={click}>
    {children}
  </button>
);

ButtonFirst.propTypes = {
  click: PropTypes.func,
};
export default ButtonFirst;
