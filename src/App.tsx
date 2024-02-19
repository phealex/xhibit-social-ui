import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import "./App.css";
import {
  AuthLayoutSider,
  Footer,
  Navbar,
  TalentFeedFooter,
  TalentFeedNavbar,
} from "@/components";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Jobs from "./pages/jobs/Jobs";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import { useEffect } from "react";
import Career from "./pages/career/Career";
import FAQ from "./pages/faq/FAQ";
import Overview from "./pages/overview/Overview";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PasswordReset from "./pages/passwordReset/PasswordReset";
import TalentFeed from "./pages/talentFeed/TalentFeed";

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

  const AuthLayout = () => {
    return (
      <div className="w-full flex  bg-white lg:min-h-screen">
        <AuthLayoutSider />
        <Outlet />
      </div>
    );
  };

  const TalentFeedLayout = () => {
    return (
      <>
        <TalentFeedNavbar />
        <Outlet />
        <TalentFeedFooter />
      </>
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
        {
          path: "/overview",
          element: <Overview />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "password-reset",
          element: <PasswordReset />,
        },
      ],
    },
    {
      path: "/talent",
      element: <TalentFeedLayout />,
      children: [
        {
          path: "",
          element: <TalentFeed />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
