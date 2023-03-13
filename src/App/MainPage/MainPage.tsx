import React from "react";

import { Page } from "../components/Page";

import "./MainPage.css";
import "../commonStyles.css";


export const MainPage: React.FC = () => {
    return (
        <Page className="big-block">
            <div >
                <p>Here will be overview of some application metrics</p>
            </div>
        </Page>
    )
}