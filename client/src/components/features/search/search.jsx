import React,{ useEffect, useState, useRef } from 'react';
import styles from './search.module.scss';
import Modal from '../modal/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {

  const [show,setShow] =useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  const handleChangeSearch = (e) => setSearch(e.target.value);

  const handleOnCloseModal = () => {
    setShow(false);
    setSearch('');
  };
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
      <>
      <button className={styles.searchToggle} onClick={()=>setShow(true)}>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    <Modal show={show} title='wyszukaj produkt' close={()=>setShow(false)}>
    <div className={styles.searchWrapper}>
        <input
          ref={inputRef}
          type="text"
          value={search}
          placeholder="Wyszukaj produkt"
          onChange={handleChangeSearch}
          className={styles.inputSearch}
        />
        <button
          type="submit"
          onClick={handleOnCloseModal}
          className={styles.searchBtn}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </Modal>
  </>
  );
};

export default Search;
