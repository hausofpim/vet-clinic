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
          <li>
            <NavLink key={route.path} to={route.path}>
              {({ isActive }) => (
                <>
                  <div className={isActive ? cls.active : undefined}>
                    {<route.icon />}
                  </div>
                  <p className={isActive ? cls.active : undefined}>Title</p>
                </>
              )}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
