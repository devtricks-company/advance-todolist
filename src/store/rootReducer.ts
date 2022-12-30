import { combineReducers } from "redux";
import { authReducer } from "../features/auth/reducers";
import { ProjectsReducer } from "../features/dashboard/reducers";
import { getUserParticipantsReducer } from "../features/users/reducer/user.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  projects: ProjectsReducer,
  participants: getUserParticipantsReducer,
});

export default rootReducer;
