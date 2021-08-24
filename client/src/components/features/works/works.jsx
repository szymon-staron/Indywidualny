import React from 'react';
import Header from '../../common/header/header';
import WorkElments from './subcomponents/workElements';
import styles from './works.module.scss';

const Works = () => {
  return (
    <section className={styles.ourWorks}>
      <Header title="tworzone z pasją" style={styles.header} />
      <WorkElments src="/image/work1.jpg" title="nasze realizacje" />
      <WorkElments
        src="/image/work2.jpg"
        title="Na pewno się nie zawiedziesz"
      />
      <WorkElments
        src="/image/work3.jpg"
        title="Zostań kolejnym szczęśliwym klientem"
      />
      <WorkElments src="/image/work4.jpg" title="Sprawdz nas!!!!" />
    </section>
  );
};

export default Works;
