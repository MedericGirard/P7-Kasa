import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Collapse.css';
import chevron from '../assets/chevron_down.png';

function Collapse(props) {
    const [Active, setActive] = useState('');
    const [Height, setHeight] = useState('0px');

    const content = useRef(null);

    function toggleCollapse() {
        setActive(Active === '' ? 'active' : '');
        setHeight(
            Active === 'active' ? '0px' : `${content.current.scrollHeight}px`
        );
    }

    return (
        <div className="collapse__section">
            <button className={`collapse ${Active}`} onClick={toggleCollapse}>
                <p className="collapse__title">{props.title}</p>
                <img
                    className={`collapse__icon ${
                        Active === 'active' ? 'rotate' : ''
                    }`}
                    src={chevron}
                ></img>
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${Height}` }}
                className="collapse__content"
            >
                <div>
                    <div className="collapse__text">{props.content}</div>
                </div>
            </div>
        </div>
    );
}

export default Collapse;

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};
