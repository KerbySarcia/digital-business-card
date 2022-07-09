import React from "react"
import TwitterIcon from "../images/Twitter Icon (1).png"
import FacebookIcon from "../images/Facebook Icon (1).png"
import InstagramIcon from "../images/Instagram Icon (1).png"
import GithubIcon from "../images/GitHub Icon (1).png"
export default function Footer()
{
    return(
        <footer>
            <ul>
                <li><img src={TwitterIcon} alt="twiiter-icon"/></li>
                <li><img src={FacebookIcon} alt="facebook-icon"/></li>
                <li><img src={InstagramIcon} alt="instagram-icon"/></li>
                <li><img src={GithubIcon} alt="github-icon"/></li>
            </ul>
        </footer>
    )
}