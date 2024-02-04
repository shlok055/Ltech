import React from 'react';

interface HeroContent {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

const HeroSection: React.FC<{ content: HeroContent }> = ({ content }) => {
    return (
        <div className="hero-section bg-[#f1f1f1] bg-cover bg-center text-[#000] py-20 px-5">
            <h1 className="text-[30px] font-bold mb-4">{content.title}</h1>
            <p className="text-lg mb-8">{content.description}</p>
            <a href={content.buttonLink} className="bg-[#f22e97] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block">{content.buttonText}</a>
        </div>
    );
};

// Example content for the hero section
const heroContent: HeroContent = {
    title: 'Welcome to Home Local-Tech',
    description: 'Get professional home services at your doorstep!',
    buttonText: 'Book Now',
    buttonLink: '/',
};

const Heo: React.FC = () => {
    return (
        <div className="mt-20">
            <HeroSection content={heroContent} />
            {/* Other content goes here */}
            <h2 className='font-[10px]'>Products</h2>
        </div>
    );
};

export default Heo;
