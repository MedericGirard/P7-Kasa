import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.scss';

function Banner({ bannerImage, title }) {
    return (
        <article className={`${styles.banner}`}>
            <img
                className={`${styles.banner__image}`}
                src={bannerImage}
                alt="Paysage de montagne"
            />
            <h2>{title}</h2>
        </article>
    );
}

export default Banner;

Banner.propTypes = {
    bannerImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
