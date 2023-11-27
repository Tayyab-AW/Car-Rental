import { AppLayout } from "../components/AppLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Models from "../pages/Models";
import Team from "../pages/Team";
import Testimonials from "../pages/Testimonials";

export const routesConfig = [
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/models",
          element: <Models />,
        },
        {
          path: "/testimonials",
          element: <Testimonials />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ];
  