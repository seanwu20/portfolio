import React, {useState} from "react";
import {TabNav} from "./TabNav";
import './TabsDisplay.css'
import {TabExperience, TabInfo, TabProjects, TabSeanWu} from "./TabInfo";

export const TabsDisplay = () => {
    let [selected, setSelected] = useState(0);

    const [tabs, setTabs] = useState(
        [
            {name:"SeanWu.js", id:0, component: <TabSeanWu/>},
            {name:"Experience.py", id:1, component:<TabExperience/>},
            {name:"Projects.py", id:2, component:<TabProjects/>}
        ]
    )

    function tabSwitcher(event, id) {
        event.preventDefault()
        setSelected(id)
    }

    return (
        <div className='tabs-display'>
            <TabNav tabs={tabs} selected={selected} tabSwitcher={tabSwitcher}/>
            <TabInfo tabs={tabs} tabSwitcher={tabSwitcher} selected={selected}/>
        </div>
    )
}


