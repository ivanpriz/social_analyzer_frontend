import React from "react";

import { Page } from "../components/Page";
import { PageWithNavbar } from "../components/PageWithNavbar";

import "./MainPage.css";
import "../commonStyles.css";


export const MainPage: React.FC = () => {
    return (
        <PageWithNavbar>
            <Page className="big-block">
                <div >
                    <p>Here will be overview of some application metrics</p>
                </div>
            </Page>
        </PageWithNavbar>
    )
}