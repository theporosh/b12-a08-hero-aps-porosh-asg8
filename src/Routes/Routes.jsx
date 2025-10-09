import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import ErrorApp from '../pages/ErrorApp/ErrorApp';
import AppDetailsPage from '../pages/AppDetailsPage/AppDetailsPage';
import MyInstallation from '../pages/MyInstallation/MyInstallation';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/homeAps.json"),
        path: "/",
        Component: Home
      },
      {
        path: '/apps',
        loader: () => fetch("/allApps.json"),
        Component: AllApps
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch("/allApps.json"),
        Component: AppDetailsPage
      },
      {
        path: '/install',
        loader: () => fetch("/allApps.json"),
        Component: MyInstallation
      }
    ]
  },
]);