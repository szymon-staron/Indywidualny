import React, { useEffect, useRef } from 'react';
import styles from './productBox.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/button/button';
import gsap from 'gsap';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addProductToOrder } from '../../../_actions/orderAction';

const ProductBox = ({
  _id,
  discount,
  title,
  image,
  description,
  price,
  horizontal,
  amount,
  style,
  duration,
  tags,
}) => {

  const wrapper = useRef(null);

  useEffect(() => {
    const box = wrapper.current;
    const tl = gsap.timeline({ defaults: { ease: 'none' } });
    tl.fromTo(
      box,
      { opacity: 0, y: '-20' },
      { duration: 0.1, delay: duration * 0.1, y: '+0', opacity: 1 }
    );
    return (() => {
      tl.fromTo(box, { opacity: 1, y: '0' }, { duration: 0, opacity: 0, y: '-20' });
    })

  });

  const dispatch = useDispatch();

  const discountPrice = (price, discount) => {
    Number(price, discount);
    const newPrice = price - (price * discount) / 100;
    return newPrice;
  };

  const handleAddToOrder = () => {
    const product = {
      id: _id,
      discount,
      title,
      image,
      price,
      description,
      amount,
    };
    dispatch(addProductToOrder(product));
  };
  const currentPrice =
    discount === 0 ? (
      <p className={styles.price}>{price} zł</p>
    ) : (
      <div className={styles.newPrice}>
        <span className={styles.oldPrice}>{price} zł</span>
        <span className={styles.discount}>
          {discountPrice(price, discount).toFixed(2)} zł
        </span>
      </div>
    );

  const discountBox =
    discount !== 0 ? (
      <div className={styles.styleDiscount}>-{discount}%</div>
    ) : null;

  const displayTag = tags ? (
    <div className={styles.tags}>
      {tags !== null ? tags.map(tag => (
        <div key={tag} className={`${styles.tag} ${styles[tag === 'Promocja' ? 'promotion' : tag]}`}>{tag}</div>
      )) : null}
    </div>
  ) : null;

  return (
    <div
      className={horizontal ? styles.horizontalProduct : styles.verticalProduct}
      style={style}
      ref={wrapper}
    >
      {displayTag}
      <div className={styles.imageBox}>
        {discountBox}
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.title}>{title}</h3>
        {currentPrice}
        <p className={styles.description}>{description}</p>
        <div className={styles.btnSection}>
          <Button style={styles.btn} click={handleAddToOrder}>
            Kup product
          </Button>
          <NavLink to={`/shop/product/${_id}`}>
            <Button style={styles.btn}>Zobacz Więcej</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

ProductBox.protoType = {
  src: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  discount: PropTypes.number,
  horizontal: PropTypes.bool,
  tags: PropTypes.array,
};
ProductBox.defaultProps = {
  src:
    'https://images.unsplash.com/photo-1528870884180-5649b20f6435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  title: 'Automat arcade',
  price: 2259.99,
  description: 'Produkt idealny do ciemnych pomiesczeń',
  discount: '40',
  tags: ['new', 'bestseller']
};

export default ProductBox;
