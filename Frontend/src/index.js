import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from "./pages/register";
import Login from "./pages/login";
import Demografia from "./pages/demography";


import Salud from "./pages/health";
import Security from "./pages/security";
import Information from "./pages/information";
import Accessibility from './pages/accessibility';
import Dashboard from './pages/admin/default';
import Profile from "./pages/admin/profile";
import Admin from './pages/adminDashboard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/flexboxgrid.min.css";
import './styles/index.css';

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
} from "react-icons/md";



import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "demography",
    element: <Demografia />,
  },

  {
    path: "health",
    element: <Salud />,
  },
  {
    path: "security",
    element: <Security />,
  },
  {
    path: "information",
    element: <Information />,
  },
  {
    path: "accessibility",
    element: <Accessibility />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    name: "Inicio",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Dashboard,
  },
  {
    name: "Perfil",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();