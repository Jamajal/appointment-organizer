import { ReactNode } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Private = ({ children }: { children: ReactNode }) => {
  const authentication = false;

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
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
