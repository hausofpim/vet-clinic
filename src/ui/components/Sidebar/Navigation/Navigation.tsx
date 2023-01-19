import React from "react";
import { NavLink } from "react-router-dom";
import AppRouter from "../../../../router";

import cls from "./Navigation.module.scss";

const Navigation = () => {
  const routes = new AppRouter().getRoutes();

  return (
    <ul className={cls.navigation}>
      {routes.map((route, index) => {
        return (
          <NavLink key={route.path} to={route.path}>
            {({ isActive }) => (
              <li className={isActive ? cls.active : undefined}>
                {<route.icon />}
              </li>
            )}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default Navigation;
