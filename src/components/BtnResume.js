import React from 'react';

const BtnResume = (props) => {
    const handleShowLinks = props.handleShow;

    return (
        <>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" onClick={handleShowLinks}>CV</a>
        </>

    );
}

export default BtnResume;
