import React from "react";


export const TabNav = ({tabs, selectedId, tabSwitcher}) => {

    return (
        <div className='tab-nav'>
            {tabs.map((tab, index) => {
                return (
                    <button className='pink button-tab'
                            id={tab.id === selectedId ? 'selected-tab' : null}
                            onClick={() => tabSwitcher(tab.id)}
                            key={index}>
                        {tab.name}
                    </button>
                )
            })}
        </div>
    )
}


