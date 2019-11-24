import React, {useState} from "react";


export const TabInfo = ({tabs, selected, tabSwitcher}) => {
    return (
        <div>
            {tabs.map(tab => {
                if(tab.id === selected) return tab.component
            })}

        </div>
    )
}

export const TabSeanWu = () => {
    return (
        <div>Sean</div>
    )
}

export const TabExperience = () => {
    return (
        <div>Experience</div>
    )
}
export const TabProjects = () => {
    return (
        <div>Projects</div>
    )
}
