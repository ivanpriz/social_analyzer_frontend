import React from "react";
import "./MainMenu.css"


export const MainMenu: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (<div className="main-menu">
        { children }
    </div>)
}
