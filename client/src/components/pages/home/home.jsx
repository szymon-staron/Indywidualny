import React from 'react';
import Banner from '../../features/banner/banner';
import Works from '../../features/works/works';
import OurCompany from '../../features/ourCompany/ourCompany';
import DiscountSection from '../../features/discountSection/discountSection';

const Home = () => {
  return (
    <section>
      <Banner />
      <Works />
      <DiscountSection />
      <OurCompany />
    </section>
  );
};
export default Home;
