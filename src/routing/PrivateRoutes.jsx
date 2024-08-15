import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/general/Dashboard";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default PrivateRoutes;
