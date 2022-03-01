import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const NavigationRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route path={path} element={component} />
      ))}
    </Routes>
  );
};

export default NavigationRoutes;
