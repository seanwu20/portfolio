import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {GithubSidebar} from "./components/GithubSidebar/GithubSidebar";
import {PacmanLoader} from "react-spinners";
import {TabsDisplay} from "./components/TabsDisplay/TabsDisplay";


function App() {
    const [gitCommits, setGitCommit] = useState([])
    useEffect(() => {
        axios.get('https://api.github.com/users/seanwu20/events')
            .then(res => {
                setGitCommit(res.data.filter(gitCommit => gitCommit.type === "PushEvent"))
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="App">
            <div className='content'>
                <GithubSidebar commitEvents={gitCommits}/>
                <TabsDisplay/>
            </div>
        </div>
    );
}

export default App;
