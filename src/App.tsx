import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "@/components";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Jobs from "./pages/jobs/Jobs";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import { useEffect } from "react";
import Career from "./pages/career/Career";
import FAQ from "./pages/faq/FAQ";

function App() {
  const HomeLayout = () => {
    const path = useLocation().pathname;

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [path]);
    return (
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/career",
          element: <Career />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
