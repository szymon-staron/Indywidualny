import { alertConstants } from '../_constants/alertConstants';

const { SUCCESS, ERROR, CLEAR } = alertConstants;

export function alert(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        type: 'ALERT_SUCCESS',
        message: action.message,
      };
    case ERROR:
      return {
        type: 'ALERT_ERROR',
        message: action.message,
      };
    case CLEAR:
      return {};
    default:
      return state;
  }
}
