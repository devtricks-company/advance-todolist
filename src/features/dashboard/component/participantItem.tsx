import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { User } from "../../auth/types";
import { UserType } from "../../users/types/user.type";

interface IParticipantsItem {
  participant: User;
}
const ParticipantItem: React.FC<IParticipantsItem> = ({ participant }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt={participant.firstName[0] + " " + participant.lastName[0]}
        />
      </ListItemAvatar>
      <ListItemText primary={participant.email} />
    </ListItem>
  );
};

export default ParticipantItem;
