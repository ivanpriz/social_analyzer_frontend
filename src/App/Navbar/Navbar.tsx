import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { UserCard } from "./UserCard";
import { MainMenu } from "./MainMenu";
import { MainMenuItem } from "./MainMenuItem";

import "./Navbar.css";


export const Navbar: React.FC<React.PropsWithChildren> = () => {
  let [showMenu, setShowMenu] = useState<Boolean>(true)

  return (
    <div className={classNames({navbar: showMenu, hidden: !showMenu})}>
      <img 
        src="/images/icon-menu.png"
        className="menu-image"
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && <div>
        <UserCard avatarUrl="" userFirstName="Ivan" userLastName="Priz" />
        <MainMenu>
          <MainMenuItem text="Main Page" link="/" />
          <MainMenuItem text="Metrics" link="/metrics" />
          <MainMenuItem text="About us" link="/about" />
        </MainMenu>
      </div>}
    </div>
  )
}
