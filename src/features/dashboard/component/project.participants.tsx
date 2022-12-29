import { Avatar, Box } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { User } from "../../auth/types";
export interface IProjectParticipants {
  participants: User[];
}
const ProjectParticipants: React.FC<IProjectParticipants> = ({
  participants,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {participants.map((participant: User) => (
        <Avatar
          key={participant.email}
          sx={{ bgcolor: deepOrange[500], marginRight: "5px" }}
        >
          {participant.firstName[0]}
          {participant.lastName[0]}
        </Avatar>
      ))}
    </Box>
  );
};

export default ProjectParticipants;
