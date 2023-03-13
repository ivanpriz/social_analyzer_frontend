import React from "react";
import { useState } from "react";
import { Entity } from "../../utils";
import "./SearchBlock.css";

type SearchBlockProps = {
    entities: Entity[];
    setEntitiesToDisplay: (value: Entity[]) => void;  // somewhy yells at me if value type is Entity[]
}

const filterEntities = (entities: Entity[], query: string) => {
    const q = query.toLowerCase()
    return entities.filter(
        ent => ent.fullname.toLowerCase().includes(q) || ent.shortname.toLowerCase().includes(q)
    )
}

export const SearchBlock: React.FC<SearchBlockProps> = ({entities, setEntitiesToDisplay}) => {
    let [currValue, setCurrValue] = useState("")

    return (
        <div className="search-field">
            <input
                onChange={
                    (event) => {
                        setCurrValue(event.target.value)
                        setEntitiesToDisplay(filterEntities(entities, event.target.value))
                    }
                }
                value={currValue}
                className="search-input"
                type="search"
                placeholder="Search entities..."
            />
            <img src="/images/icon_search.png" className="search-icon"/>
        </div>
    )
}
