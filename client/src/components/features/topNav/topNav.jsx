import React from 'react';
import styles from './topNav.module.scss';
import NavList from '../../features/navList/navList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const TopNav = ({ isOpen, handleOpenNav, close }) => {
 
  const OpenButton = !isOpen ? (
    <FontAwesomeIcon className={styles.icon} icon={faBars} />
  ) : (
    <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
  );
 
  return (
    <>
      <button onClick={handleOpenNav} className={styles.topNavBtn}>
      {OpenButton}
    </button>
      <nav
        className={[styles.mainNav,isOpen ? styles.show :null ].join(' ')}
      >
        <NavList close={close} />
      </nav>
    </>
  );
};
export default TopNav;
