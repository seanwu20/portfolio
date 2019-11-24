import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Commits} from "./components/GithubComponents";

function App() {
    const [loading, setLoading] = useState(false)
    const [gitCommits, setGitCommit] = useState([])
    useEffect(() => {
        axios.get('https://api.github.com/users/seanwu20/events')
            .then(res => {
                setLoading(true)
                setGitCommit(res.data.slice(0, 20).filter(gitCommit => gitCommit.type === "PushEvent").slice(0, 10))
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="App">
            <div className='github'>
                <h2 className='pink'>Latest Github Activity</h2>
                <Commits commitEvents={gitCommits} loading={loading}/>
            </div>
            <div className='intro'>
                <div className='tabs'>
                    <button className='pink'>SeanWu.js</button>
                    <button className='pink'>Experience.js</button>
                    <button className='pink'>Projects.js</button>
                </div>
            </div>
        </div>
    );
}

export default App;
