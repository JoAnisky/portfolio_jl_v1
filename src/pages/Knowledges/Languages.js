import React, { Component } from 'react';

class Skills extends Component {
    state = {
        languages : [
            {id: 1, value: "javascript"},
            {id: 2, value: "CSS"},
            {id: 3, value: "php"},
        ]
    }
    render() {
        console.log(this.state.name)

        return (
            <div className='knowledges__languages'>
                {
                    this.state.languages.map((item) => {
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

export default Skills;
