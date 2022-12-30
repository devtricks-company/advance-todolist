import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { User } from "../../auth/types";
import { UserType } from "../../users/types/user.type";
import ParticipantItem from "./participantItem";

interface IProjectList {
  participants: User[];
}
const ParticipantList: React.FC<IProjectList> = ({ participants }) => {
  console.log("participantList", participants);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {participants.map((participant: User) => (
        <ParticipantItem participant={participant} key={participant.email} />
      ))}
    </List>
  );
};

export default ParticipantList;
