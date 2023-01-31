import React from 'react';

const SkillComponent = props => {
    const logosPath = "./media/logos/";
    let {item} = props;

    return (

        <div className="skill-category">
            <div className='skill-category__title'>
                <h3>{item.catTitle}</h3>
            </div>
            <div className="skill-components">
            {
                item.stack.map((logo, index) => {
                    return(
                        <div key={index} className="skill-components__skill">
                            <div className="skill-components__skill__logo">
                                <img src={`${logosPath + logo.name}.svg`} className='skill-component__logo' alt={`logo ${logo.name}`} width={logo.width} />
                            </div>
                            <div>
                                <p className='skill-component__value'>{logo.name}</p>
                            </div>
                        </div>  
                    )
                })
            }
            
            </div>          
        </div>

    );
}

export default SkillComponent;