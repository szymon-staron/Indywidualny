import React, { useEffect, useRef } from 'react';
import styles from './load.module.scss';
import gsap from 'gsap';

const Load = () => {
  const background = useRef(null);

  useEffect(() => {
    const elements = [...background.current.children];
    const topSide = elements[0];
    const leftSide = elements[1];
    const rightSide = elements[2];
    const left = elements[3];
    const right = elements[4];

    gsap.set([topSide, leftSide, rightSide, left, right], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    tl.fromTo(left, { x: '-=300' }, { duration: 1, x: '+=300', autoAlpha: 1 })
      .fromTo(
        right,
        { x: '+=300' },
        { duration: 1, x: '-=300', autoAlpha: 1 },
        '-=1'
      )
      .fromTo(
        leftSide,
        { x: '-=300' },
        { duration: 1, x: '+=300', autoAlpha: 1 }
      )
      .fromTo(
        rightSide,
        { x: '+=300' },
        { duration: 1, x: '-=300', autoAlpha: 1 },
        '-=1'
      )
      .fromTo(
        topSide,
        { y: '-=300' },
        { duration: 1, y: '+=300', autoAlpha: 1 },
        '-=1'
      )
      .to([left, right, leftSide, rightSide, topSide], {
        duration: 0.4,
        autoAlpha: 0,
      });
  }, [background]);

  return (
    <section className={styles.wrapper}>
      <div ref={background} className={styles.background}>
        <div className={styles.topSide}>T</div>
        <div className={styles.leftSide}>M</div>
        <div className={styles.rightSide}>B</div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
};

export default Load;
