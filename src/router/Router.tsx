import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../ui/layouts/MainLayout/MainLayout";
import AppRouter from ".";

const Router = () => {
  const Layout = MainLayout;
  const routes = new AppRouter().getRoutes();

  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Layout>
  );
};

export default Router;
