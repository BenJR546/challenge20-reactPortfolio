import React from "react";

const AboutMe = () => {
    return (
        <section className="container mx-auto p-8 mt-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl font-bold mb-6 text-center">
                        About Me
                    </h2>
                    <img
                        src="/ben-avatar.jpg"
                        alt="Your Name"
                        className="w-40 h-40 rounded-full mb-6 shadow-md transition-transform transform hover:scale-105"
                    />
                    <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl">
                        Hello! I'm a full-stack developer with a passion for
                        creating dynamic and interactive web applications. My
                        journey in web development has equipped me with a
                        versatile set of skills including HTML, CSS, and
                        JavaScript, which are the building blocks of modern
                        websites.
                        <br />
                        <br />
                        I specialize in React for crafting user interfaces and
                        have experience with the MERN stack (MongoDB,
                        Express.js, React, and Node.js), allowing me to build
                        scalable, full-stack applications from the ground up.
                        Beyond frontend technologies, I'm proficient in
                        server-side development using Node.js and Express.js,
                        and I leverage Object-Oriented Programming (OOP)
                        principles to create maintainable and reusable code.
                        <br />
                        <br />
                        I've worked with both relational (PostgreSQL) and NoSQL
                        databases (MongoDB), and I’m skilled in utilizing
                        Object-Relational Mapping (ORM) techniques for efficient
                        data management. My experience extends to mastering Web,
                        Server-side, and Third-Party APIs, enabling me to
                        connect different services and create feature-rich
                        applications.
                        <br />
                        <br />
                        I’ve also built Progressive Web Apps (PWAs) and have a
                        solid understanding of JavaScript Computer Science
                        concepts to develop optimized solutions.
                        <br />
                        <br />
                        In addition to coding, I’m passionate about gaming and
                        music, which inspire my creativity and help me unwind.
                        I’m always eager to explore new technologies and take on
                        exciting challenges in the tech world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
