import React from "react";
import { Page } from "../components/Page";
import { PageWithNavbar } from "../components/PageWithNavbar";

import "../commonStyles.css"

export const AboutPage: React.FC = () => {
    return (
        <PageWithNavbar>
            <Page className="big-block">
                <div>
                    <p>This is my pet project</p>
                </div>
            </Page>
        </PageWithNavbar>
    )
}