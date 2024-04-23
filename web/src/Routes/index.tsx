import { ReactNode } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import MyProjects from '../pages/MyProjects';
import MySchedule from '../pages/MySchedule';

const Private = ({ children }: { children: ReactNode }) => {
  const authentication = true;

  if (!authentication) return <Navigate to="/login" />;

  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Private>
        <Home />
      </Private>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/projects',
    element: (
      <Private>
        <MyProjects />
      </Private>
    ),
  },
  {
    path: '/schedule',
    element: (
      <Private>
        <MySchedule />
      </Private>
    ),
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
