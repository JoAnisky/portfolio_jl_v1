import SkillComponent from './SkillComponent';
import skillsData from '../../data/skillsData.json';
import { Component } from 'react';

export default class Skills extends Component {

    state = {
        skills: skillsData
    }

    render() {
        
        let {skills} = this.state;
        return (
            <div className='knowledges__container'>
                {
                    skills.map((item, index) => {
                        return (
                            <SkillComponent key={index} item={item}/>
                        )
                    })
                }
            </div>
        );    
    }

}
