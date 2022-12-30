import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Box,
  TextField,
} from "@mui/material";
import React from "react";
import { ProjectType } from "../types/project.types";
import { useSelector, useDispatch } from "react-redux";
import { getUserParticipantsSelector } from "../../users/selector/user.selector";
import { UserType } from "../../users/types/user.type";
import { addParticipantsAction } from "../actions/project.actions";
interface IAddParticipantsComponent {
  setParticipantsHandler: (value: UserType[]) => void;
}
const AddParticipantsComponent: React.FC<IAddParticipantsComponent> = ({
  setParticipantsHandler,
}) => {
  const { loading, error, users } = useSelector(getUserParticipantsSelector);
  const dispatch = useDispatch();
  if (loading) return <h1>Loading...</h1>;
  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      <Autocomplete
        multiple
        id="tags-outlined"
        options={users}
        getOptionLabel={(option) => option.email}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose Users for Participants"
            placeholder="Choose Users for Participants"
          />
        )}
        onChange={(
          event: React.SyntheticEvent<Element, Event>,
          value: UserType[],
          reason: AutocompleteChangeReason,
          details?: AutocompleteChangeDetails<UserType> | undefined
        ) => {
          setParticipantsHandler(value);
        }}
      />
    </Box>
  );
};

export default AddParticipantsComponent;
