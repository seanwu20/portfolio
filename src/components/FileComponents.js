import React, {useState} from "react";

export const Tabs = () => {

    const [tabs, setTabs] = useState([{name:"SeanWu.js", id:0, selected:true}, {name:"Experience.py", id:1, selected:false}, {name:"Projects.java", id:2, selected:false}])
    function tabSwitcher(event, id) {
        event.preventDefault()
        let tabCopy = [...tabs]
        tabCopy.forEach(tab => tab.selected = false)
        tabCopy[id].selected = true;
        console.log(tabCopy)
        setTabs(tabCopy)
    }
    return (
        <div className='tabs'>
            {tabs.map((tab, index) => {
                return (
                    <span key={index}>
                                <button className='pink'
                                        id={tab.selected === true ? 'selected-tab' : null}
                                        onClick={(e) => tabSwitcher(e, tab.id)}>
                                    {tab.name}
                                </button>
                            </span>
                )
            })
            }
        </div>
    )
}
