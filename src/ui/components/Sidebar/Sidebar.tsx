import React from "react";
import cls from "./Sidebar.module.scss";
import SandwichIcon from "../../../icons/sidebar/SandwichIcon";
import Navigation from "./Navigation/Navigation";

const Sidebar = () => {
  return (
    <aside className={cls.root}>
      <div className={cls.open}>
        <SandwichIcon />
      </div>
      <Navigation />
      <div className={cls.profile}>profile</div>
    </aside>
  );
};

export default Sidebar;
