import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';

const FullStar = () => {
    return <img src="../src/assets/stars_full.png" alt="stars" />;
};

const EmptyStar = () => {
    return <img src="../src/assets/stars_empty.png" alt="stars" />;
};

export default function Stars({ rating }) {
    return (
        <div className={`${styles.stars}`}>
            {Array.from({ length: parseInt(rating) }, (element, i) => (
                <FullStar key={'full-' + i} />
            ))}
            {Array.from({ length: 5 - parseInt(rating) }, (element, i) => (
                <EmptyStar key={'empty-' + i} />
            ))}
        </div>
    );
}

Stars.propTypes = {
    rating: PropTypes.string.isRequired,
};
