import {useRef} from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SectionsTitles = (props) => {
    const targetRef = useRef(null);
    const isVisible = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0
    }, targetRef);

    return (
        <div ref={targetRef} className={`sections-titles-container ${!isVisible ? "" : "slideup-anim"}`}>
            <span className="sections-titles-container__line"></span>
                <h2 className='sections-titles-container_text'>{props.name}</h2>
            <span className="sections-titles-container__line"></span>
        </div>
    );
}

export default SectionsTitles;
