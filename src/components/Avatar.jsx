import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

export default function Avatar({ name, picture }) {
    return (
        <div className={`${styles.avatar}`}>
            <div className={`${styles.avatar_name}`}>
                <p>{name}</p>
            </div>
            <div className={`${styles.avatar_pictures}`}>
                <img src={picture}></img>
            </div>
        </div>
    );
}

Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};
