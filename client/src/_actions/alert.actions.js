import { alertConstants } from '../_constants/alertConstants';

export const alertActions = {
  success,
  error,
  clear,
};

const { SUCCESS, ERROR, CLEAR } = alertConstants;

function success(message) {
  return { type: SUCCESS, message };
}
function error(message) {
  return { type: ERROR, message };
}
function clear() {
  return { type: CLEAR };
}
