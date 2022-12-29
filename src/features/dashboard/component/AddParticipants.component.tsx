import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

const AddParticipantsComponent = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      <Autocomplete
        multiple
        id="tags-outlined"
        options={["amir"]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
    </Box>
  );
};

export default AddParticipantsComponent;
