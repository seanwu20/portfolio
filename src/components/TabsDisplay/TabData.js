import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula";

export const TabSeanWu = () => {
    const seanCode = '// Software Engineer, software developer, full stack engineer etc etc \n' +
        ' \n' +
        'def languages():  \n' +
        '   return ["javascript", "python", "java"] \n' +
        ' \n' +
        ' \n' +
        'def frameworks(): \n' +
        '   return ["react", "express", "django", "spring", "serverless"] \n' +
        ' \n' +
        ' \n' +
        'def cloudComputing: \n' +
        '   return ["AWS", "GCP", "github", "auth0"] \n' +
        ' ';
    return (
        <div className='tab-data'>
            <SyntaxHighlighter language='python' style={darcula} id='syntax'>{seanCode}</SyntaxHighlighter>
        </div>
    )
}


export const TabProjects = () => {
    return (
        <div className='tab-projects liftquest-tab'>
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
            <p><span className='orange'>Story:</span> My first long term <span className='orange'>group</span> project. Created this alongside an <span className='orange'>awesome team</span> of web developers
                and UX designers.</p>
            <br/>
            <p>May or may not have spent a few too many late night work sessions joking around instead of working</p>
        </div>
    )
}
