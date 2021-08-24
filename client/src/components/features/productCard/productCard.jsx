import React, { useState, useEffect } from 'react';
import styles from './productCard.module.scss';
import ProductListAmount from '../../common/productListAmount/productListAmount';
import SortList from '../../common/sortList/sortList';
import Gallery from '../../common/gallery/gallery';
import RenderProduct from '../../common/renderProduct/renderProduct';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCategory,
  loadProductRequest,
  setMaxPrice,
  setMinPrice,
} from '../../../_actions/productActions';

const ProductCard = ({ filterPrice }) => {
  const [sortOption, setSortOption] = useState('default');
  const [listOption, setListOption] = useState('list');
  const [isAmountOnPage, setAmountOnPage] = useState(15);
  const [indexProduct, setIndexProduct] = useState(1);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.data);
  const category = useSelector((state) => state.product.category);
  const search = useSelector((state) => state.product.search);

  const productByCategory =
    category !== 'all'
      ? product.filter((item) => item.category === category)
      : product;

  const productBySearch = search
    ? productByCategory.filter((item) =>
        new RegExp(search, 'i').test(item.title)
      )
    : productByCategory;

  const productToDisplay = filterPrice
    ? productBySearch.filter((item) => item.price >= filterPrice)
    : productBySearch;

  const price = productByCategory.map((item) => item.price);

  useEffect(() => {
    dispatch(loadProductRequest());
    return () => {
      dispatch(addCategory('all'));
    };
  }, [dispatch]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(setMinPrice(Math.min(...price)));
      dispatch(setMaxPrice(Math.max(...price, 0)));
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch, price]);

  const handleSetSortOption = (option) => setSortOption(option);
  const handleSetListOption = (option) => setListOption(option);
  const handleSetAmountOnPage = (e) => setAmountOnPage(e.target.value);
  const handleSetIndexProduct = (index) => setIndexProduct(index);

  const horizontalView = listOption === 'list' ? true : false;

  return (
    <section className={styles.productCard}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <p className={styles.resultCount}>
            Wyświetlanie{' '}
            {productToDisplay.length <= isAmountOnPage
              ? productToDisplay.length
              : isAmountOnPage}{' '}
            z {productToDisplay.length} wyników
          </p>
          <div className={styles.vievCount}>
            <p>Pokaż</p>
            <ul className={styles.amount}>
              <li
                className={isAmountOnPage === 15 ? styles.active : null}
                onClick={handleSetAmountOnPage}
                value={15}
              >
                15
              </li>
              <li
                className={isAmountOnPage === 30 ? styles.active : null}
                onClick={handleSetAmountOnPage}
                value={30}
              >
                30
              </li>
              <li
                className={isAmountOnPage === 60 ? styles.active : null}
                onClick={handleSetAmountOnPage}
                value={60}
              >
                60
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.toolbarRight}>
          <Gallery handleListOption={handleSetListOption} />
          <SortList handleSortOption={handleSetSortOption} />
        </div>
      </div>
      <div className={styles.renderProduct}>
        <RenderProduct
          horizontal={horizontalView}
          isAmountOnPage={isAmountOnPage}
          arrayToDisplay={productToDisplay}
          sortOption={sortOption}
          amount={indexProduct}
        />
        <ProductListAmount
          array={productToDisplay}
          value={isAmountOnPage}
          index={indexProduct}
          handleSetIndex={handleSetIndexProduct}
        />
      </div>
    </section>
  );
};

export default ProductCard;
