import { StateError } from "../../auth/types";

export const GET_USERS_PARTICIPANTS_REQUEST = "GET_USERS_PARTICIPANTS_REQUEST";
export const GET_USERS_PARTICIPANTS_SUCCESS = "GET_USERS_PARTICIPANTS_SUCCESS";
export const GET_USERS_PARTICIPANTS_FAIL = "GET_USERS_PARTICIPANTS_FAIL";

export interface IUserParticipants {
  loading: boolean;
  users: UserType[];
  error: StateError | null;
}

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export interface getUserParticipantsRequest {
  type: typeof GET_USERS_PARTICIPANTS_REQUEST;
}

export interface getUsersParticipantsSuccess {
  type: typeof GET_USERS_PARTICIPANTS_SUCCESS;
  payload: UserType[];
}

export interface getUserParticipantsFail {
  type: typeof GET_USERS_PARTICIPANTS_FAIL;
  payload: StateError;
}

export type UserParticipantDispatch =
  | getUserParticipantsRequest
  | getUsersParticipantsSuccess
  | getUserParticipantsFail;
