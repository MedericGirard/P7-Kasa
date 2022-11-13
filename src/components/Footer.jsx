import React from 'react';
import styles from './Footer.module.scss';

import logoFooter from '../assets/footerlogo.png';

function Footer() {
    const Year = new Date().getFullYear();

    return (
        <footer className={`${styles.footer}`}>
            <img
                src={logoFooter}
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
