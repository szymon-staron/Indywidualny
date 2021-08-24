import React from 'react';
import EachSlide from './subComponents/eachSlide';
import Header from '../../common/header/header';
import PropTypes from 'prop-types';

const SliderProduct = ({ title, slides, duration, styles}) => {
  if (slides.lenght === 0) {
    return null;
  }
  const ElementsRowSlider = (
    <>
      <Header title={title} />
      <EachSlide slides={slides} autoPlay={duration}/>
    </>
  );
  return <section className={styles}>{ElementsRowSlider}</section>;
};

SliderProduct.prototype = {
  title: PropTypes.string,
  slides: PropTypes.array,
  duration: PropTypes.number,
  style: PropTypes.string,
};
SliderProduct.defaultProps = {
  title: 'slider',
  slides: [],
  duration: 0,
  horizontal: true,
};
export default SliderProduct;
