import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" index component={<Navigate to={"home"} />}>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Route>
    </Routes>
  );
};

export default NavigationRoutes;
