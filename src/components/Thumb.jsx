import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumb.module.scss';
import { Link } from 'react-router-dom';

function Thumb({ data }) {
    return (
        <article className={`${styles.thumb}`} key={data.id}>
            <Link
                to={{
                    pathname: `/products/${data.id}`,
                }}
                state={data}
            >
                <img
                    className={`${styles.thumb__image}`}
                    src={data.cover}
                    alt={data.title}
                />
                <h2>{data.title}</h2>
            </Link>
        </article>
    );
}

export default Thumb;

Thumb.propTypes = {
    data: PropTypes.object.isRequired,
};
