import React from 'react';

const SkillComponent = props => {

    const logoImport = () => {
        const importAll = (requireContext) => {
            return requireContext.keys().map(requireContext);
        }
    
        const logos = importAll(require.context('../../assets/img/logos-skills', false, /\.(svg)$/));
        console.log(logos);
    }
    logoImport()

    const {title, values} = props.values;

    return (

        <div className="skill-type">
            <div className='skill-type__title'>
                <h3>{title}</h3>
            </div>
            <div className="skill-components">
            {values.map((value, index) => 
                <div key={index} className="skill-components__skill">
                    <img src={`assets/logos/$.png`} className='skill-component__logo' alt={`logo `} />
                    <p className='skill-component__value'>{value}</p>
                </div>  
            )}
            </div>          
        </div>

    );
}

export default SkillComponent;