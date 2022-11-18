import React from 'react';
import styles from './Header.module.scss';
import Nav from './Nav';

function Header() {
    return (
        <header className={`${styles.header}`}>
            <img
                src="../logo.png"
                alt="logo Kasa"
                className={`${styles.header__logo}`}
            />
            <div>
                <Nav />
            </div>
        </header>
    );
}

export default Header;
