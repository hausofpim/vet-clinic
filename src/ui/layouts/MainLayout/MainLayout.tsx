import React from "react";
import cls from "./MainLayout.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

interface IMainLayout {
  children: React.ReactElement;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className={cls.root}>
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayout;
