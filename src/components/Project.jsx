import React from 'react';
// import construction from '../assets/images/construction.jpg';
import memoryGame from '../assets/images/Screenshot 2024-09-02 182026.png'
import profile from '../assets/images/image0.jpeg';
import rancidRhythms from '../assets/images/Screenshot 2024-09-24 181056.png';
import loopLab from '../assets/images/Screenshot 2024-12-09 155154.png';
import emailjs from 'emailjs/browser';

const Project = ({ section }) => {
    switch (section) {
        case 'about':
            return (
                <section className="bg-gray-300 p-4 m-8 rounded-lg shadow-lg dark:bg-gray-800">
                    <h2 className="text-3xl font-bold p-4 text-gray-800 dark:text-white flex flex-col items-center">About Me</h2>
                    <img src={profile} alt="Alec Taber" className="w-32 h-32 rounded-full mx-auto mb-4 lg:w-64 lg:h-64 shadow-xl border-2 border-black dark:border-purple-300 dark:shadow-gray-900" />
                    <p className="text-gray-700 dark:text-gray-300 lg:text-2xl ml-10 mr-10">
                        Greetings, my name is Alec Taber.
                    </p>
                    <br />
                    <p className="text-gray-700 dark:text-gray-300 lg:text-2xl ml-10 mr-10">
                        I am a native of the Great Pacific Northwest, having lived in picturesque Eastern Oregon for the past 25 years. I am an avid fan of all sports, amateur, collegiate and professional. A lifelong gamer, I am eager to embark on a career in the field of technology.
                    </p>
                    <br />
                    <p className="text-gray-700 dark:text-gray-300 lg:text-2xl ml-10 mr-10 pb-4">
                        I am actively seeking a career creating responsive, user-friendly web applications that are accessible to all users. I have just completed a coding Bootcamp through the University of Oregon and edX. While I am looking for full-time employment, I am also willing to do freelance work in order to bolster my growing portfolio.

                    </p>
                </section>
            );

        case 'portfolio':
            return (
                <section className="bg-gray-300 p-4 m-8 rounded-lg shadow-lg dark:bg-gray-800">
                    <h2 className="text-3xl font-bold p-4 text-gray-800 text-center dark:text-white">Portfolio</h2>
                    <ul className="lg:grid lg:grid-cols-3 lg:gap-4 space-y-4 lg:space-y-0">
                        <li className="pb-4 flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
                            <img src={memoryGame} alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4 shadow-xl border-2 border-black dark:border-purple-300 dark:shadow-gray-950" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Memory Game</h3>
                            <p className="text-gray-700 flex-grow dark:text-gray-300">I collaborated with two other developers and created this Memory Card application using CSS, HTML, and JavaScript. This interactive game challenges users to match cards in groups of four by testing their memory skills. The game features a sleek, responsive design and dynamic animations, as well as user statistics that are kept in local stroage, providing an engaging user experience. The application is fully functional across various devices and browsers, showcasing my ability to build responsive, interactive web applications with clean and maintainable code.</p>
                            <div className="flex space-x-4 mt-auto">
                                <a href="https://GitHub.com/AlecTaber/Memory-Game" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    GitHub Repository
                                </a>
                                <a href="https://alectaber.github.io/memory-game/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Live Website
                                </a>
                            </div>
                        </li>

                        <li className="pb-4 flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
                            <img src={rancidRhythms} alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4 shadow-xl border-2 border-black dark:border-purple-300 dark:shadow-gray-950" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Rancid Rhythms</h3>
                            <p className="text-gray-700 flex-grow dark:text-gray-300">This application was created in collaboration with two other developers and myself. Rancid Rhythms is a social platform where users can rate and review their favorite albums. The home page provides the highest and lowest rated albums on the platform. Users are able to search for an album, see information about the album, and also see other users reviews of that album. Users have a profile page where they can keep track of all of the reviews they have left on related albums. This application was created using React, Node.JS, Express.js, PostgreSQL, Sequelize, TailwindCSS, and JWT-based Authentication. Rancid Rhythms also has some help from the MusicBrainz API and the iTunes API to give users the ablility to search for and hear a sample of any album! This applications live website's database has expired, I highly recommend running it locally by following the installation steps in the README. </p>
                            <div className="flex space-x-4 mt-auto">
                                <a href="https://github.com/AlecTaber/rancid-rhythms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    GitHub Repository
                                </a>
                                <a href="https://rancid-rhythms-tnyn.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Live Website
                                </a>
                            </div>
                        </li>

                        <li className="pb-4 flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
                            <img src={loopLab} alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4 shadow-xl border-2 border-black dark:border-purple-300 dark:shadow-gray-950" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">LoopLab</h3>
                            <p className="text-gray-700 flex-grow dark:text-gray-300">LoopLab is a unique and inovative social media platform created for people looking for ways to connect with people through media and art. This application was created by a fantastic team of developers who wanted to create something we actually wanted to use! This application was built with TypeScript, React and Tailwind for the frontend. The backend uses Node.js, Express.js, GraphQL, and Socket.io. The database we used for this app is MongoDB, alongside a 3rd party cloud storage called Cloudinary. LoopLab allows users to create flipbook style art and share it with other users on the platform. Users are able to leave likes and comments on other users Loops, as well as visit any users page by clicking on their user button. Every user also has their own profile page where they can see all of their Loops and see how many likes and comments each Loop has. This application is the accumulation of everything I have learned in my young developer career thus far. </p>
                            <div className="flex space-x-4 mt-auto">
                                <a href="https://github.com/AlecTaber/LoopLab" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    GitHub Repository
                                </a>
                                <a href="https://looplab.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Live Website
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>
            );

        case 'contact':
            return (
                <section className="bg-gray-300 p-4 m-8 rounded-lg shadow-lg dark:bg-gray-800">
                    <h2 className="text-3xl font-bold p-4 text-gray-800 flex flex-col items-center dark:text-white">Contact</h2>
                    <p className="text-gray-700 pb-4 dark:text-gray-300">
                        This form does not provide me with your inputted Name, Email, or Message yet. Please contact me via email at <a href="mailto:alectaber12@gmail.com" className="text-blue-600 hover:underline">
                        alectaber12@gmail.com</a>.
                    </p>
                    <ContactForm />
                </section>
            );

        case 'resume':
            return (
                <section className="bg-gray-300 p-4 m-8 rounded-lg shadow- dark:bg-gray-800">
                    <h2 className="text-3xl font-bold p-4 text-gray-800 flex flex-col items-center dark:text-white">Resume</h2>
                    <a href="../public/TemplateResume.docx" download="TemplateResume.docx" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 absolute left-1/2 transform -translate-x-1/2">Download Resume</a>
                    <h3 className="text-3xl font-semibold text-gray-800 mt-4 pt-10 lg:ml-40 dark:text-white">Skills</h3>
                    <ul className="mt-4 grid grid-cols-2 gap-4 ml-0 lg:grid-cols-3 lg:ml-40 lg:text-2xl">
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Problem Solving
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Pseudocode
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Command Line
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Git & GitHub
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            HTML & CSS
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Developer Tools
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Bootstrap Framework
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Tailwind CSS
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            JavaScript (ES6+)
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            JSON
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Web API
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Server Side API
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Fetch
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            REST APIs
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            AJAX
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Node.js
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            TypeScript
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            OOP
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            PostgreSQL
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            React.js
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            React Router
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            State Management
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            NoSQL
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Mongoose
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            MongoDB
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            MongoDB Atlas
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            MongoDB Compass
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Render
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Netlify
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            GraphQL
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            typeDefs & resolvers
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            GraphQL Sandbox
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Queries & Mutations
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            JSON Web Tokens
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Cypress
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Test Driven Development
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Vitest
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Component & E2E Testing
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Technical Design Documents
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            CI/CD
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            GitHub Actions
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            CircleCI
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="text-purple-900 dark:text-purple-300">• </span>
                            Python Fundementals
                        </li>
                    </ul>
                </section>
            );

        default:
            return <section className="bg-red-100 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Error 404</h2>
                <p className="text-gray-700">Page Not Found</p>
            </section>;
    }
};

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for errors
        const newErrors = {};
        if (!formData.name) newErrors.name = 'This field is required';
        if (!formData.email) newErrors.email = 'This field is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
        if (!formData.message) newErrors.message = 'This field is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Send email with EmailJS
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
            () => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
            },
            (error) => {
                console.error('EmailJS error:', error);
                alert('Failed to send the message. Please try again later.');
                setIsSubmitting(false);
            }
        );
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={`mt-1 p-2 block w-full shadow-md sm:text-sm border dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-900'} rounded-md`}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={`mt-1 p-2 block w-full shadow-md sm:text-sm border dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-900'} rounded-md`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className={`mt-1 p-2 block w-full shadow-md sm:text-sm border h-40 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-900 ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-900'} rounded-md`}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
                type="submit"
                className={`bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
        </form>
    );
};

export default Project;

