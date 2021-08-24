import React, { useState, useEffect, useRef } from 'react';
import styles from './mainMenu.module.scss';
import Logo from '../../common/logo/logo';
import TopNav from '../../features/topNav/topNav';
import Basket from '../../features/basket/basket';
import Search from '../../features/search/search';

const MainMenu = () => {
  const myRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const handleOpenNav = () => setIsOpen((prev) => !prev);
  const handleOpenSearch = () => setIsOpenSearch((prev) => !prev);

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen || isOpenSearch) {
      document.addEventListener('click', close);
    }

    return () => {
      document.removeEventListener('click', close);
    };
  }, [isOpen, isOpenSearch]);

  return (
    <header id="Menu" className={styles.header} ref={myRef}>
      <div className={styles.mainMenu}>
        <Logo />
        <Basket />
        <Search
          close={close}
          isOpenSearch={isOpenSearch}
          handleOpenSearch={handleOpenSearch}
        />
        <TopNav
          close={close}
          isOpen={isOpen}
          handleOpenNav={handleOpenNav}
        />
      </div>
    </header>
  );
};

export default MainMenu;
