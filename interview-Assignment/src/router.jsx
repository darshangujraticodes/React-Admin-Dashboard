import { createBrowserRouter } from "react-router";
import Home from "./pages/home/Home";
import App from "./App";
import DentalDashboard from "./pages/dental-dashboard/DentalDashboard";
import Telemedicine from "./pages/telemedicine/Telemedicine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "dental-dashboard", element: <DentalDashboard /> },
      { path: "telemedicine", element: <Telemedicine /> },
    ],
  },
]);

export default router;
