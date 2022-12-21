export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export type StateError = {
  statusCode: number;
  message: string;
  error: string;
};

export interface IAuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: StateError | null;
}

//=========================================== Action Type ==================================
export interface AuthLoading {
  type: typeof AUTH_LOADING;
}

export interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
  payload: User;
}

export interface AuthFail {
  type: typeof AUTH_FAIL;
  payload: StateError;
}

// ========================================= AuthDispatchTypes ====================================

export type AuthDispatchTypes = AuthLoading | AuthFail | AuthSuccess;
