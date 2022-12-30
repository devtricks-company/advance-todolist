import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { User } from "../../auth/types";
import AddParticipantsComponent from "./AddParticipants.component";
import ParticipantList from "./ParticipantList";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsSelector } from "../selector/project.selector";
import { getUserParticipantsAction } from "../../users/action/user.action";
import AddIcon from "@mui/icons-material/Add";
import { UserType } from "../../users/types/user.type";
import { addParticipantsAction } from "../actions/project.actions";
const AddParticipants = () => {
  const dispatch = useDispatch();
  const { project } = useSelector(getProjectsSelector);
  const [participantsState, setParticipantsState] = useState<UserType[]>([]);
  useEffect(() => {
    if (project) {
      dispatch(getUserParticipantsAction(project!._id));
    }
  }, [project]);
  const setParticipantsHandler = (value: UserType[]) => {
    setParticipantsState(value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90vh",
      }}
    >
      <Box>
        <AddParticipantsComponent
          setParticipantsHandler={setParticipantsHandler}
        />
        <ParticipantList participants={project!.participant} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          sx={{
            marginRight: "10px",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => {
            dispatch(addParticipantsAction(project!._id, participantsState));
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddParticipants;
