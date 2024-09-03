import React from 'react';
import construction from '../assets/images/construction.jpg';
import memoryGame from '../assets/images/Screenshot 2024-09-02 182026.png'
import profile from '../assets/images/image0.jpeg';

const Project = ({ section }) => {
    switch (section) {
        case 'about':
            return (
                <section className="bg-gray-300 p-4 m-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold p-4 text-gray-800 flex flex-col items-center">About Me</h2>
                    <img src={profile} alt="Alec Taber" className="w-32 h-32 rounded-full mx-auto mb-4 lg:w-64 lg:h-64 shadow-xl" />
                    <p className="text-gray-700 lg:text-2xl ml-10 mr-10">
                        Greetings, my name is Alec Taber.
                    </p>
                    <br />
                    <p className="text-gray-700 lg:text-2xl ml-10 mr-10">
                        I am a native of the Great Pacific Northwest, having lived in picturesque Eastern Oregon for the past 25 years. I am an avid fan of all sports, amateur, collegiate and professional. A lifelong gamer, I am eager to embark on a career in the field of technology.
                    </p>
                    <br />
                    <p className="text-gray-700 lg:text-2xl ml-10 mr-10 pb-4">
                        I am actively seeking a career creating responsive, user-friendly web applications that are accessible to all users. While I am looking for full-time employment, I am also willing to do freelance work in order to bolster my growing portfolio.

                    </p>
                </section>
            );

        case 'portfolio':
            return (
                <section className="bg-gray-300 p-4 m-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold p-4 text-gray-800 text-center">Portfolio</h2>
                    <ul className="lg:grid lg:grid-cols-3 lg:gap-4 space-y-4 lg:space-y-0">
                        <li className="pb-4 flex flex-col h-full bg-white rounded-lg shadow-lg p-4">
                            <img src={memoryGame} alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4 shadow-xl border-2 border-black" />
                            <h3 className="text-2xl font-semibold text-gray-800">Memory Game</h3>
                            <p className="text-gray-700 flex-grow">I collaborated with two other developers and created this Memory Card application using CSS, HTML, and JavaScript. This interactive game challenges users to match cards in groups of four by testing their memory skills. The game features a sleek, responsive design and dynamic animations, as well as user statistics that are kept in local stroage, providing an engaging user experience. The application is fully functional across various devices and browsers, showcasing my ability to build responsive, interactive web applications with clean and maintainable code.</p>
                            <div className="flex space-x-4 mt-auto">
                                <a href="https://GitHub.com/AlecTaber/Memory-Game" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    GitHub Repository
                                </a>
                                <a href="https://alectaber.github.io/memory-game/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Live Website
                                </a>
                            </div>
                        </li>

                        <li className="pb-4 flex flex-col h-full bg-white rounded-lg shadow-lg p-4">
                            <img src={construction} alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4 shadow-xl border-2 border-black" />
                            <h3 className="text-2xl font-semibold text-gray-800">Project 2</h3>
                            <p className="text-gray-700 flex-grow">Description of Project 2</p>
                            <div className="flex space-x-4 mt-auto">
                                <a href="https://GitHub.com/AlecTaber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    GitHub Repository
                                </a>
                                <a href="https://GitHub.com/AlecTaber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Live Website
                                </a>
                            </div>
                        </li>

                        <li className="pb-4 flex flex-col h-full bg-white rounded-lg shadow-lg p-4">
                            <img src={construction} alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4 shadow-xl border-2 border-black" />
                            <h3 className="text-2xl font-semibold text-gray-800">Project 3</h3>
                            <p className="text-gray-700 flex-grow">Description of Project 3</p>
                            <div className="flex space-x-4 mt-auto">
                                <a href="https://GitHub.com/AlecTaber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    GitHub Repository
                                </a>
                                <a href="https://GitHub.com/AlecTaber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Live Website
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>
            );

        case 'contact':
            return (
                <section className="bg-gray-300 p-4 m-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold p-4 text-gray-800 flex flex-col items-center">Contact</h2>
                    <p className="text-gray-700 pb-4">
                        This form does not provide me with your inputted Name, Email, or Message yet. Please contact me via email at <a href="mailto:alectaber12@gmail.com" className="text-blue-600 hover:underline">
                        alectaber12@gmail.com</a>.
                    </p>
                    <ContactForm />
                </section>
            );

        case 'resume':
            return (
                <section className="bg-gray-300 p-4 m-8 rounded-lg shadow-">
                    <h2 className="text-3xl font-bold p-4 text-gray-800 flex flex-col items-center">Resume</h2>
                    <a href="resume.pdf" download className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 absolute left-1/2 transform -translate-x-1/2">Download Resume</a>
                    <h3 className="text-3xl font-semibold text-gray-800 mt-4 pt-10 lg:ml-40">Skills</h3>
                    <ul className="mt-4 grid grid-cols-2 gap-4 ml-0 lg:grid-cols-3 lg:ml-40 lg:text-2xl">
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Problem Solving
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Pseudocode
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Command Line
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Git & GitHub
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            HTML & CSS
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Developer Tools
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Bootstrap Framework
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Tailwind CSS
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            JavaScript (ES6+)
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            JSON
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Web API
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Server Side API
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Fetch
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            REST APIs
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            AJAX
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            Node.js
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            TypeScript
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            OOP
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            PostgreSQL
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            React.js
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
                            React Router
                        </li>
                        <li className="text-gray-700">
                            <span className="text-purple-900">• </span>
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
                    className={`mt-1 p-2 block w-full shadow-sm sm:text-sm border h-40 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
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

