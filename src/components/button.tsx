import React from 'react';

interface ButtonProps {
    text: string;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
    return (
        <a href={href} className="mt-8 inline-block px-8 py-4 bg-lime-500 hover:bg-lime-600 transition-colors duration-300 rounded-full font-semibold text-gray-900 shadow-lg transform hover:scale-105">
            {text}
        </a>
    );
};

export default Button;
