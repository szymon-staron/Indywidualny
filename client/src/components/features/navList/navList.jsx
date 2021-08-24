import React from 'react';
import styles from './navList.module.scss';
import { NavLink } from 'react-router-dom';

const NavList = ({ close }) => {
  return (
    <ul className={styles.links}>
      <li className={styles.eachLink} onClick={close}>
        <NavLink
          className={styles.link}
          to="/workShop"
          activeClassName={styles.active}
        >
          Automaty
        </NavLink>
      </li>
      <li className={styles.eachLink} onClick={close}>
        <NavLink
          className={styles.link}
          to="/shop"
          activeClassName={styles.active}
        >
          sklep
        </NavLink>
      </li>
      <li className={styles.eachLink} onClick={close}>
        <NavLink
          className={styles.link}
          to="/blog"
          activeClassName={styles.active}
        >
          blog
        </NavLink>
      </li>
      <li className={styles.eachLink} onClick={close}>
        <NavLink
          className={styles.link}
          to="/contact"
          activeClassName={styles.active}
        >
          kontakt
        </NavLink>
      </li>
      <li className={styles.eachLink} onClick={close}>
        <NavLink
          className={styles.link}
          to="/login"
          activeClassName={styles.active}
        >
          Moje konto
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
