import { createSelector } from "reselect";
import { RootState } from "../../../store";
import { ProjectType } from "../types/project.types";

export const getProjectsSelector = createSelector(
  (state: RootState) => state.projects,
  (projects) => projects
);
