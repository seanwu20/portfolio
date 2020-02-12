import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './About.css'

export const About = () => {
    return (
        <div className='about'>
            <p>About this site</p>
            <p>> Deployed with S3 Buckets </p>
            <p>> CI/CD with AWS CodePipeline</p>
            <p>> CDN setup with Cloudfront </p>
            <p>> Domain setup with Route 53</p>
//             <a href='https://docs.google.com/document/d/141cN8kct5emkL16UFUrGPvxnYModMUE_LVI_jjwA5R8/edit?usp=sharing'
//                target='_blank'
//                className='orange'>
//                 Click me to grab a resume here</a>
//             <br/>
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
    )
}
