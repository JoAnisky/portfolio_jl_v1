import {useState, useEffect} from 'react';

const SkillComponent = props => {
    const logosPath = "./media/logos/";
    let skills = props.item;

    const [windowSize, setWindowSize] = useState({
        sizeX: 0,
        lastSizeX: 0
    });
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(prevState => {
                return {                    
                    sizeX: window.innerWidth,
                    lastSizeX: prevState.sizeX
                }                
            })
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        windowSize.sizeX < 720 ? setMobile(true) : setMobile(false)   
        windowSize.lastSizeX > windowSize.sizeX ? setMobile(true) : setMobile(false)
    },[windowSize]);


    return (
        <div className="skill-category">
            <div className='skill-category__title'>
                <h3>{skills.catTitle}</h3>
            </div>
            <div className="skill-components">
            {
                skills.stack.map((skill, index) => {
                    return(
                        <div key={index} className="skill-components__skill">
                            <div className="skill-components__skill__logo">
                                <img src={`${logosPath + skill.name}.svg`} className='skill-component__logo' alt={`logo ${skill.name}`} width={mobile ? Math.round((skill.width / 1.25)) : skill.width} role="img" />
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

    );
};

export default SkillComponent;