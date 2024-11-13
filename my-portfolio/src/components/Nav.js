import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="flex space-x-6">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-400" : "text-white"
                        }
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-400" : "text-white"
                        }
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-400" : "text-white"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-400" : "text-white"
                        }
                    >
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dev-blog"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-400" : "text-white"
                        }
                    >
                        Dev Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
