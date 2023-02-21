import { useRef, useEffect} from "react";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SkillComponent = props => {
    const targetRef = useRef(null);
    const skillRef = useRef([]);
    const logosPath = "./media/logos/";
    const {catTitle, stack} = props.item;
    const mobile = props.mobile;

    const isVisible = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }, targetRef);

    const addToRefsSkills = (elem) => {
        if(elem && !skillRef.current.includes(elem)){
            skillRef.current.push(elem);
        }
    };

    useEffect(() => {
        let animDuration = 0.4;
        let animDelay = 0.4;

        skillRef.current.forEach(skill => {
            skill.style.transition = isVisible ? `${(animDelay += 0.05)}s ${animDuration}s all ease-in-out` : `${(animDelay += 0.05)}s ${animDuration}s all in-out-back`;
            skill.style.transform = isVisible ? "" : "translateX(-650px)";
            skill.style.opacity = isVisible ? "1" : "";
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
                            <div ref={addToRefsSkills} key={index} className="skill-components__skill">
                                <div className="skill-components__skill__logo">
                                    <img src={`${logosPath + skill.name}.svg`} className='skill-component__logo' alt={`logo ${skill.name}`} title={skill.name} width={mobile ? Math.round((skill.width / 1.25)) : skill.width} height={skill.height} loading={"lazy"}/>
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