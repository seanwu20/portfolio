import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Commits from "./components/Commits";

function App() {
    const [loading, setLoading] = useState(false)
    const [gitCommits, setGitCommits] = useState([])
    useEffect(() => {
        axios.get('https://api.github.com/users/seanwu20/events')
            .then(res => {
                setLoading(true)
                setGitCommits(res.data.slice(0, 20).filter(commitEvent => commitEvent.type === "PushEvent"))
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="App">
            <Commits commitEvents={gitCommits} loading={loading}/>
        </div>
    );
}

export default App;
