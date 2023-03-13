import React from "react";
import { Page } from "../components/Page";

import "../commonStyles.css"

export const AboutPage: React.FC = () => {
    return (
        <Page className="big-block">
            <div>
                <p>This is my pet project</p>
            </div>
        </Page>
    )
}