import React from 'react';
import styles from './renderProduct.module.scss';
import PropTypes from 'prop-types';
import ProductBox from '../productBox/productBox';
import { useSelector } from 'react-redux';

const RenderProduct = ({
  horizontal,
  isAmountOnPage = 15,
  arrayToDisplay,
  amount = 1,
}) => {
  const request = useSelector((state) => state.product.request);
  const { pending, error, success } = request;

  const firstProduct = amount === 1 ? 0 : (amount-1) * isAmountOnPage;
  const lastProduct =
    amount === 1 ? isAmountOnPage : amount * isAmountOnPage;

  const productToDisplay = arrayToDisplay.slice(firstProduct, lastProduct);

  if (pending) return <div>Pending</div>;
  else if (error) return <div>Something is wrong</div>;
  else if (!success || arrayToDisplay.length === 0)
    return <div> nie ma produktów w magazynie</div>;
  else if (success)
    return (
      <div className={styles.productsData}>
        {productToDisplay.map((el, index) => (
          <ProductBox
            key={el._id}
            horizontal={horizontal}
            {...el}
            duration={index}
          />
        ))}
      </div>
    );
};
RenderProduct.prototypes = {
  arreyToMap: PropTypes.array,
  horizontal: PropTypes.bool,
};
RenderProduct.defaultProps = {
  arrayToDisplay: [],
  horizontal: false,
};

export default RenderProduct;
