import React, { Component } from 'react';

class Frameworks extends Component {
    state = {
        frameworks : [
            {id: 1, value: "react"},
            {id: 2, value: "sass"},
            {id: 3, value: "threejs"},
        ]
    }
    render() {
        return (
            <div className='knowledges__frameworks'>
                {
                    this.state.frameworks.map((item) => {
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

export default Frameworks;

