import React from 'react';
import styles from './aboutPassion.module.scss';
import Header from '../../common/header/header';

const AboutPassion = () => {
  return (
    <section className={styles.container}>
      <Header title="Z grami od lat" />
      <article className={styles.wrapper}>
        <div className={[styles.imageBgc, styles.img_1].join(' ')}>
          <div className={styles.shadowColor}></div>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et
          eveniet repellat, atque vero eligendi iusto sit similique explicabo
          minima quibusdam a vitae! Iste doloribus quisquam exercitationem
          officia perferendis possimus.
        </div>
      </article>
      <article className={styles.wrapper}>
        <div className={[styles.imageBgc, styles.img_2].join(' ')}>
          <div className={styles.shadowColor}></div>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque magnam
          a ipsum iure at impedit earum ducimus culpa dolorum ipsa, omnis nobis
          officia laborum eum necessitatibus sunt velit ipsam! Optio!
        </div>
      </article>
      <article className={styles.wrapper}>
        <div className={[styles.imageBgc, styles.img_3].join(' ')}>
          <div className={styles.shadowColor}></div>
        </div>
        <div className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dolore, eligendi deserunt ut maiores accusamus sunt, animi repellendus
          saepe perspiciatis reiciendis ipsa provident culpa illum alias
          possimus ducimus vel optio.
        </div>
      </article>
    </section>
  );
};
export default AboutPassion;
