import { combineReducers } from 'redux';
import { product } from './productReducer';
import { order } from './orderReducer';
import { authentication } from './authenticationReducer';
import { alert } from './alertReducer';
import { registration } from './registrationReducer';

export const rootReducer = combineReducers({
 authentication,
  registration,
  alert,
  product,
  order,
});
