import React from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'

export const Commits = ({commitEvents, loading}) => {
    return (
        <div>
            {loading === true ? <PacmanLoader color='#f1fa8c'/> :
                commitEvents.map(commitEvent => {
                    return (
                        <div>
                            {commitEvent.payload.commits.map(commit => {
                                return (
                                    <div>
                                        <p ><span
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

