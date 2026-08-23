import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = ({ activeSection }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (sectionId) => {
        if (location.pathname !== "/") {
            navigate("/", {
                state: {
                    scrollTo: sectionId
                }
            });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="navigation">
            <a
                    href="/"
                >
                    aline swinkels
                </a>

            <nav>
                {/* <a
                    href="#home"
                    className={activeSection === "home" ? "active" : ""}
                >
                    Home
                </a> */}
                <a
                    href="/#work"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("work");
                    }}
                    className={activeSection === "work" ? "active" : ""}
                >
                    Work
                </a>
                <a
                    href="/#about"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("about");
                    }}
                    className={activeSection === "about" ? "active" : ""}
                >
                    about
                </a>
                
                <a
                    href="/#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("contact");
                    }}
                    className={activeSection === "contact" ? "active" : ""}
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};

export default NavBar;