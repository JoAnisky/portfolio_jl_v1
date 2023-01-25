import React, { Component } from 'react';

class SoftwareSkills extends Component {
    state = {
        softwareskills : [
            {id: 1, value: "figma"},
            {id: 2, value: "photoshop"},
            {id: 3, value: "git"},
        ]
    }
    render() {
        return (
            <div className='languages'>
                {
                    this.state.softwareskills.map((item) => {
                        return (
                            <div key={item.id} className="knowledge-component">
                                <img src={`assets/logos/${item.value}.png`} alt={`logo ${item.value}`} />
                                <p className='knowledge-component__value'>{item.value}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default SoftwareSkills;
