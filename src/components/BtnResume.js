import React from 'react';

const BtnResume = (props) => {

    return (
        <li className="resume-button" >
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"onClick={props.handleShow}>CV</a>
        </li>
    );
}

export default BtnResume;
