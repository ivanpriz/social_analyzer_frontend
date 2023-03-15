import React from "react";
import { Navbar } from "../Navbar";
import { menuItems } from "../../routes";
import "./PageWithNavbar.css";


export const PageWithNavbar: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (<div className="pageWithNavbar">
        <Navbar menuItems={menuItems} />
        {children}
    </div>)
}
