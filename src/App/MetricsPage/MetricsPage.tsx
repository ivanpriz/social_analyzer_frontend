import React from "react";
import { useState } from "react";

import { Page } from "../components/Page";
import { Entity } from "./utils";
import { EntitySelectionBlock } from "./EntitySelectionBlock";
import { StatsBlock } from "./StatsBlock";

import "./MetricsPage.css";

export const MetricsPage: React.FC = () => {
    const coins = [
        {
          id: '1',
          fullname: 'Bitcoin',
          shortname: 'BTC',
          image_url: '--'
        },
        {
          id: '4',
          fullname: 'Bitcoin',
          shortname: 'BTC',
          image_url: '--'
        },
        {
          id: '5',
          fullname: 'Bitcoin',
          shortname: 'BTC',
          image_url: '--'
        },
        {
          id: '6',
          fullname: 'Bitcoin',
          shortname: 'BTC',
          image_url: '--'
        },
        {
          id: '7',
          fullname: 'Bitcoin',
          shortname: 'BTC',
          image_url: '--'
        },
        {
          id: '2',
          fullname: 'Etherium',
          shortname: 'ETH',
          image_url: '--'
        },
        {
          id: '3',
          fullname: 'Dogecoin',
          shortname: 'DOGE',
          image_url: '--'
        },
        {
          id: '8',
          fullname: 'Dogecoin',
          shortname: 'DOGE',
          image_url: '--'
        },
        {
          id: '9',
          fullname: 'Dogecoin',
          shortname: 'DOGE',
          image_url: '--'
        }
    ]
    let [selectedCoin, setSelectedCoin] = useState<Entity>(coins[0])  // TODO support null for not selected

    return (
    <Page>
        <EntitySelectionBlock
            entities={coins}
            selectedEntity={selectedCoin}
            setSelectedEntity={setSelectedCoin}
        />
        <StatsBlock entity={selectedCoin} />
    </Page>
    )
}
