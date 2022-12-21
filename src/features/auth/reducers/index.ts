import {
  AuthDispatchTypes,
  AUTH_FAIL,
  AUTH_LOADING,
  AUTH_SUCCESS,
  IAuthState,
} from "../types";

const INITIAL_STATE: IAuthState = {
  error: null,
  isAuthenticated: false,
  loading: true,
  user: null,
};

export const authReducer = (
  state: IAuthState = INITIAL_STATE,
  action: AuthDispatchTypes
) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case AUTH_FAIL:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }

  return state;
};
