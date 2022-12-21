import { Fingerprint } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Container, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { axios, todoListApi } from "../../../../api";
import { errorToMap } from "../../../../utils/errorToMap";
import { IRegisterType } from "../../types/register.types";
import { useNavigate } from "react-router-dom";
const initialRegisterValue: IRegisterType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const RegisterComponent = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "400px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: "center",
          }}
        >
          Register
        </Typography>

        <Formik
          initialValues={initialRegisterValue}
          onSubmit={async (values: IRegisterType, { setErrors }) => {
            try {
              await todoListApi.post("/auth/register", values);
              navigate("/loing");
            } catch (error) {
              if (axios.isAxiosError(error)) {
                if (error?.response?.data.message) {
                  console.log(error);
                  setErrors(errorToMap(error?.response?.data.message));
                } else {
                  console.log(error);
                }
              }
            }
          }}
        >
          {({ isSubmitting, touched, errors, values, handleChange }) => (
            <Form>
              <Box
                sx={{
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <TextField
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <TextField
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName}
                />
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <TextField
                  id="password"
                  label="Password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password ? true : false}
                  helperText={errors.password}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <LoadingButton
                  loadingPosition="start"
                  startIcon={<Fingerprint />}
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                >
                  Save
                </LoadingButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default RegisterComponent;
