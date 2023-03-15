import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { UserCard } from "./UserCard";
import { MainMenu } from "./MainMenu";
import { MainMenuItem } from "./MainMenuItem";

import "./Navbar.css";

type NavbarProps = React.PropsWithChildren & {
  menuItems: {
    text: string;
    route: string;
  }[]
}

export const Navbar: React.FC<NavbarProps> = ({ menuItems, children }) => {
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
          {menuItems.map(item => <MainMenuItem text={item.text} link={item.route} />)}
        </MainMenu>
      </div>}
    </div>
  )
}
