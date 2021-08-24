import { orderConstants } from '../_constants/order.constants';
import initialState from '../store/initialState';

const { ADD_TO_ORDER, UPDATE_ORDER_AMOUNT, DELETE_ORDER } = orderConstants;

export const order = (state = initialState.order, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      console.log(action.payload);
      const some = state.some((item) => item.id === action.payload.id);
      if (some) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else return [...state, action.payload];
    case UPDATE_ORDER_AMOUNT:
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else if (item.id === action.payload.id)
          item.amount = action.payload.amount;
        return item;
      });
    case DELETE_ORDER:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
