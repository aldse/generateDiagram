import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Logo from "./pages/Logo";
import Alert from "./pages/Alert";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoutes/protectedRoute";

const routes = createBrowserRouter([
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/logo",
    element: <ProtectedRoute element={<Logo />} />,
  },
  {
    path: "/alert",
    element: <ProtectedRoute element={<Alert />} />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default routes;
