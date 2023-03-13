import React from "react";
import { Entity } from "../utils";
import classNames from "classnames";

import "../../commonStyles.css";
import "./StatsBlock.css";

type StatsBlockProps = {
    entity?: Entity;
    className?: string;
}

export const StatsBlock: React.FC<StatsBlockProps> = ({entity, className}) => {
    const className_= classNames({
        'stats-block': true,
        'big-block': true,
        [className as string]: className ? className : undefined,
    })

    return <div className={className_}>
        { entity !== undefined ? <div className="graph-container"></div> : null }
    </div>
}
