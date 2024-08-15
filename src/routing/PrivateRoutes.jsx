import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/general/Dashboard";
import User from "../modules/users/User";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="user" element={<User />} />
    </Routes>
  );
};

export default PrivateRoutes;
