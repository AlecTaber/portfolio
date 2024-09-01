import React from 'react';
import construction from '../assets/images/construction.jpg';

const Project = ({section}) => {
    switch (section) {
        case 'about':
            return (
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
                        <img src={construction} alt="Alec Taber" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <p className="text-gray-700 text-lg">
                                My name is Alec Taber, and I am a full-stack web developer. I have experience with HTML, CSS, JavaScript, and React on the front end, and Node.js, Express, and PostgreSQL on the back end. I am passionate about creating responsive, user-friendly web applications that are accessible to all users.
                            </p>
                </section>
            );
        case 'portfolio':
            return (
                <section className="bg-white p-g rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Portfolio</h2>
                    <ul className="space-y-4">
                        <li className="border-b border-gray-200 pb-4">
                            <img src={construction} alt="Project 1" className="w-full h-48 object-cover rounded-mb mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Project 1</h3>
                            <p className="text-gray-700">Description of Project 1</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://GitHub.com/AlecTaber/Memory-Game"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub Repository
                                </a>
                                <a
                                    href="https://alectaber.github.io/memory-game/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Website
                                </a>
                            </div>
                        </li>

                        <li className="border-b border-gray-200 pb-4">
                        <img src={construction} alt="Project 1" className="w-full h-48 object-cover rounded-mb mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Project 2</h3>
                            <p className="text-gray-700">Description of Project 2</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://GitHub.com/AlecTaber"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub Repository
                                </a>
                                <a
                                    href="https://GitHub.com/AlecTaber"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Website
                                </a>
                            </div>
                        </li>
                        <li className="border-b border-gray-200 pb-4">
                        <img src={construction} alt="Project 1" className="w-full h-48 object-cover rounded-mb mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Project 3</h3>
                            <p className="text-gray-700">Description of Project 3</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://GitHub.com/AlecTaber"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub Repository
                                </a>
                                <a
                                    href="https://GitHub.com/AlecTaber"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Website
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>
            );
        case 'contact':
            return (
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact</h2>
                    <form className="space-y-4">
                        {/* Add form elements here */}
                    </form>
                </section>
            );
        case 'resume':
            return (
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Resume</h2>
                    <a href="resume.pdf" download className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700">Download Resume</a>
                    <ul className="mt-4 space-y-2">
                        {/* Add Skills here */}
                    </ul>
                </section>
            );
            default:
                return <section className="bg-red-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-red-600">Error 404</h2>
                    <p className="text-gray-700">Page Not Found</p>
                </section>;
    };
};

export default Project;

