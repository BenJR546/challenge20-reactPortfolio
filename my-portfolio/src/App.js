import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css"; // Include Tailwind in index.css

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
