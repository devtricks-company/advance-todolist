import axios from "axios";
import { Dispatch } from "react";
import {
  GET_USERS_PARTICIPANTS_REQUEST,
  GET_USERS_PARTICIPANTS_SUCCESS,
  GET_USERS_PARTICIPANTS_FAIL,
  UserParticipantDispatch,
} from "../types/user.type";

export const getUserParticipantsAction =
  (projectId: string) =>
  async (dispatch: Dispatch<UserParticipantDispatch>) => {
    try {
      dispatch({
        type: GET_USERS_PARTICIPANTS_REQUEST,
      });

      const res = await axios.get(
        `http://localhost:4500/api/user/project/${projectId}`,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: GET_USERS_PARTICIPANTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: GET_USERS_PARTICIPANTS_FAIL,
          payload: error?.response?.data.message,
        });
      }
    }
  };
