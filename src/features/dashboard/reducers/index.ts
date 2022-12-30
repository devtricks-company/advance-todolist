import {
  IProjectINITIOALSTATE,
  ProjectDispatchAction,
  PROJECT_FAIL,
  PROJECT_REQUEST,
  PROJECT_SUCCESS,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  CHANAGE_CURRENT_PROJECT,
  ADD_PARTICIPANTS_REQUEST,
  ADD_PARTICIPANTS_SUCCESS,
  ADD_PARTICIPANTS_FAIL,
} from "../types/project.types";
import { produce } from "immer";

const INITIAL_STATE: IProjectINITIOALSTATE = {
  error: null,
  loading: false,
  projects: [],
  project: null,
};

export const ProjectsReducer = (
  state: IProjectINITIOALSTATE = INITIAL_STATE,
  action: ProjectDispatchAction
) =>
  produce(state, (draft: IProjectINITIOALSTATE) => {
    switch (action.type) {
      case PROJECT_REQUEST:
        draft.loading = true;
        draft.error = null;
        draft.projects = [];
        draft.project = null;
        break;

      case PROJECT_SUCCESS:
        draft.loading = false;
        draft.projects = action.payload;
        draft.error = null;
        break;

      case PROJECT_FAIL:
        draft.loading = false;
        draft.error = action.payload;
        draft.projects = [];
        draft.project = null;
        break;

      case ADD_PROJECT_REQUEST:
        draft.loading = true;
        break;

      case ADD_PROJECT_SUCCESS:
        console.log("projects", [...draft.projects]);
        console.log(action.payload);
        draft.loading = false;
        draft.project = action.payload;
        draft.projects.push(action.payload);
        break;

      case ADD_PROJECT_FAIL:
        draft.loading = false;
        draft.error = action.payload;
        break;

      case CHANAGE_CURRENT_PROJECT:
        draft.project = action.payload;
        break;

      case ADD_PARTICIPANTS_REQUEST:
        draft.loading = true;
        break;
      case ADD_PARTICIPANTS_SUCCESS:
        draft.loading = false;
        draft.project = action.payload;
        break;
      case ADD_PARTICIPANTS_FAIL:
        draft.loading = false;
        draft.error = action.payload;
        break;
    }
  });
