import React, { useState } from "react";

import { CardMenu } from "./CardMenu";
import { EntityCard } from "./EntityCard";
import { SearchBlock } from "./SeachBlock";
import { Entity } from "../utils";
import "./EntitySelectionBlock.css";

type EntitySelectionBlockProps = {
    entities: Entity[];
    selectedEntity?: Entity;
    setSelectedEntity: (value: Entity) => void;
}

export const EntitySelectionBlock: React.FC<EntitySelectionBlockProps> = ({ entities, selectedEntity, setSelectedEntity }) => {
    let [entitiesToDisplay, setEntitiesToDisplay] = useState<Entity[]>(entities)
    
    return (<div className="entity-selection-block">
        <SearchBlock entities={entities} setEntitiesToDisplay={setEntitiesToDisplay} />
        <div className="menu-title">
            Entities
        </div>
        <CardMenu
            entities={entitiesToDisplay}
            selectedEntity={selectedEntity}
            setSelectedEntity={setSelectedEntity}
        />
    </div>)
}