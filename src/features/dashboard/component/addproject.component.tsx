import React from "react";
import { Form, Formik } from "formik";
import {
  CREATE_PROJECT_FORM,
  IAddProjectComponent,
  ICreateProjectForm,
} from "../types/project.types";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProjectAcion } from "../actions/project.actions";

const AddProject: React.FC<IAddProjectComponent> = ({ closeDrawer }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={CREATE_PROJECT_FORM}
        onSubmit={async (values: ICreateProjectForm, { setErrors }) => {
          try {
            dispatch(addProjectAcion(values));
          } catch (error) {}
        }}
      >
        {({ isSubmitting, touched, errors, values, handleChange }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "90vh",
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                  <TextField
                    id="title"
                    label="Title"
                    name="title"
                    variant="outlined"
                    fullWidth
                    value={values.title}
                    onChange={handleChange}
                    error={errors.title ? true : false}
                    helperText={errors.title}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                  <TextField
                    id="description"
                    label="Description"
                    name="description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={6}
                    value={values.description}
                    onChange={handleChange}
                    error={errors.description ? true : false}
                    helperText={errors.description}
                  />
                </Box>
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
                  onClick={closeDrawer}
                >
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Create
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddProject;
