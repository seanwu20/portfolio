import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faFile} from "@fortawesome/free-solid-svg-icons/faFile";
import liftquest from '../../assets/images/liftquest.png'
import rpggame from '../../assets/images/rpg-game-view.png'
import me from '../../assets/images/me.png'


export const TabSeanWu = ({selectedId}) => {
    const seanCode = '# Software Engineer based in the Greater New York Area \n' +
        ' \n' +
        '# I actually kinda like Leetcode problems \n' +
        ' \n' +
        'def contact():  \n' +
        '   return {"email": "seanwu20@gmail.com", "phone": "646-886-7157"} \n' +
        ' \n' +
        ' \n' +
        'def languages():  \n' +
        '   return ["javascript", "python", "java"] \n' +
        ' \n' +
        ' \n' +
        'def frameworks(): \n' +
        '   return ["react", "express", "django", "spring boot", "serverless"] \n' +
        ' \n' +
        ' \n' +
        'def cloud_tools(): \n' +
        '   return ["AWS", "GCP", "github", "auth0", "heroku"]';

    return (
        <div className='tab sean-tab' id={selectedId === 0 ? 'display' : 'display-none'}>

            <div className='top'>
                <img src={me} alt='me' className='me'/>
                <SyntaxHighlighter language='python' style={darcula} id='syntax'>{seanCode}</SyntaxHighlighter>
            </div>
            <div className='about-site'>
                <p className='purple'>This portfolio site was overengineered with AWS and React</p>
                <p>> Domain bought and managed by Amazon Route 53</p>
                <p>> SSL/TLS certificates provided by AWS Certificate Manager</p>
                <p>> CDN provided by Amazon Cloudfront</p>
                <p>> CI/CD set up with AWS CodePipeline</p>
                <br/>
                <a href='https://www.linkedin.com/in/seanwu20/'
                   target="_blank">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size='2x'
                        color='#4875B4'
                        className='expand-hover space-icon'/>
                </a>
                <a href='https://github.com/seanwu20' target="_blank">
                    <FontAwesomeIcon
                        icon={faGithubSquare}
                        size='2x'
                        color='white'
                        className='expand-hover space-icon'/></a>
                <a href='https://drive.google.com/open?id=1gdGAtmHIqzf31VtWpJHu3nJdH3sB-g69' target="_blank">
                    <FontAwesomeIcon
                        icon={faFile}
                        size='2x'
                        color='red'
                        className='expand-hover space-icon'/></a>
            </div>
        </div>
    )
}


export const TabLiftQuest = ({selectedId}) => {
    return (
        <div className='tab liftquest-tab' id={selectedId === 1 ? 'display' : 'display-none'}>
            <div className='liftquest-content'>
                <p><span className='orange'>Lift Quest: </span></p>
                <br/>
                <p>A progressive web app with a
                    simple, intuitive system that
                    allows you to keep track of your workouts.
                    Empower users to create, track, and
                    store their daily exercise. Extensive visualizations and graphs
                    available with purchase</p>
                <br/>
                <br/>

                <p><span className='orange'>Technologies utilized:</span></p>
                <br/>
                <p>Node, Express, React, Stripe, Heroku, Netlify, Auth0</p>
                <br/>
                <br/>

                <p><span className='orange'>Story:</span></p>
                <br/>
                <p>My first long term group project.
                    Created alongside an awesome team of web developers
                    and a UX designer.</p>
                <br/>
                <p>May or may not have spent a few too many late night work sessions joking around instead of
                    working</p>
                <br/>
                <br/>


                <p><span className='orange'>Links:</span></p>
                <br/>
                <p><a className='purple' href='https://www.liftquestapp.com/'>Lift Quest App</a></p>
                <br/>
                <p><a className='purple' href='https://github.com/workout-tracktor'>Code</a></p>

                <br/>
                <br/>
                <img src={liftquest}
                     className="lift-quest-image"
                     alt='lift quest image'/>
            </div>
        </div>
    )
}


export const TabRoadToCanada = ({selectedId}) => {
    return (
        <div className='tab road-to-canada' id={selectedId === 2 ? 'display' : 'display-none'}>
            <div className='road-to-canada-content'>
                <p><span className='orange'>Road To Canada: </span></p>
                <br/>
                <p>Fun retro style RPG game with the goal of getting to Canada before running out of food and water. Map
                    data painfully hand assembled using a binary tree</p>
                <br/>
                <br/>

                <p><span className='orange'>Technologies utilized:</span></p>
                <br/>
                <p> Django, React, Heroku, ZEIT</p>
                <br/>
                <br/>

                <p><span className='orange'>Story:</span></p>
                <br/>
                <p>Influenced by the much better game, Death Road to Canada</p>
                <br/>
                <p>No late night work sessions on this project, but manually entering states and cities was painful.
                    Luckily
                    recursion is a thing computer scientists have built</p>
                <br/>
                <br/>

                <p><span className='orange'>Links:</span></p>
                <br/>
                <p><a className='purple' href='https://road-to-canada-client.now.sh/'>Road to Canada site</a></p>
                <br/>
                <p><a className='purple' href='https://github.com/seanwu20/road-to-canada-client'>Front End Code</a></p>
                <br/>
                <p><a className='purple' href='https://github.com/seanwu20/road-to-canada-server'>Back End Code</a></p>

                <br/>
                <br/>

                <div className='rpg-images'>
                    <img src={rpggame}
                         className="rpg"
                         alt='rpg game view'/>
                </div>
            </div>
        </div>
    )
}


export const TabTreasureHunt = ({selectedId}) => {
    return (
        <div className='tab treasure-hunt' id={selectedId === 3 ? 'display' : 'display-none'}>
            <div className='treasure-hunt-content'>
                <p><span className='orange'>Treasure Hunt: </span></p>
                <br/>
                <p>Traversed and explored a world represented by graphs. Avoid traps, collect treasures and mine
                    cryptocurrency.
                </p>
                <br/>
                <br/>

                <p><span className='orange'>Technologies utilized:</span></p>
                <br/>
                <p>Node, Express, PostgreSQL, Heroku, Python</p>
                <br/>
                <br/>

                <p><span className='orange'>Story:</span></p>
                <br/>
                <p>By far my favorite project I did at Lambda. Felt like a team of hackers racing against others to be
                    rich first</p>
                <br/>
                <p>No pretty photos with this project unfortunately</p>
                <br/>
                <br/>

                <p><span className='orange'>Links:</span></p>
                <br/>
                <p><a className='purple' href='https://github.com/Quick-Baboons'>Code</a></p>
                <br/>
                <br/>

                <br/>
                <br/>
            </div>
        </div>
    )
}


