import { orderConstants } from '../_constants/order.constants';

const { ADD_TO_ORDER, UPDATE_ORDER_AMOUNT, DELETE_ORDER } = orderConstants;

export const addProductToOrder = (payload) => ({
  type: ADD_TO_ORDER,
  payload,
});
export const updateOrderAmount = (amount, id) => ({
  type: UPDATE_ORDER_AMOUNT,
  payload: {
    amount,
    id,
  },
});
export const deleteOrder = (id) => ({
  type: DELETE_ORDER,
  payload: {
    id,
  },
});
