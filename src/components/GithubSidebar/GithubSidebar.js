import React from 'react'
import './GithubSidebar.css'

export const GithubSidebar = ({commitEvents}) => {
    return (
        <div className='github-side-bar'>
            <h2 className='pink larger-font'>Github Activity</h2>
            <br/>
            {
                commitEvents.map((commitEvent, index) => {
                    return (
                        <div key={index}>
                            {commitEvent.payload.commits.map((commit, index) => {
                                return (
                                    <div key={index}>
                                        <p><span
                                            className='orange'> > {commit.message}</span></p>
                                        <p className='indented'>on repo: {commitEvent.repo.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}

