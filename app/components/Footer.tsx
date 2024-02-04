// components/Footer.tsx

import React from 'react';
import Image from 'next/image';
import logo from './../../public/images/companylogo.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pb-20 pt-15 mt-20 mb-0">
            <div className="container mx-auto justify-between flex">
                <div className="items-center">
                    <Image src={logo} alt="Logo" className="w-80 h-auto" />
                    <p className='mr-3'>&copy; Local-Tech. All rights reserved.</p>
                </div>
                <div>
                <div className='mt-10'>
                    <a href="/" className="text-gray-300 mr-4 hover:text-white">Home</a>
                    <a href="/services" className="text-gray-300 mr-4 hover:text-white">Services</a>
                    <a href="/about" className="text-gray-300 mr-4 hover:text-white">About</a>
                    <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>
                <div>
                        <p className="mb-2">Contact Us:</p>
                        <p>1234 Home Street, City, Country</p>
                        <p>Email: contact@company.com</p>
                        <p>Phone: +1234567890</p>
                </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
