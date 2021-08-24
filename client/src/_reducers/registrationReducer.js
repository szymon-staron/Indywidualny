import { userConstants } from '../_constants/user.constants';

const { REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_REQUEST } = userConstants;

export function registration(state = {}, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { registering: true };
    case REGISTER_SUCCESS:
      return {};
    case REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
