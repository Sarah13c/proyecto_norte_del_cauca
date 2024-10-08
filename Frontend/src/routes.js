import { MdPerson, MdHome, MdSecurity, MdHealthAndSafety, MdBook, MdWarning } from "react-icons/md";

import MainDashboard from "./pages/admin/default";
import Profile from "./pages/admin/profile";
import Health from "./pages/admin/health";
import Security from "./pages/admin/security";
import Violence from "./pages/admin/violence";
import Education from "./pages/admin/education";


const routes = [
  {
    name: "Inicio",
    layout: "/admin",
    path: "/default",
    icon: MdHome,
    component: MainDashboard,
  },
  {
    name: "Perfil",
    layout: "/admin",
    path: "/profile",
    icon: MdPerson,
    component: Profile,
  },
  {
    name: "Indicadores",
    category: true,
    items: [
      {
        name: "Demografía",
        layout: "/admin",
        path: "/demography",
        icon: MdPerson,
        component: Profile,
      },
      {
        name: "Salud",
        layout: "/admin",
        path: "/health",
        icon: MdHealthAndSafety,
        component: Health,
      },
      {
        name: "Seguridad",
        layout: "/admin",
        path: "/security",
        icon: MdSecurity,
        component: Security,
      },
      {
        name: "Violencia",
        layout: "/admin",
        path: "/violence",
        icon: MdWarning,
        component: Violence,
      },
      {
        name: "Educación",
        layout: "/admin",
        path: "/education",
        icon: MdBook,
        component: Education,
      }
    ],
  },
];

export default routes;
