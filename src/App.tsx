import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Navbar } from './components';



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
          element: <div>Home</div>,
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
