import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { useState } from 'react';

function Gallery(props) {
    const [index, setIndex] = useState(0);
    const imgSize = () => {
        const galleryImg = document.querySelector(
            `.${styles.gallery_container_img}`
        );
        if (!galleryImg) {
            return 0;
        }
        return galleryImg.width;
    };

    const Next = () => {
        if (index === props.img.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const Prev = () => {
        if (index === 0) {
            setIndex(props.img.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <div className={styles.gallery}>
            <div
                className={`${styles.gallery_container}`}
                style={{ transform: `translateX(-${index * imgSize()}px)` }}
            >
                {props.img.map((picture) => (
                    <img
                        className={styles.gallery_container_img}
                        src={picture}
                        key={picture}
                    />
                ))}
            </div>
            {props.img.length > 1 && (
                <div className={`${styles.gallery_chevron}`}>
                    <img
                        src="../src/assets/chevron_left.png"
                        className={styles.chevron}
                        onClick={Prev}
                    />
                    <img
                        src="../src/assets/chevron_right.png"
                        className={styles.chevron}
                        onClick={Next}
                    />
                </div>
            )}
            {props.img.length > 1 && (
                <div className={`${styles.gallery_bullet}`}>
                    {index + 1} / {props.img.length}
                </div>
            )}
        </div>
    );
}

export default Gallery;

Gallery.propTypes = {
    img: PropTypes.array.isRequired,
};
