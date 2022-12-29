import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "../../../components/AppBar/AppBar";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import AddProject from "../component/addproject.component";
import { useDispatch } from "react-redux";
import { getProjctesAction } from "../actions/project.actions";
import ProjectList from "../component/projectListContainer";
import AddParticipants from "../component/addParticipants";

const DashboardPage = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openParticipant, setOpenParticipant] = useState<boolean>(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjctesAction());
  }, []);
  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const openParticipantSetting = (): void => {
    setOpenParticipant(true);
  };
  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: 5,
          }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenDrawer(true)}
          >
            New Project
          </Button>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <ProjectList openParticipantSetting={openParticipantSetting} />
      </Container>

      <Drawer anchor="right" open={openDrawer}>
        <Box
          sx={{
            width: "600px",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Create new Project
            </Typography>
            <IconButton onClick={closeDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <AddProject closeDrawer={closeDrawer} />
          </Box>
        </Box>
      </Drawer>
      <Drawer anchor="right" open={openParticipant}>
        <Box
          sx={{
            width: "600px",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Add Participants To Project
            </Typography>
            <IconButton onClick={closeDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <AddParticipants />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default DashboardPage;
