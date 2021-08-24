import React from 'react';
import Footer from '../footer/footer';
import MainMenu from '../mainMenu/mainMenu';

const MainLayout = ({ children }) => (
  <>
    <MainMenu />
    {children}
    <Footer />
  </>
);

export default MainLayout;
