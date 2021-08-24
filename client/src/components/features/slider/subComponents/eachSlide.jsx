import React, { useState, useEffect, useRef } from 'react';
import styles from '../sliderProduct.module.scss';
import Arrow from '../../../common/arrow/arrow';
import ProductBox from '../../../common/productBox/productBox';




const EachSlide = ({ slides, autoPlay }) => {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [slide, setSlide] = useState({
    activeIndex: 0,
    translate: 0,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeIndex } = slide;
  const autoPlayRef = useRef();
  const transitionRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    let interval = null;
    if (autoPlay) {
      interval = setInterval(play, autoPlay * 1000);
    }
    return () => {
      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [autoPlay]);

  const smoothTransition = () => {
    let _slides = [];
    if (activeIndex === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeIndex === 0) {
      _slides = [lastSlide, firstSlide, secondSlide];
    } else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

    setSlide({
      _slides,
    });
  };

  const nextSlide = () => {
    setSlide({
      activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1,
      translate:
        100 * (activeIndex + 1 > slides.length - 1 ? 0 : activeIndex + 1),
    });
  };

  const prevSlide = () => {
    setSlide({
      activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1,
      translate:
        100 * (activeIndex === 0 ? slides.length - 1 : activeIndex - 1),
    });
  };

  const arrayOfBestSellerProduct = slides.map((el) => (
    <div
      id={el.index}
      className={styles.slide}
      style={{
        transform: `translateX(-${slide.translate}%)`,
      }}
      key={el._id}
    >
      <ProductBox {...el} horizontal={true} style={{height:'100%', margin:0,width:'100%'}} />
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={[styles.arrow + ' ' + styles.left].join(' ')}>
        <Arrow direction="right" handleClick={nextSlide} />
      </div>
      <div className={styles.bestSellerProduct}>{arrayOfBestSellerProduct}</div>
      <div className={[styles.arrow + ' ' + styles.right].join(' ')}>
        <Arrow direction="left" handleClick={prevSlide} />
      </div>
    </div>
  );
};
export default EachSlide;
