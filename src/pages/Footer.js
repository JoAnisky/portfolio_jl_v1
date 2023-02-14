import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <p>Design & développement &copy; Jonathan Loré (JoAnisky) <span>{(new Date().getFullYear())}</span></p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
