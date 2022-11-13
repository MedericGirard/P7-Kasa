import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slideshow.module.scss';
import { useState } from 'react';

function Slideshow(props) {
    const [slideIdx, setSlideIdx] = useState(0);
    const imgSize = () => {
        const slideshowImg = document.querySelector(
            `.${styles.slideshow_container_img}`
        );
        if (!slideshowImg) {
            return 0;
        }
        return slideshowImg.width;
    };

    const onNext = () => {
        if (slideIdx === props.img.length - 1) {
            setSlideIdx(0);
        } else {
            setSlideIdx(slideIdx + 1);
        }
    };

    const onPrev = () => {
        if (slideIdx === 0) {
            setSlideIdx(props.img.length - 1);
        } else {
            setSlideIdx(slideIdx - 1);
        }
    };

    return (
        <div className={styles.slideshow}>
            <div
                className={`${styles.slideshow_container}`}
                style={{ transform: `translateX(-${slideIdx * imgSize()}px)` }}
            >
                {props.img.map((picture) => (
                    <img
                        className={styles.slideshow_container_img}
                        src={picture}
                        key={picture}
                    />
                ))}
            </div>
            <div className={`${styles.slideshow_controls}`}>
                <img
                    src="../src/assets/chevron_left.png"
                    className={styles.chevron}
                    onClick={onPrev}
                />
                <img
                    src="../src/assets/chevron_right.png"
                    className={styles.chevron}
                    onClick={onNext}
                />
            </div>
            <div className={`${styles.slideshow_idx}`}>
                {slideIdx + 1} / {props.img.length}
            </div>
        </div>
    );
}

export default Slideshow;

Slideshow.propTypes = {
    img: PropTypes.array.isRequired,
};
