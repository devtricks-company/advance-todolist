import axios from "axios";
import { Dispatch } from "redux";
import {
  AuthDispatchTypes,
  AUTH_FAIL,
  AUTH_LOADING,
  AUTH_SUCCESS,
} from "../types";

export const authAction =
  () => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({
        type: AUTH_LOADING,
      });

      const { data } = await axios.get(
        `http://localhost:4500/api/auth/status`,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: AUTH_SUCCESS,
        payload: data,
      });
      console.log("finsish");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: AUTH_FAIL,
          payload: error?.response?.data.message,
        });
      }
    }
  };
