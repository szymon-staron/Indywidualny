const initialState = {
  product: {
    data: [],
    request: {
      pending: false,
      error: null,
      success: null,
    },
    option: {
      defaultSort: true,
      maxPriceSort: false,
      minPriceSort: false,
      popularitySort: false,
      newsProductSort: false,
    },
    search: '',
    category: 'all',
    maxPrice: 0,
    minPrice: 0,
  },
  loading: {
    isLoading: false,
    duration: 0,
  },
  order: [],
  errorId: null,
};

export default initialState;
