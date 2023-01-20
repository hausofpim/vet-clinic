import React, { useState } from "react";
import cls from "./Sidebar.module.scss";
import SandwichIcon from "../../../icons/sidebar/SandwichIcon";
import Navigation from "./Navigation/Navigation";

const Sidebar = () => {
  const [menuOpened, setMenuOpened] = useState(true);

  return (
    <aside className={menuOpened ? cls.opened : undefined}>
      <div onClick={() => setMenuOpened(!menuOpened)} className={cls.open}>
        <SandwichIcon />
      </div>
      <Navigation />
      <div className={cls.profile}>profile</div>
    </aside>
  );
};

export default Sidebar;
