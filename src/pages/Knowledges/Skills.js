import SkillComponent from './SkillComponent';
import skillsData from '../../data/skillsData.json';
import { Component } from 'react';

export default class Skills extends Component {

    state = {
        projects: skillsData
    }

    render() {
        
        let {projects} = this.state;
        return (
            <div className='knowledges__container'>
                {
                    projects.map((item, index) => {
                        return (
                            <SkillComponent key={index} item={item}/>
                        )
                    })
                }
            </div>
        );    
    }

}
