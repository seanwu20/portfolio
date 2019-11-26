import React, {useState} from "react";
import Dragula from 'react-dragula';


export const TabNav = ({tabs, selected, tabSwitcher}) => {

    return (
        <div className='tab-nav'>
            {tabs.map((tab, index) => {
                return (
                    <button className='pink button-tab'
                            id={tab.id === selected ? 'selected-tab' : null}
                            onClick={(e) => tabSwitcher(e, tab.id)}
                            key={index}>
                        {tab.name}
                    </button>
                )
            })}
        </div>
    )
}


