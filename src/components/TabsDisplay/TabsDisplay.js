import React, {useState, useEffect} from "react";
import {TabNav} from "./TabNav";
import './TabsDisplay.css'
import {TabLiftQuest, TabRoadToCanada, TabSeanWu, TabTreasureHunt} from "./TabData";



export const TabsDisplay = () => {
    let [selectedId, setSelectedId] = useState(0);
    useEffect(() => {
        let previous_selected = localStorage.getItem("selectedId")
        if (previous_selected !== null) setSelectedId(parseInt(previous_selected))
    }, []);

    const [tabs, setTabs] = useState(
        [
            {name: "Sean Wu", id: 0},
            {name: "Lift Quest", id: 1},
            {name: "Road To Canada", id: 2},
            {name: "Treasure Hunt", id: 3},
        ]
    )

    function tabSwitcher(id) {
        setSelectedId(id)
        localStorage.setItem("selectedId", id.toString())
    }

    return (
        <div className='tabs-display'>
            <TabNav tabs={tabs} selectedId={selectedId} tabSwitcher={tabSwitcher}/>
            <TabSeanWu selectedId={selectedId}/>
            <TabLiftQuest selectedId={selectedId}/>
            <TabRoadToCanada selectedId={selectedId}/>
            <TabTreasureHunt selectedId={selectedId}/>

        </div>
    )
}


