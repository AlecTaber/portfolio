import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-purple-800 text-white p-4 mt-4 text-center">
            <div className="flex justify-center space-x-4 mb-2">
                <a
                    href="https://GitHub.com/AlecTaber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    <AiFillGithub className="h-10 w-10"></AiFillGithub>
                </a>
                <a
                    href="https://www.linkedin.com/in/alec-taber-11b963311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    <AiFillLinkedin className="h-10 w-10"></AiFillLinkedin>
                </a>
                <a
                    href="https://x.com/AlecTaber12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    <AiFillTwitterCircle className="h-10 w-10"></AiFillTwitterCircle>
                </a>

            </div>
            <p>&copy; 2024 Alec Taber</p>
        </footer>
    );
};

export default Footer;
