import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/general/Dashboard";
import SuspensedView from "../components/general/SuspensedView";
import User from "../modules/users/User";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <SuspensedView>
            <Dashboard />
          </SuspensedView>
        }
      />
      <Route path="user" element={<User />} />
    </Routes>
  );
};

export default PrivateRoutes;
