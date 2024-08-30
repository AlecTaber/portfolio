import React from 'react';

const Project = ({section}) => {
    switch (section) {
        case 'about':
            return (
                <section>
                    <h2>About Me</h2>
                    <img src="profile.jpg" alt="Alec Taber" />
                    <p>My name is Alec Taber, and I am a full-stack web developer. I have experience with HTML, CSS, JavaScript, and React on the front end, and Node.js, Express, and PostgreSQL on the back end. I am passionate about creating responsive, user-friendly web applications that are accessible to all users.</p>
                </section>
            );
        case 'portfolio':
            return (
                <section>
                    <h2>Portfolio</h2>
                    <ul>
                        <li>
                            <h3>Project 1</h3>
                            <p>Description of Project 1</p>
                        </li>
                        <li>
                            <h3>Project 2</h3>
                            <p>Description of Project 2</p>
                        </li>
                        <li>
                            <h3>Project 3</h3>
                            <p>Description of Project 3</p>
                        </li>
                    </ul>
                </section>
            );
        case 'contact':
            return (
                <section>
                    <h2>Contact</h2>
                    <form>
                        {/* Add form elements here */}
                    </form>
                </section>
            );
        case 'resume':
            return (
                <section>
                    <h2>Resume</h2>
                    <a href="resume.pdf" download>Download Resume</a>
                    <ul>
                        {/* Add Skills here */}
                    </ul>
                </section>
            );
            default:
                return <section>Error 404 page not found</section>;
    };
};

export default Project;

