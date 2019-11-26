import React, {useState} from "react";
import Dragula from 'react-dragula';


export const TabNav = ({tabs, selected, tabSwitcher}) => {

    const dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {direction: 'horizontal', revertOnSpill: true};
            Dragula([componentBackingInstance], options);
        }
    };
    return (
        <div className='tab-nav' ref={dragulaDecorator}>
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


