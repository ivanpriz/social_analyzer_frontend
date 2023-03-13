import React from "react";
import classNames from "classnames";

import "./Page.css";

type PageProps = React.PropsWithChildren & {
    className?: string;
}
export const Page: React.FC<PageProps> = ({ children, className }) => {
    const class_ = classNames({
        page: true,
        [className as string]: className ? className : undefined
    })

    return <div className={class_}>
        { children }
    </div>
}
