import React from "react";
import './Footer.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
            <FacebookRoundedIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <GitHubIcon/>
            <EmailRoundedIcon/>
            </div>
        </div>
    )
}

export default Footer;
