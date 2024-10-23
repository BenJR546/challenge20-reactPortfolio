import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-4">
            <div className="container mx-auto text-center">
                <ul className="flex justify-center space-x-4">
                    <li>
                        <a
                            href="https://github.com/BenJR546"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/benjrice546/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://stackoverflow.com/users/27921700/benjr546"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Stack Overflow
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
