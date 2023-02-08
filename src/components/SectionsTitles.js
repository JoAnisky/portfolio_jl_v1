import React from 'react';

const SectionsTitles = (props) => {
    return (
        <div className='sections-titles-container'>
            <span className="sections-titles-container__line"></span>
                <h2 className='sections-titles-container_text'>{props.name}</h2>
            <span className="sections-titles-container__line"></span>
        </div>
    );
}

export default SectionsTitles;
