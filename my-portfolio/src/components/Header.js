import React from "react";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Benjamin Rice</h1>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
