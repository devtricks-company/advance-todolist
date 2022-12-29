import { Box, Button } from "@mui/material";
import React from "react";
import { User } from "../../auth/types";
import AddParticipantsComponent from "./AddParticipants.component";
import ParticipantList from "./ParticipantList";
import { useSelector } from "react-redux";
import { getProjectsSelector } from "../selector/project.selector";
const AddParticipants = () => {
  const { project } = useSelector(getProjectsSelector);
  return (
    <Box>
      <AddParticipantsComponent />
      <ParticipantList participants={project!.participant} />
      <Box>
        <Button>Cancel</Button>
        <Button>Add</Button>
      </Box>
    </Box>
  );
};

export default AddParticipants;
