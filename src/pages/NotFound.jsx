import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

function Error() {
    return (
        <div className={`${styles.notfound}`}>
            <h1>404</h1>
            <div className={`${styles.notfound__text}`}>
                <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            </div>
            <Link className={`${styles.notfound__backhome}`} to="/">
                Retourner sur la page d&apos;accueil
            </Link>
        </div>
    );
}

export default Error;
