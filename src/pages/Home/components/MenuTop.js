import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
       <ul>
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
    );
};

export default Navigation;