import React from 'react';
import construction from '../assets/images/construction.jpg';

const Project = ({ section }) => {
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
                    <p className="text-gray-700">This form does not provide me with your inputted Name, Email, or Message yet. Please contact me via email.</p>
                    <a href="mailto:alectaber12@gmail.com" className="text-blue-600 hover:underline">
                        alectaber12@gmail.com
                    </a>
                    <ContactForm />
                </section>
            );
        case 'resume':
            return (
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Resume</h2>
                    <a href="resume.pdf" download className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700">Download Resume</a>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-4">Skills</h3>
                    <ul className="mt-4 grid grid-cols-2 gap-4">
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Problem Solving
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Pseudocode
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Command Line
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Git & GitHub
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            HTML & CSS
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Developer Tools
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Bootstrap Framework
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Tailwind CSS
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            JavaScript (ES6+)
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            JSON
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Web API
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Server Side API
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Fetch
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            REST APIs
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            AJAX
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            Node.js
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            TypeScript
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            OOP
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            PostgreSQL
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            React.js
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            React Router
                        </li>
                        <li className="text-gray-700">
                            <span className="text-blue-600">• </span>
                            State Management
                        </li>
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

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = React.useState({});

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleBlur = (field) => {
        const newErrors = { ...errors };
        if (!formData[field]) {
            newErrors[field] = 'This field is required';
        } else if (field === 'email' && !validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        } else {
            delete newErrors[field];
        }
        setErrors(newErrors);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={`mt-1 p-2 block w-full shadow-sm sm:text-sm border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={`mt-1 p-2 block w-full shadow-sm sm:text-sm border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className={`mt-1 p-2 block w-full shadow-sm sm:text-sm border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
};

export default Project;

