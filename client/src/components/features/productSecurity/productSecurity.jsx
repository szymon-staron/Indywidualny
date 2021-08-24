import React from 'react';
import styles from './productSecurity.module.scss';

const ProductSecurity = () => {
  const information = [
    {
      title: 'Gwarancja',
      text: 'Na wszyskie automaty obowiązuje gwarancja 3lata.',
    },
    {
      title: 'zwroty',
      text:
        'Pamietaj, ze masz pełne prawo do zwrotu automatów w ciągu 14 dni.',
    },
    {
      title: 'Reklamacja',
      text: 'Jeśli coś z automatami będzie nie tak wymienimy je na nasz koszt.',
    },
  ];
  return (
    <section>
      <ul className={styles.wrapper}>
        {information.map((item) => (
          <li key={item.title} className={styles.eachInfo}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ProductSecurity;
