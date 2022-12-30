import produce from "immer";
import {
  GET_USERS_PARTICIPANTS_FAIL,
  GET_USERS_PARTICIPANTS_REQUEST,
  GET_USERS_PARTICIPANTS_SUCCESS,
  IUserParticipants,
  UserParticipantDispatch,
} from "../types/user.type";

const INITIALSTATE: IUserParticipants = {
  loading: false,
  users: [],
  error: null,
};

export const getUserParticipantsReducer = (
  state: IUserParticipants = INITIALSTATE,
  action: UserParticipantDispatch
) =>
  produce(state, (darft: IUserParticipants) => {
    switch (action.type) {
      case GET_USERS_PARTICIPANTS_REQUEST:
        darft.loading = true;
        break;

      case GET_USERS_PARTICIPANTS_SUCCESS:
        darft.loading = false;
        darft.users = action.payload;
        break;

      case GET_USERS_PARTICIPANTS_FAIL:
        darft.loading = false;
        darft.error = action.payload;
        break;
    }
  });
