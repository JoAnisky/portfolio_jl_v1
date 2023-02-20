import { useRef, useEffect} from "react";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SkillComponent = props => {
    const targetRef = useRef(null);
    const linksRef = useRef([]);
    const logosPath = "./media/logos/";
    const {catTitle, stack} = props.item;
    const mobile = props.mobile;

    const isVisible = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }, targetRef);

    const addToRefsLinks = (elem) => {
        if(elem && !linksRef.current.includes(elem)){
            linksRef.current.push(elem);
        }
    };

    useEffect(() => {
        let animDuration = 0.4;
        let animDelay = 0.4;

        linksRef.current.forEach(link => {
            link.style.transition = isVisible ? `${(animDelay += 0.05)}s ${animDuration}s all ease-in-out` : `${(animDelay += 0.05)}s ${animDuration}s all in-out-back`;
            link.style.transform = isVisible ? "" : "translateX(-650px)";
            link.style.opacity = isVisible ? "1" : "";
        })

    })
    return (
        <>
            <div ref={targetRef} className="skill-category">
                <div className='skill-category__title'>
                    <h3>{catTitle}</h3>
                </div>
                <div className="skill-components">
                {

                    stack.map((skill, index) => {
                        return(
                            <div ref={addToRefsLinks} key={index} className="skill-components__skill">
                                <div className="skill-components__skill__logo">
                                    <img src={`${logosPath + skill.name}.svg`} className='skill-component__logo' alt={`logo ${skill.name}`} width={mobile ? Math.round((skill.width / 1.25)) : skill.width}/>
                                </div>
                                <div>
                                    <p className='skill-component__value'>{skill.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>

    );
};

export default SkillComponent