import React from 'react';

const SkillsComponent = props => {
    return (

        <div className={props.className}>
            {
                props.values.map((item) => {
                    return (
                        <div key={item.id} className="knowledge-component">
                            <img src={`assets/logos/${item.category}.png`} alt={`logo ${item.value}`} />
                            <p className='knowledge-component__value'>{item.value}</p>
                        </div>
                    )
                })
            }
        </div>

    );
}

export default SkillsComponent;
