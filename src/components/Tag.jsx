import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.module.scss';

export default function Tag({ content }) {
    return (
        <div className={`${styles.tag}`}>
            <p className={`${styles.tag_content}`}>{content}</p>
        </div>
    );
}

Tag.propTypes = {
    content: PropTypes.string.isRequired,
};
