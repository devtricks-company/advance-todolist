import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { IProjectItem, ProjectType } from "../types/project.types";
import ProjectParticipants from "./project.participants";
import ModeIcon from "@mui/icons-material/Mode";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useDispatch } from "react-redux";
import { changeCurrentProjectAction } from "../actions/project.actions";

const ProjectItem: React.FC<IProjectItem> = ({
  project,
  openParticipantSetting,
}) => {
  const dispatch = useDispatch();

  const openParticipantsOptionHandler = (): void => {
    dispatch(changeCurrentProjectAction(project));
    openParticipantSetting();
  };
  return (
    <Grid item xs={4}>
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={openParticipantsOptionHandler}>
                <PersonAddAltIcon />
              </IconButton>
              <IconButton>
                <ModeIcon />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="body1">{project.description}</Typography>
          <ProjectParticipants participants={project.participant} />
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProjectItem;
