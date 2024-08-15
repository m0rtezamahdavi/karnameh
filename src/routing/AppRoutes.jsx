import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import PrivateRoutes from './PrivateRoutes';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes element={<App />}>
        <Route path="/*" element={<PrivateRoutes />} />
        <Route index element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
