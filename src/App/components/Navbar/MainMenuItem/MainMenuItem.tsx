import React from "react";
import { Link } from "react-router-dom";

import "./MainMenuItem.css";


type MainMenuItemProps = {
    text: string;
    link: string;
}


export const MainMenuItem: React.FC<MainMenuItemProps> = ({ text, link }) => {
    return (<div className="main-menu-item">
        <Link to={link} className="main-menu-link">{text}</Link>
        <img src="/images/right-arrow.png" className="menu-item-icon" />
    </div>)
}