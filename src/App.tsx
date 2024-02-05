import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Footer, Navbar } from '@/components';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Jobs from './pages/jobs/Jobs';
import About from './pages/about/About';



function App() {
  const HomeLayout = () => {
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
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
