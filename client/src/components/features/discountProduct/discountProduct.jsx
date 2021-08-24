import React, {useLayoutEffect,useEffect } from 'react';
import styles from './discountProduct.module.scss';
import PropTypes from 'prop-types';
import ProductNav from '../../common/productNav/productNav';
import RenderProduct from '../../common/renderProduct/renderProduct';
import SliderProduct from '../slider/sliderProduct';
import { useDispatch, useSelector } from 'react-redux';
import { discountProduct, addCategory } from '../../../_actions/productActions';


const DiscountProduct = () => {
  const product = useSelector((state) => state.product.data);
  const category = useSelector((state) => state.product.category);
  const DisplayProduct =
    category !== 'all'
      ? product.filter((item) => item.category === category)
      : product;

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (window.innerWidth <= 767) {
      dispatch(addCategory('all'));
    } else if (window.innerWidth >= 768) {
      dispatch(addCategory('bed'));
    }

    return () => {
      dispatch(addCategory('all'));
    };
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(discountProduct());
  }, [dispatch]);


  const width = window.innerWidth;

  const isHorizontal = width >= 767 && width <= 1024 ? true : false;
  const slider = <SliderProduct title="" slides={product} duration={2} />;

  return (
    <section className={styles.discountSection}>
      <h3 className={styles.title}>Nasze produkty</h3>
      <p className={styles.description}>Tworzone z pasją i doświadczeniem</p>
      <div className={styles.productNav}>
        <ProductNav />
      </div>
      <div className={styles.sliderSection}>{slider}</div>
      <article className={styles.productCard}>
        <RenderProduct
          arrayToDisplay={DisplayProduct}
          horizontal={isHorizontal}
        />
      </article>
    </section>
  );
};

DiscountProduct.protoType = {
  products: PropTypes.array,
};

export default DiscountProduct;
