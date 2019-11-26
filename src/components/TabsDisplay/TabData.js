import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula";

export const TabSeanWu = () => {
    const seanCode = '// Software Engineer, software developer, full stack engineer etc etc \n' +
        ' \n' +
        'let languages = () => { \n' +
        '   return ["javascript", "python", "java"] \n' +
        '} \n' +
        ' \n' +
        'let frameworks = () => { \n' +
        '   return ["react", "express", "django", "spring", "serverless"] \n' +
        '} \n' +
        ' \n' +
        'let cloudComputing = () => { \n' +
        '   return ["AWS", "GCP", "github", "auth0"] \n' +
        '} ';
    return (
        <div className='tab-data'>
            <SyntaxHighlighter language='javascript' style={darcula} id='syntax'>{seanCode}</SyntaxHighlighter>
        </div>
    )
}

export const TabExperience = () => {

    const experienceCode = '# Software Engineer Intern at Connect Our Kids \n' +
        '  # Led team of designers/developers to build metrics dashboard for social workers\n' +
        '  # Used Serverless framework deploy on AWS services\n' +
        '  # Created Express server on top on Lambda endpoint to serve React app\n' +
        '  # App connected to Google BigQuery database\n' +
        '  # Auth0 for security, MixPanel for analytics\'\n' +
        '\n' +
        'def experience_gained_intern():\n' +
        '  return {\n' +
        '    "soft_skills": ["leadership", "teamwork", "communication"],\n' +
        '    "technical_skills": ["AWS", "Serverless", "GCP"]\n' +
        '  }\n' +
        '\n' +
        '\n' +
        '# Web Dev Teaching Assistant at Lambda School\n' +
        '  # Grade student\'s daily assignments and end of week tests\n' +
        '  # Guide students on topics such as best practices\n' +
        '  # Tutor students that did poorly on end of week assessment  \n' +
        '\n' +
        '\n' +
        'def experience_gained_ta():\n' +
        '  return {\n' +
        '    "soft_skills": ["teaching", "patience", "cultural competence"],\n' +
        '    "technical_skills": ["read code efficiently", "review previous material"]\n' +
        '  }' +
        '\n \n \n'
    return (
        <div className='tab-data'>
            <SyntaxHighlighter language='python' style={darcula} id='syntax'>{experienceCode}</SyntaxHighlighter>
        </div>
    )
}
export const TabProjects = () => {
    return (
        <div className='tab-projects'>
            <p>Lift Quest: A progressive web app to track all your workout needs</p>
            <br/>
            <div><a href='https://www.liftquestapp.com/' target='__blank'><img src='/liftquest.png' className="lift-quest-image"/></a></div>
        </div>
    )
}
