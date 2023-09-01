import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
        <footer className="w-100 bg-light text-center">
            <p>© {date} Sheeza khan. All Rights Reserved | Terms and Condition</p>
        </footer>
        </>
    )
}

export default Footer;