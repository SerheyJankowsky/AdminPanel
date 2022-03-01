import { Navigate } from "react-router-dom";
import Analytics from "../Pages/Analytics";
import Home from "../Pages/Home";
import Sales from "../Pages/Sales";

export const routes = [
  { path: "home", component: <Home /> },
  { path: "sales", component: <Sales /> },
  { path: "analytics", component: <Analytics /> },
];
