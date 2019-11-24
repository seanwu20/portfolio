import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {GithubSidebar} from "./components/GithubSidebar/GithubSidebar";
import {PacmanLoader} from "react-spinners";
import {TabsDisplay} from "./components/TabsDisplay/TabsDisplay";


function App() {
    const [loading, setLoading] = useState(false)
    const [gitCommits, setGitCommit] = useState([])
    useEffect(() => {
        axios.get('https://api.github.com/users/seanwu20/events')
            .then(res => {
                setLoading(true)
                setGitCommit(res.data.filter(gitCommit => gitCommit.type === "PushEvent"))
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="App">
            {loading === true ? <PacmanLoader color='#f1fa8c'/> :
                <>
                    <GithubSidebar commitEvents={gitCommits}/>
                    <TabsDisplay/>
                </>
            }
        </div>

    );
}

export default App;
