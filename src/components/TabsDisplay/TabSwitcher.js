import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula";




export const TabSeanWu = () => {
    const seanCode = '// Software Engineer, software developer, full stack engineer etc etc \n' +
        ' \n' +
        'function languages() { \n' +
        '   return ["javascript", "python", "java"] \n' +
        '} \n' +
        ' \n' +
        'function frameworks() { \n' +
        '   return ["react", "express", "django", "spring", "serverless"] \n' +
        '} \n' +
        ' \n' +
        'function cloudComputing() { \n' +
        '   return ["AWS", "GCP", "github", "auth0"] \n' +
        '} '
    ;
    return (
        <div className='tab-sean-wu'>
            <SyntaxHighlighter language='javascript' style={darcula}>{seanCode}</SyntaxHighlighter>
            <br/>
            <a href='https://docs.google.com/document/d/141cN8kct5emkL16UFUrGPvxnYModMUE_LVI_jjwA5R8/edit?usp=sharing'
               target='_blank' className='orange'>> Grab a resume here</a>
            <br/>
            <br/>
            <a href='https://www.linkedin.com/in/seanwu20/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x'
                                                                                             color='#4875B4'/></a>
            <a href='https://github.com/seanwu20' target="_blank"> <FontAwesomeIcon icon={faGithubSquare} size='2x'
                                                                                    color='white'/></a>
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
        <div className='tab-experience'>
            <SyntaxHighlighter language='python' style={darcula} id='syntax'>{experienceCode}</SyntaxHighlighter>
        </div>
    )
}
export const TabProjects = () => {
    return (
        <div>Projects</div>
    )
}
