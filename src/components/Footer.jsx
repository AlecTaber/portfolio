import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white p-4 mt-4 text-center">
            <div className="flex justify-center space-x-4 mb-2">
                <a
                    href="https://GitHub.com/AlecTaber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/alec-taber-11b963311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    LinkedIn
                </a>
                <a
                    href="https://profile.indeed.com/p/alect-37w1b45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Indeed
                </a>

            </div>
            <p>&copy; 2024 Alec Taber</p>
        </footer>
    );
};

export default Footer;
