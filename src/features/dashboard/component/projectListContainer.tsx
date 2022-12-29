import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { getProjectsSelector } from "../selector/project.selector";
import { ProjectType } from "../types/project.types";
import ProjectItem from "./projectItem";

interface IProjectList {
  openParticipantSetting: () => void;
}
const ProjectList: React.FC<IProjectList> = ({ openParticipantSetting }) => {
  const { projects } = useSelector(getProjectsSelector);

  return (
    <Grid container spacing={2}>
      {projects.map((project: ProjectType) => (
        <ProjectItem
          key={project._id}
          project={project}
          openParticipantSetting={openParticipantSetting}
        />
      ))}
    </Grid>
  );
};

export default ProjectList;
