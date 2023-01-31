import React from 'react';

const SkillComponent = props => {
    const logosPath = "./media/logos/";
    let {item} = props;

    return (

        <div className="skill-type">
            <div className='skill-type__title'>
                <h3>{item.catTitle}</h3>
            </div>
            <div className="skill-components">
            {
                item.stack.map((logo, index) => {
                    return(
                        <div key={index} className="skill-components__skill">
                            <img src={`${logosPath + logo.name}.svg`} className='skill-component__logo' alt={`logo ${logo.name}`} width="50" />
                            <p className='skill-component__value'>{logo.name}</p>
                        </div>  
                    )
                })
            }
            
            </div>          
        </div>

    );
}

export default SkillComponent;