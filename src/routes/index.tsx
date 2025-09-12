import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";
import DashboardLayout from "@/components/layout/Dashboardlayout";
import Analytics from "@/pages/Admin/Analytics";
import Bookings from "@/pages/User/Bookings";
export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
   {
    Component: DashboardLayout,
    path: "/admin",
    children: [
      {
        Component:Analytics,
        path:"analytics"
      }
      
    ],
  },
  {
    Component:DashboardLayout,
    path: "/user",
    children: [
       {
        Component: Bookings,
        path:"bookings"
      }
      
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);
