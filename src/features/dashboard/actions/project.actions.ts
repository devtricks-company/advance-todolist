import axios from "axios";
import { Dispatch } from "redux";
import { UserType } from "../../users/types/user.type";
import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  CHANAGE_CURRENT_PROJECT,
  ICreateProjectForm,
  ProjectDispatchAction,
  ProjectType,
  PROJECT_FAIL,
  PROJECT_REQUEST,
  PROJECT_SUCCESS,
  ADD_PARTICIPANTS_REQUEST,
  ADD_PARTICIPANTS_SUCCESS,
  ADD_PARTICIPANTS_FAIL,
} from "../types/project.types";

export const getProjctesAction =
  () => async (dispatch: Dispatch<ProjectDispatchAction>) => {
    dispatch({
      type: PROJECT_REQUEST,
    });

    try {
      const res = await axios.get(`http://localhost:4500/api/project`, {
        withCredentials: true,
      });

      dispatch({
        type: PROJECT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: PROJECT_FAIL,
          payload: error?.response?.data.message,
        });
      }
    }
  };

export const addProjectAcion =
  (project: ICreateProjectForm) =>
  async (dispatch: Dispatch<ProjectDispatchAction>) => {
    dispatch({
      type: ADD_PROJECT_REQUEST,
    });

    try {
      const res = await axios.post(
        `http://localhost:4500/api/project`,
        project,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {}
  };

export const changeCurrentProjectAction =
  (project: ProjectType) => (dispatch: Dispatch<ProjectDispatchAction>) => {
    dispatch({
      type: CHANAGE_CURRENT_PROJECT,
      payload: project,
    });
  };

export const addParticipantsAction =
  (projectId: string, participants: UserType[]) =>
  async (dispatch: Dispatch<ProjectDispatchAction>) => {
    try {
      dispatch({
        type: ADD_PARTICIPANTS_REQUEST,
      });

      const res = await axios.put(
        `http://localhost:4500/api/project/addparticipants/${projectId}`,
        { participants },
        { withCredentials: true }
      );

      dispatch({
        type: ADD_PARTICIPANTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: ADD_PARTICIPANTS_FAIL,
          payload: error?.response?.data.message,
        });
      }
    }
  };
