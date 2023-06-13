import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-200 py-2 px-6">
            Powered by DRSCore &copy; {new Date().getFullYear()}
        </div>
    );
};

export default Footer;
