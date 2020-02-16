import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export const TabSeanWu = () => {
    const seanCode = '# Software Engineer based in the Greater New York Area \n' +
        ' \n' +
        'def languages():  \n' +
        '   return ["javascript", "python", "java"] \n' +
        ' \n' +
        ' \n' +
        'def frameworks(): \n' +
        '   return ["react", "express", "django", "spring boot", "serverless"] \n' +
        ' \n' +
        ' \n' +
        'def cloudComputing: \n' +
        '   return ["AWS", "GCP", "github", "auth0"]';

    return (
        <div className='tab sean-tab'>
            <SyntaxHighlighter language='python' style={darcula} id='syntax'>{seanCode}</SyntaxHighlighter>
            <div className='about-site'>
                <p className='purple'>This site was overengineered with AWS and React</p>
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
                        color='#4875B4'/>
                </a>
                <a href='https://github.com/seanwu20' target="_blank">
                    <FontAwesomeIcon
                        icon={faGithubSquare}
                        size='2x'
                        color='white'/></a>
            </div>
        </div>
    )
}


export const TabProjects = () => {
    return (
        <div className='tab liftquest-tab'>
            <a href='https://www.liftquestapp.com/' target='__blank'><img src='/liftquest.png'
                                                                          className="lift-quest-image"/></a>
            <p><span className='orange'>Lift Quest: </span>A <span className='orange'>progressive web app</span> with a
                simple, <span className='orange'>intuitive</span> system that
                allows you to keep track of your workouts.
                <span className='orange'>Empower</span> users to create, track, and
                store their daily exercise. <span className='orange'>Extensive</span> visualizations and graphs
                available with purchase</p>
            <br/>
            <p><span className='green'>Technologies utilized:</span> Node, Express, React, Stripe, Heroku, Netlify</p>
            <br/>
            <p><span className='orange'>Story:</span> My first long term <span className='orange'>group</span> project.
                Created this alongside an <span className='orange'>awesome team</span> of web developers
                and UX designers.</p>
            <br/>
            <p>May or may not have spent a few too many late night work sessions joking around instead of working</p>
        </div>
    )
}
export const TabProjects2 = () => {
    return (
        <div className='tab liftquest-tab'>
            <a href='https://www.liftquestapp.com/' target='__blank'><img src='/liftquest.png'
                                                                          className="lift-quest-image"/></a>
            <p><span className='orange'>Lift Quest: </span>A <span className='orange'>progressive web app</span> with a
                simple, <span className='orange'>intuitive</span> system that
                allows you to keep track of your workouts.
                <span className='orange'>Empower</span> users to create, track, and
                store their daily exercise. <span className='orange'>Extensive</span> visualizations and graphs
                available with purchase</p>
            <br/>
            <p><span className='green'>Technologies utilized:</span> Node, Express, React, Stripe, Heroku, Netlify</p>
            <br/>
            <p><span className='orange'>Story:</span> My first long term <span className='orange'>group</span> project.
                Created this alongside an <span className='orange'>awesome team</span> of web developers
                and UX designers.</p>
            <br/>
            <p>May or may not have spent a few too many late night work sessions joking around instead of working</p>
        </div>
    )
}


