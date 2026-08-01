import { createRoot } from "react-dom/client";
import "./index.css";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ContextProvider>
      <AuthRoutes />
      <ToastContainer />
    </ContextProvider>
  </AuthProvider>,
);
