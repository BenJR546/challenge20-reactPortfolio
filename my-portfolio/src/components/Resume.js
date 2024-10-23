import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaNodeJs,
    FaReact,
    FaDatabase,
} from "react-icons/fa"; // Import some icons

const Resume = () => {
    return (
        <section className="container mx-auto p-8">
            <h2 className="text-4xl font-bold mb-4 text-center">Resume</h2>
            <div className="flex justify-center mb-8">
                <a
                    href="/benjaminRiceResume.pdf"
                    download="Benjamin_Rice_Resume.pdf"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    Download Resume
                </a>
            </div>

            <h3 className="text-3xl font-semibold mb-6 text-center">
                Proficiencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <FaHtml5 className="text-4xl text-orange-600 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">HTML</h4>
                    <p className="text-gray-600">
                        Advanced in creating accessible, semantic, and
                        performant HTML.
                    </p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <FaCss3Alt className="text-4xl text-blue-500 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">CSS</h4>
                    <p className="text-gray-600">
                        Skilled in modern CSS techniques, including Flexbox and
                        Grid layouts.
                    </p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <FaJsSquare className="text-4xl text-yellow-500 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">JavaScript</h4>
                    <p className="text-gray-600">
                        Experienced in ES6+ features, building dynamic web
                        applications.
                    </p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <FaNodeJs className="text-4xl text-green-600 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">
                        Node.js & Express
                    </h4>
                    <p className="text-gray-600">
                        Proficient in building scalable backend services with
                        Node.js and Express.
                    </p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <FaReact className="text-4xl text-blue-400 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">React</h4>
                    <p className="text-gray-600">
                        Experienced in building complex UI using React, hooks,
                        and state management.
                    </p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <FaDatabase className="text-4xl text-purple-600 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">SQL & NoSQL</h4>
                    <p className="text-gray-600">
                        Strong skills in database design and management with
                        PostgreSQL and MongoDB.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Resume;
