import React, {useState} from "react";


export const TabNav = ({tabs, selected, tabSwitcher}) => {

    return (
        <div className='button-tabs'>
            {tabs.map((tab, index) => {
                return (
                    <span key={index}>
                        <button className='pink button-tab'
                                id={tab.id === selected ? 'selected-tab' : null}
                                onClick={(e) => tabSwitcher(e, tab.id)}>
                            {tab.name}
                        </button>
                    </span>
                )
            })}
        </div>
    )
}


