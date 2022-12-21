import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./features/auth/RequireAuth/RequireAuth";
import LoginPage from "./features/login/pages/login.page";
import RegisterPage from "./features/register/pages/register.page";
import DashboardPage from "./features/dashboard/page/dashboard.page";
function App() {
  return (
    <Routes>
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="dashboard"
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
