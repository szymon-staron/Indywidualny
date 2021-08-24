import { history } from '../_helpers/history';
import { userService } from '../_services/user.service';
import { userConstants } from '../_constants/user.constants';
import { alertActions } from '../_actions/alert.actions';

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} = userConstants;

export const userActions = {
  login,
  logout,
  register,
};

function login(email, password, from) {
  return (dispatch) => {
    dispatch(request({ email }));
    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        history.push(from);
      },
      (error) => {
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };
  function request(user) {
    return {
      type: LOGIN_REQUEST,
      user,
    };
  }
  function success(user) {
    return {
      type: LOGIN_SUCCESS,
      user,
    };
  }
  function failure(error) {
    return {
      type: LOGIN_FAILURE,
      error,
    };
  }
}

function logout() {
  userService.logout();
  return { type: LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));
    userService.register(user).then(
      (user) => {
        dispatch(success(user));
        history.push('/login');
        dispatch(alertActions.success('Rejestracja zakończona powodzeniem'));
      },
      (error) => {
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(user) {
    return { type: REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: REGISTER_SUCCESS, user };
  }

  function failure(error) {
    return { type: REGISTER_FAILURE, error };
  }
}