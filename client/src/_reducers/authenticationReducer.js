import { userConstants } from '../_constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = userConstants;

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case LOGIN_SUCCESS:
      return {
        loggingIn: true,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {  loggingIn: false, user};
    case LOGOUT:
      return { loggingIn: false, user};;
    default:
      return state;
  }
};
