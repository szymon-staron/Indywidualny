import React from 'react';
import styles from './discountSection.module.scss';
import DiscountProduct from '../discountProduct/discountProduct';
import Slider from '../slider/sliderProduct';

const DiscountSection = () => {
  const slides = [
    {
      _id: '1',
      image:
        'https://images.unsplash.com/photo-1528870884180-5649b20f6435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Automat',
      price: 9999.99,
      description: 'Produkt idealny do dla graczy',
      discount: '40',
    },
    {
      _id: '2',
      image:
        'https://images.unsplash.com/photo-1528870884180-5649b20f6435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Automat',
      price: 9999.99,
      description: 'Produkt idealny do dla graczy',
      discount: '40',
    },
    {
      _id: '3',
      image:
        'https://images.unsplash.com/photo-1528870884180-5649b20f6435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Automat',
      price: 9999.99,
      description: 'Produkt idealny do dla graczy',
      discount: '40',
    },
  ];
  return (
    <section className={styles.discountSection}>
      <Slider
        title="nasze bestsellery"
        slides={slides}
        duration={0}
        styles={styles.asideSlider}
      />
      <DiscountProduct />
    </section>
  );
};

export default DiscountSection;
