import React from 'react';
import WorkShopBanner from '../../features/workShopBanner/workShopBanner';
import AboutPassion from '../../features/aboutPassion/aboutPassion';
import Header from '../../common/header/header';
import Container from '../../layout/container/container';

const OurWork = () => {
  return (
    <Container>
      <Header title="serwis" />
      <WorkShopBanner />
      <AboutPassion />
    </Container>
  );
};
export default OurWork;
