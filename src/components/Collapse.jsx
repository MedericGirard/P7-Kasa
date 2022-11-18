import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Collapse.css';

function Collapse(props) {
    const [Toggle, setToggle] = useState('');

    const content = useRef(null);

    function toggle() {
        setToggle(Toggle === '' ? 'toggle' : '');
    }

    return (
        <div className="collapse__section">
            <button className={`collapse ${Toggle}`} onClick={toggle}>
                <p className="collapse__title">{props.title}</p>
                <img
                    className={`collapse__icon ${
                        Toggle === 'toggle' ? 'rotate' : ''
                    }`}
                    src="../chevron_down.png"
                ></img>
            </button>
            <div
                ref={content}
                style={{
                    maxHeight:
                        Toggle === 'toggle'
                            ? `${content.current.scrollHeight}px`
                            : '0px',
                }}
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
