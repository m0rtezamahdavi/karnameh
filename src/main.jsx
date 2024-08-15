import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routing/AppRoutes";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./configs/reactQuery";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
    {/* <ReactQueryDevtools initialIsOpen /> */}
  </StrictMode>
);
