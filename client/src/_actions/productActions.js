import axios from 'axios';
import { API_URL } from '../config';
import { productContants } from '../_constants/product.constants';

const {
  START_REQUEST,
  END_REQUEST,
  ERROR_REQUEST,
  LOAD_PRODUCT,
  ADD_CATEGORY,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_SEARCH_VALUE,
  SET_OPTION_OF_SORT,
} = productContants;

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

export const loadProduct = (payload) => ({
  type: LOAD_PRODUCT,
  payload,
});

export const loadProductRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const discountProduct = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/discountProducts`);
      dispatch(loadProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const setMinPrice = (payload) => ({
  payload,
  type: SET_MIN_PRICE,
});

export const setMaxPrice = (payload) => ({
  payload,
  type: SET_MAX_PRICE,
});

export const setSearchValue = (payload) => ({
  payload,
  type: SET_SEARCH_VALUE,
});
export const setOptionSort = (payload) => {
  return {
    type: SET_OPTION_OF_SORT,
    payload,
  };
};
export const addCategory = (category) => ({
  payload: category,
  type: ADD_CATEGORY,
});
