import React from 'react';
import { NavLink } from "react-router-dom";

const MenuTop = () => {
    return (
       <ul>
            <li>
                <NavLink exact="true" to="/about" activeclassname="navActive">
                    A propos
                </NavLink>
            </li>
            <li>
                <NavLink exact="true" to="/technologies" activeclassname="navActive">
                    Technologies
                </NavLink>
            </li>                    
            <li>
                <NavLink exact="true" to="/portfolio" activeclassname="navActive">
                    Portfolio
                </NavLink>
            </li>
            <li>
                <NavLink exact="true" to="/contact" activeclassname="navActive">
                    Contact
                </NavLink>
            </li>
        </ul>
    );
};

export default MenuTop;