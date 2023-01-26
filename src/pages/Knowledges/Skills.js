import React, { Component } from 'react';
import SkillsComponent from './SkillComponent';

class SoftwareSkills extends Component {
    state = {
        languages : [
            {id: 1, value: "javascript"},
            {id: 2, value: "CSS"},
            {id: 3, value: "php"},
        ],
        frameworks : [
            {id: 1, value: "react"},
            {id: 2, value: "sass"},
            {id: 3, value: "threejs"},
        ],
        softwareskills : [
            {id: 1, value: "figma"},
            {id: 2, value: "photoshop"},
            {id: 3, value: "git"},
        ]
    }
    render() {
        let {languages, frameworks, softwareskills} = this.state;
        return (
            <div className='knowledges__container'>
                <SkillsComponent
                    values={languages}
                    className={`knowledges__skills-languages`}
                    title='languages'
                />
                <SkillsComponent
                    values={frameworks}
                    className={`knowledges__skills-frameworks`}
                    title='frameworks'
                />
                <SkillsComponent
                    values={softwareskills}
                    className={`knowledges__skills-softwareskills`}
                    title='logiciels'
                />
            </div>
        );
    }
}

export default SoftwareSkills;
