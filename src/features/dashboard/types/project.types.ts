import { StateError, User } from "../../auth/types";

export interface ICreateProjectForm {
  title: string;
  description?: string;
}

export const CREATE_PROJECT_FORM: ICreateProjectForm = {
  title: "",
  description: "",
};

export interface IProjectItem {
  project: ProjectType;
  openParticipantSetting: () => void;
}

export interface IAddProjectComponent {
  closeDrawer: () => void;
}

export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  owner: User;
  participant: User[];
  createdAt: string;
  updatedAt: string;
};

// ========================================== project type ===================================
export const PROJECT_REQUEST = "PROJECT_REQUEST";
export const PROJECT_SUCCESS = "PROJECT_SUCCESS";
export const PROJECT_FAIL = "PROJECT_FAIL";

export interface ProjectRequest {
  type: typeof PROJECT_REQUEST;
}

export interface ProjectSuccess {
  type: typeof PROJECT_SUCCESS;
  payload: ProjectType[];
}

export interface ProjectFail {
  type: typeof PROJECT_FAIL;
  payload: StateError;
}

//=============== INITIAL_STATE ==============================
export interface IProjectINITIOALSTATE {
  error: StateError | null | ProjectType[];
  loading: boolean | null;
  projects: ProjectType[];
  project: ProjectType | null;
}

// ==================================== Add Project types ==========================

export const ADD_PROJECT_REQUEST = "ADD_PROJECT_REQUEST";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAIL = "ADD_PROJECT_FAIL";

export interface AddProjectRequest {
  type: typeof ADD_PROJECT_REQUEST;
}

export interface AddProjectSuccess {
  type: typeof ADD_PROJECT_SUCCESS;
  payload: ProjectType;
}

export interface AddProjectFail {
  type: typeof ADD_PROJECT_FAIL;
  payload: StateError;
}

//=========================== change Project ==================================
export const CHANAGE_CURRENT_PROJECT = "CHANGE_CURRENT_PROJECT";

export interface ChangeCurrentProject {
  type: typeof CHANAGE_CURRENT_PROJECT;
  payload: ProjectType;
}

//===============================================================================

export type ProjectDispatchAction =
  | ProjectRequest
  | ProjectSuccess
  | ProjectFail
  | AddProjectRequest
  | AddProjectSuccess
  | AddProjectFail
  | ChangeCurrentProject;
