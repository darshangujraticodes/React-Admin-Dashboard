import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Appointment from "./pages/appointment/Appointment";
import Doctor from "./pages/doctor/Doctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
    ],
  },
]);

export default router;
