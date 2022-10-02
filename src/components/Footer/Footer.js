import * as React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

import EventLogo from "../../images/union-brand.png"


const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h3 className="socInf">© Brunel Tech Society {new Date().getFullYear()}</h3>
                    <h4 className="socInfEm">Get in touch: <a href="mailto:info@bruneltech.net">info@bruneltech.net</a></h4>
                </div>

                <div className="footer-content-right">
                    <div className="socials-content">
                        <a className="social" href="https://twitter.com/bruneltech">
                            <FaTwitter className="icon" />
                        </a>

                        <a className="social" href="https://www.instagram.com/bruneltech/" >
                            <FaInstagram className="icon" />
                        </a>

                        <a className="social" href="https://www.facebook.com/bruneltech/">
                            <FaFacebook className="icon" />
                        </a>
                    </div>

                    
                    <div className="unionLogo">
                        <a href="https://brunelstudents.com/organisation/7158/">
                            <img src={EventLogo} alt="Union of Brunel Students" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-extra">
                <p className="brought">This website is a work in progress, but is also <a className="link" href='https://github.com/bruneltech/website'>Open Source</a></p>
            </div>
        </footer>
    )
}

export default Footer;