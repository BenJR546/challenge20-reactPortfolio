import React from "react";

const Portfolio = () => {
    const projects = [
        {
            title: "Sound Spiral",
            description:
                "A simple and intuitive app to find artists and songs similar to your favourites!",
            liveUrl: "https://benjr546.github.io/sound-spiral/",
            githubUrl: "https://github.com/BenJR546/sound-spiral",
            imageUrl: "/images/soundSpiralScreenshot.png", // Example image path, replace with your actual image
        },
        {
            title: "TripTell",
            description:
                "An easy-to-use app to view and share holiday experiences with fellow travelers!",
            liveUrl: "https://project2-s4bs.onrender.com",
            githubUrl: "https://github.com/BenJR546/TripTell",
            imageUrl: "/images/triptellScreenshot.png", // Example image path
        },
        {
            title: "JATE (Just Another Text Editor)",
            description: "A simple text editor PWA that highlights JS syntax!",
            liveUrl: "https://challenge-19-pwa-editor-1.onrender.com/",
            githubUrl: "https://github.com/BenJR546/challenge-19-pwa-editor",
            imageUrl: "/images/jateScreenshot.png", // Example image path
        },
        {
            title: "Express Note Taker",
            description:
                "An app to write, edit, save and delete notes using Express!",
            liveUrl: "https://module11note-taker-2.onrender.com/",
            githubUrl: "https://github.com/BenJR546/module11note-taker",
            imageUrl: "/images/noteTakerScreenshot.png", // Example image path
        },
        {
            title: "Basic Portfolio",
            description:
                "Getting Meta Now! Here's my old pure HTML, CSS and JS portfolio!",
            liveUrl: "https://benjr546.github.io/benjamin-rice-portfolio/",
            githubUrl: "https://github.com/BenJR546/benjamin-rice-portfolio",
            imageUrl: "/images/portfolio1Screenshot.png", // Example image path
        },
        {
            title: "Spendify! (Personal Finance App)",
            description:
                "A MERN stack web app to track expenses and income! 💰",
            liveUrl: "https://personalfinaceapp-y9ns.onrender.com/",
            githubUrl: "https://github.com/Wendyydxiao/personalfinaceapp",
            imageUrl: "/images/spendify-screenshot.png", // Example image path
        },
    ];

    return (
        <section className="container mx-auto p-8">
            <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-4 bg-white shadow-lg"
                    >
                        <img
                            src={project.imageUrl}
                            alt={`${project.title} screenshot`}
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {project.description}
                        </p>
                        <div className="flex justify-between">
                            <a
                                href={project.liveUrl}
                                className="text-blue-500 hover:underline mr-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live App
                            </a>
                            <a
                                href={project.githubUrl}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
