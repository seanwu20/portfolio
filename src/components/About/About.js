import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './About.css'

export const About = () => {
    return (
        <div className='about'>
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
    )
}
