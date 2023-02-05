import React from 'react';

const SkillComponent = props => {
    const logosPath = "./media/logos/";
    let skills = props.item;
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
                                <img src={`${logosPath + skill.name}.svg`} className='skill-component__logo' alt={`logo ${skill.name}`} width={skill.width} />
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