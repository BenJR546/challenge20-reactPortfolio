import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const MainContent = () => {
    return (
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </main>
    );
};

export default MainContent;
