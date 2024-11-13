import React from "react";

const DevBlog = () => {
    // Predefined updates array with optional image paths
    const updates = [
        {
            date: "13-11-2024",
            progress:
                "Created a new section to display updates and progress on new projects. The next project I'll be working on will be a 2d video game portfolio! Very excited to begin!",
            image: null,
        },
    ];

    return (
        <section className="container mx-auto p-8">
            <h2 className="text-4xl font-bold mb-4 text-center">Dev Blog</h2>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">
                    Progress Updates
                </h3>
                <ul className="space-y-6">
                    {updates.map((update, index) => (
                        <li
                            key={index}
                            className="p-4 border rounded-lg bg-white shadow-sm flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                        >
                            {update.image && (
                                <div className="flex-shrink-0">
                                    <img
                                        src={update.image}
                                        alt={`Update on ${update.date}`}
                                        className="w-full md:w-48 h-auto rounded-lg"
                                    />
                                </div>
                            )}
                            <div>
                                <p className="text-gray-500 text-sm mb-2">
                                    {update.date}
                                </p>
                                <p className="text-gray-800">
                                    {update.progress}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default DevBlog;
