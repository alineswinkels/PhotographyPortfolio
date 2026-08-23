import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <a
                    href="/"
                >
                    aline swinkels
                </a>

            <nav>
                <a
                    href="/"
                >
                    Home
                </a>
                <a
                    href="/#work"
                >
                    Work
                </a>
                <a
                    href="/#about"
                >
                    about
                </a>
                <a
                    href="/#experience"
                >
                    experience
                </a>
                <a
                    href="/#contact"
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};

export default Footer;