import React from "react"
import PersonImage from "../images/github profile.png"
import EmailIcon from "../images/Mail (1).png"
import LinkedIn from "../images/linkedin.png"

export default function Info()
{
    return(
        <div className="Info">
            <img src={PersonImage} alt="person-image" className="person-image" />
            <div className="info-text">
                <h2 className="info-name">Kerby Sarcia</h2>
                <h3 className="info-position">Frontend Developer</h3>
                <h4 className="info-website">kerbysarcia.website</h4>
            </div>
            <div className="buttons">
                <button className="email-btn">
                    <img src={EmailIcon} alt="email"/>
                    <h3 className="email-text">Email</h3>
                </button>
                <button className="linkedin-btn">
                    <img src={LinkedIn} alt="linkedIn"/>
                    <h3 className="email-text">LinkedIn</h3>
                </button>
            </div>
        </div>
    )
}