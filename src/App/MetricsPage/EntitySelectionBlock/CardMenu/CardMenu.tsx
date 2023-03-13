import React from "react";
import { EntityCard } from "../EntityCard";
import { Entity } from "../../utils";
import "./styles.css"


export type CardListProps = {
    entities: Entity[];
    selectedEntity?: Entity;
    setSelectedEntity: (value: Entity) => void;
}

export const CardMenu: React.FC<CardListProps> = ({ entities, selectedEntity, setSelectedEntity }) => {
    return (<div className="entity-card-menu">
        {
        entities.map(entity => <EntityCard
            key={entity.id}
            title={entity.shortname}
            subtitle={entity.fullname}
            image={entity.image_url}
            isSelected={selectedEntity !== undefined ? entity.id === selectedEntity.id : false}
            onClick={() => setSelectedEntity(entity)}
            />)
        }
    </div>)
}
