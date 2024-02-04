import React from 'react';

interface AboutSectionProps {
  title: "What is LTech?";
  description: "At LTech, we specialize in providing top-notch home services to make your life easier and your home more comfortable. From plumbing and electrical work to home repairs and maintenance, we've got you covered.Our team of skilled professionals is dedicated to delivering high-quality service with a commitment to excellence and customer satisfaction. With years of experience in the industry, we understand the importance of reliability, efficiency, and attention to detail. At LTech, we believe in going above and beyond to exceed our customers' expectations. Whether you need a quick fix or a major renovation, you can trust us to get the job done right the first time";
  image: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white py-12 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
        <div className="lg:w-1/2">
          <img src={image} alt="About" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;