import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Navbar } from '@/components';
import Home from './pages/home/Home';



function App() {
  const HomeLayout = () => {
    return (
      <div className="">
        <Navbar />
        <Outlet />
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
          element: <div>Projects</div>,
        },
        {
          path: "/jobs",
          element: <div>Jobs</div>,
        },
        {
          path: "/about",
          element: <div>About</div>,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
