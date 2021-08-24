import { productContants } from '../_constants/product.constants';
import initialState from '../store/initialState';

const {
  ADD_CATEGORY,
  END_REQUEST,
  ERROR_REQUEST,
  LOAD_PRODUCT,
  SET_MAX_PRICE,
  SET_MIN_PRICE,
  SET_OPTION_OF_SORT,
  SET_SEARCH_VALUE,
  START_REQUEST,
} = productContants;

export const product = (state = initialState.product, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return { ...state, data: [...action.payload] };
    case START_REQUEST:
      return {
        ...state,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case END_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case ERROR_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: action.error,
          success: false,
        },
      };
    case SET_MAX_PRICE:
      return { ...state, maxPrice: action.payload };
    case SET_MIN_PRICE:
      return { ...state, minPrice: action.payload };
    case SET_OPTION_OF_SORT:
      return {
        ...state,
        option: {
          defaultSort: action.payload === 'defaultSort' ? true : false,
          maxPriceSort: action.payload === 'maxPriceSort' ? true : false,
          minPriceSort: action.payload === 'minPriceSort' ? true : false,
          popularitySort: action.payload === 'popularitySort' ? true : false,
          newsProductSort: action.payload === 'newsProductSort' ? true : false,
        },
      };
    case ADD_CATEGORY:
      return { ...state, category: action.payload };
    case SET_SEARCH_VALUE:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
