import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navigation">
            <Link className="navigation-item" to="/">About</Link>
            <Link className="navigation-item" to="/work">Work</Link>
            <Link className="navigation-item" to="/contact">Contact</Link>
        </div>
    )
}

export default NavBar;