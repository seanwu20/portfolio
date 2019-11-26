import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {GithubSidebar} from "./components/GithubSidebar/GithubSidebar";
import {PacmanLoader} from "react-spinners";
import {TabsDisplay} from "./components/TabsDisplay/TabsDisplay";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";


function App() {
    const [loading, setLoading] = useState(false)
    const [gitCommits, setGitCommit] = useState([])
    useEffect(() => {
        axios.get('https://api.github.com/users/seanwu20/events')
            .then(res => {
                setLoading(true)
                console.log(res.data)
                setGitCommit(res.data.filter(gitCommit => gitCommit.type === "PushEvent"))
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="App">
            {loading === true ? <PacmanLoader color='#f1fa8c'/> :
                <>
                    <div className='top'>
                        <GithubSidebar commitEvents={gitCommits}/>
                        <TabsDisplay/>
                    </div>

                    <div className='bottom'>
                        <p>About this site</p>
                        <p>> Deployed with S3 Buckets</p>
                        <p>> CI/CD with buddy.works</p>
                        <p>> CDN setup with Cloudfront</p>
                        <p>> Domain setup with Route 53</p>
                        <a href='https://docs.google.com/document/d/141cN8kct5emkL16UFUrGPvxnYModMUE_LVI_jjwA5R8/edit?usp=sharing'
                           target='_blank' className='orange'> Grab a resume here</a>
                        <br/>
                        <br/>
                        <a href='https://www.linkedin.com/in/seanwu20/' target="_blank"><FontAwesomeIcon
                            icon={faLinkedin}
                            size='2x'
                            color='#4875B4'/></a>
                        <a href='https://github.com/seanwu20' target="_blank"> <FontAwesomeIcon icon={faGithubSquare}
                                                                                                size='2x'
                                                                                                color='white'/></a>
                    </div>
                </>
            }
        </div>

    );
}

export default App;
