import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="menu-top">
            <nav className="menu-top__nav">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassname="navActive">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" activeClassname="navActive">
                            A propos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/technologies" activeClassname="navActive">
                            Technologies
                        </NavLink>
                    </li>                    
                    <li>
                        <NavLink exact to="/portfolio" activeClassname="navActive">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassname="navActive">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;