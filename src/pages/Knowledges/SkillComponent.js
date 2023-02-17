const SkillComponent = props => {
    const logosPath = "./media/logos/";
    const {catTitle, stack} = props.item;
    const mobile = props.mobile;
    return (
        <>
            <div className="skill-category">
                <div className='skill-category__title'>
                    <h3>{catTitle}</h3>
                </div>
                <div className="skill-components">
                {
                
                    stack.map((skill, index) => {                        
                        return(
                            <div key={index} className="skill-components__skill">
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