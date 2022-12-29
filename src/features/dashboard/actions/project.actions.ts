import axios from "axios";
import { Dispatch } from "redux";
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
