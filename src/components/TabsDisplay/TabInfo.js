import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula";

export const TabInfo = ({tabs, selected, tabSwitcher}) => {
    return (
        <div>
            {tabs.map(tab => {
                if (tab.id === selected) return tab.component
            })}

        </div>
    )
}

let code='# Software Engineer, software developer, full stack engineer etc etc \n \n' +
    'function languages() { \n' +
    '   return ["javascript", "python", "java"] \n' +
    '} \n \n' +
    'function frameworks() { \n' +
    '   return ["react", "django", "express", "java", "spring", "serverless"] \n' +
    '} \n \n' +
    'function cloudComputing() { \n' +
    '   return ["AWS", "GCP", "github", "auth0"] \n' +
    '} \n \n'
;

export const TabSeanWu = () => {
    return (
        <div className='tab-sean-wu'>
            <div>
                <SyntaxHighlighter language='javascript' style={darcula}>{code}</SyntaxHighlighter>
                <a href='https://docs.google.com/document/d/141cN8kct5emkL16UFUrGPvxnYModMUE_LVI_jjwA5R8/edit?usp=sharing' target='_blank' className='orange'>> Grab a resume here</a>
                <br/>
                <br/>
                <p>> Stalk me here</p>
                <br/>
                <a href='https://www.linkedin.com/in/seanwu20/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x' color='#4875B4'/></a>
                <a href='https://github.com/seanwu20' target="_blank"> <FontAwesomeIcon icon={faGithubSquare} size='2x' color='white'/></a>
            </div>

        </div>
    )
}

export const TabExperience = () => {
    return (
        <div>Experience</div>
    )
}
export const TabProjects = () => {
    return (
        <div>Projects</div>
    )
}
