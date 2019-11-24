import React from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'

const Commits = ({commitEvents, loading}) => {
    return (
        <div>
            <h4>Latest Commits</h4>
            {console.log(commitEvents)}
            {loading === true ? <PacmanLoader color='#f1fa8c'/> :
                commitEvents.map(commitEvent => {
                    return (
                        <div>
                            {commitEvent.payload.commits.map(commit => {
                                return <div>{commit.message} on repo: {commitEvent.repo.name}</div>
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Commits
