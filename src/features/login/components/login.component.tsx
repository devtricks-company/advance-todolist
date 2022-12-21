import { Fingerprint } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Container, TextField, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Form, Formik } from "formik";
import * as React from "react";
import { axios, todoListApi } from "../../../api";
import { errorToMap } from "../../../utils/errorToMap";
import { ILoginType } from "../types/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../auth/actions";
const initialRegisterValue: ILoginType = {
  email: "",
  password: "",
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [loginSuccessOpen, setLoginSuccessOpen] = React.useState(false);
  const navigate = useNavigate();
  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCloseLoginSuccess = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setLoginSuccessOpen(false);
  };

  return (
    <>
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
            Login
          </Typography>

          <Formik
            initialValues={initialRegisterValue}
            onSubmit={async (values: ILoginType, { setErrors }) => {
              try {
                const res = await todoListApi.post("/auth/login", values, {
                  withCredentials: true,
                });
                dispatch(authAction());
                setLoginSuccessOpen(true);
                setTimeout(() => {
                  navigate("/dashboard");
                }, 3000);
              } catch (error) {
                if (axios.isAxiosError(error)) {
                  if (error?.response?.data.message) {
                    console.log(error?.response?.data.message);
                    if (error?.response?.data.message === "Unauthorized") {
                      console.log(error?.response?.data.message);
                      console.log("set");
                      setOpen(true);
                    } else {
                      console.log(error?.response?.data.message);
                      setErrors(errorToMap(error?.response?.data.message));
                    }
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
                    Login
                  </LoadingButton>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Email or Password Is Not Valid
          </Alert>
        </Snackbar>

        <Snackbar
          open={loginSuccessOpen}
          autoHideDuration={6000}
          onClose={handleCloseLoginSuccess}
        >
          <Alert
            onClose={handleCloseLoginSuccess}
            severity="success"
            sx={{ width: "100%" }}
          >
            Login Successfully
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default LoginComponent;
