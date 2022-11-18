import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
    const Year = new Date().getFullYear();

    return (
        <footer className={`${styles.footer}`}>
            <img
                src="../footerlogo.png"
                alt="logo footer Kasa"
                className={`${styles.footer__logo}`}
            />
            <p className={`${styles.footer__text}`}>
                &copy;
                {Year} Kasa. All rights reserved
            </p>
        </footer>
    );
}

export default Footer;
