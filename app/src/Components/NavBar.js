import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navigation">
            <Link className="navigation-item" to="/">Home</Link>
            <Link className="navigation-item" to="/about">About</Link>
        </div>
    )
}

export default NavBar;