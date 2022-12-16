import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, LogInPage, SignUpPage, UserPage }from './Pages';

import ReactDOM from 'react-dom/client';
import './index.css';
import AppProvider from './AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reactRouter = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  }, 
  {
    path: "/myPage",
    element: <UserPage />,
  },
  {
    path: "/:username",
    element: <UserPage username={username}/>,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  }
])

root.render(
  <AppProvider>
    <RouterProvider router={reactRouter} />
  </AppProvider>
);
