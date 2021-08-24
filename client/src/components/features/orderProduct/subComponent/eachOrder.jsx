import React from 'react';
import styles from '../orderProduct.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {
  updateOrderAmount,
  deleteOrder,
} from '../../../../_actions/orderAction';

const EachOrder = ({
  id,
  image,
  title,
  description,
  time,
  color,
  price,
  discount,
  amount,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteOrder(id));
  };

  const currentPrice =
    discount !== 0 ? (price - (price * discount) / 100).toFixed(2) : price;
  const totalPay = currentPrice ? currentPrice * amount : price * amount;

  const ProductPrice =
    discount !== 0 ? (
      <span className={styles.oldPrice}>{price.toFixed(2)} zł</span>
    ) : null;

  const handleChangeAmount = (e) => {
    if (e.target.name === 'increment') {
      dispatch(updateOrderAmount(amount + 1, id));
    } else if (e.target.name === 'decrement') {
      dispatch(updateOrderAmount(amount - 1, id));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={image} alt={title} className={styles.img} />
      </div>
      <div className={styles.productInfo}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.realization}>{time}</p>
        <p className={styles.colors}>kolory</p>
        <p>{color}</p>
      </div>
      <div className={styles.priceBox}>
        <p className={styles.eachPrice}>
          Cena jedn.:
          {ProductPrice} <span>{currentPrice} zł</span>
        </p>
        <div className={styles.amountBox}>
          <button
            name="decrement"
            className={styles.btn}
            onClick={handleChangeAmount}
            disabled={amount === 1 ? true : false}
          >
            -
          </button>
          <input
            type="text"
            value={amount}
            onChange={handleChangeAmount}
            className={styles.amountInput}
          />
          <button
            name="increment"
            className={styles.btn}
            onClick={handleChangeAmount}
          >
            +
          </button>
          <button className={styles.btn} onClick={() => handleDelete(id)}>
            <FontAwesomeIcon icon={faTrashAlt} className={styles.icon} />
          </button>
        </div>
        <p className={styles.totalPrice}>
          Wartość: <span>{totalPay.toFixed(2)} zł</span>
        </p>
      </div>
    </div>
  );
};

EachOrder.protoType = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  amount: PropTypes.number,
};
EachOrder.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1528870884180-5649b20f6435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  title: 'Arcade',
  description: 'produkt robiony na zamówienie',
  time: 'realizacja 4 - 6 tygodni',
  color: 'kolorowy',
  price: 9999.99,
  discount: '40',
  amount: 1,
};

export default EachOrder;
