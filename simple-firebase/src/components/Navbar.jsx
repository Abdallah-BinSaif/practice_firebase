import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className={"flex gap-4 my-8"}>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/login"}>Log In</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;