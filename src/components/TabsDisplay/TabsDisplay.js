import React, {useState} from "react";
import {TabNav} from "./TabNav";
import './TabsDisplay.css'
import {TabProjects, TabSeanWu, TabProjects2} from "./TabData";

export const TabsDisplay = () => {
    let [selected, setSelected] = useState(0);

    const [tabs, setTabs] = useState(
        [
            {name: "sean_wu.py", id: 0, component: <TabSeanWu/>},
            {name: "LiftQuest.js", id: 1, component: <TabProjects/>},
            {name: "LiftQuest.js", id: 2, component: <TabProjects2/>},
        ]
    )

    function tabSwitcher(event, id) {
        event.preventDefault()
        setSelected(id)
    }

    return (
        <div className='tabs-display'>
            <TabNav tabs={tabs} selected={selected} tabSwitcher={tabSwitcher}/>
            {tabs.map(tab => {
                if (tab.id === selected) return tab.component
            })}

        </div>
    )
}


