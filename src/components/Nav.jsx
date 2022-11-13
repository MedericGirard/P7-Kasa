import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {
    return (
        <div className={`${styles.nav}`}>
            <nav>
                <Link className={`${styles.nav__accueil}`} to="/">
                    Accueil
                </Link>
                <Link className={`${styles.nav__about}`} to="about">
                    A propos
                </Link>
            </nav>
        </div>
    );
}

export default Nav;
