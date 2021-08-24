import React from 'react';
import styles from './orderProduct.module.scss';
import { useSelector } from 'react-redux';
import EachOrder from './subComponent/eachOrder';

const OrderProduct = () => {
  const delivery = 49;

  const orders = useSelector((state) => state.order);

  const totalPay = orders.reduce((total, orders) => {
    const { discount, price, amount } = orders;
    const NewPrice = discount !== 0 ? price - (price * discount) / 100 : price;

    return total + NewPrice * amount;
  }, 0);

  const finalPayment = totalPay + delivery;

  if (orders.length === 0)
    return (
      <p className={styles.emptyBasket}>
        Nie masz jeszcze produktów w koszyku.
      </p>
    );

  if (orders.length !== 0) {
    return (
      <div className={styles.basket}>
        {orders.map((item) => (
          <EachOrder key={item._id} {...item} />
        ))}
        <div className={styles.payBox}>
          <div>
            <p className={styles.totalPay}>
              Razem za produkty: <span>{totalPay} zł</span>
            </p>
            <p className={styles.delivery}>
              Dostawa do firmy: <span>{delivery} zł</span>
            </p>
          </div>
          <div className={styles.summary}>
            <p className={styles.finalPay}>
              Razem do zapłaty: <span>{finalPayment} zł</span>
            </p>
            <p className={styles.discountCode}>
              Mam kod rabatowy
            </p>
            <button className={styles.submitBtn}>Przejdz do kasy</button>
          </div>
        </div>
      </div>
    );
  }
};
export default OrderProduct;
