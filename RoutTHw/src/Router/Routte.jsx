import { createBrowserRouter } from "react-router-dom";
import Ocean from "../pages/Ocean.jsx";
import Trees from "../pages/Trees.jsx";
import Desert from "../pages/Desert.jsx";
import ErrorPage from "../Components/ErrorPage.jsx";
import Volcano from "../pages/Volacno.jsx";
import SouthPolar from "../pages/SouthPolar.jsx";
const router = createBrowserRouter([
    {
     path: "/",
    element: <Ocean />, 
  errorElement: <ErrorPage />,
      },

  {
    path: "/desert",
    element: <Desert />,
  },
  {
    path: "/trees",
    element: <Trees />,
  },
  {
    path: "/volcano",
    element: <Volcano />,
  },

  {
    path: "/sotutholar",
    element: <SouthPolar />,
  },



]);

export default router;