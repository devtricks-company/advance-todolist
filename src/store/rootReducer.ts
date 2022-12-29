import { combineReducers } from "redux";
import { authReducer } from "../features/auth/reducers";
import { ProjectsReducer } from "../features/dashboard/reducers";
const rootReducer = combineReducers({
  auth: authReducer,
  projects: ProjectsReducer,
});

export default rootReducer;
