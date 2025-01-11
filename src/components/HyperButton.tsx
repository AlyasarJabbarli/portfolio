import React from 'react';
import { Link } from 'react-router-dom';

interface HyperButtonProps {
    to: string;
    text: string;
}

const HyperButton: React.FC<HyperButtonProps> = ({ to, text }) => {
    const chars = Array.from(text);
    return (
        <Link
            to={to}
            className="relative group overflow-hidden tracking-[0.01rem] leading-tight"
        >
            <div className="text-span_color overflow-hidden">
                {chars.map((char, index) => (
                    <span
                        className={`inline-block min-w-1 transform translate-y-0 transition-transform group-hover:-translate-y-full`}
                        style={{ transitionDuration: `${(index+1) * 800/chars.length}ms` }}
                        key={index}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <div className="text-span_color_active absolute inset-0 overflow-hidden">
                {chars.map((char, index) => (
                    <span
                        className={`inline-block min-w-1 transform translate-y-full transition-transform group-hover:translate-y-0`}
                        style={{ transitionDuration: `${(index+1) * 800/chars.length}ms` }}
                        key={index}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </Link>
    );
};

export default HyperButton;
