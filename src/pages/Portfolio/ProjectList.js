import React, { Component } from 'react';
import projectsData from '../../data/projectsData.json';

export default class ProjectList extends Component {

    state = {
        projects: projectsData
    };


    render() {
        let {projects} = this.state;
        return (
        // Project component begin
        <div className='project'>
            <div className="project__data">
                <div>
                    <p className="project__type">projectsData.type</p>
                    <h3 className="project__title">projectsData.title</h3>
                    <div className="project_details">
                        <div className="project__description">
                            <p>projectsData.description</p>
                        </div>
                        <div className="project__description-task">
                            <p>projectsData.tasks</p>
                        </div>
                    </div>
                    <ul className="project__technos">
                        <li>pour chaque projectsData.technos</li>
                    </ul>
                    <div className="project__links">
                        <a href="projectsData.github" title="Github">
                            svg Github
                        </a>
                        <a href="projectsData.external" title="Lien externe"> 
                            svg lien Externe
                        </a>
                    </div>

                </div>
            </div>
            <div className="project__image">
                <a href="projectData.link[0]" title="projectData.link[1]">
                    <img src="projectData.image" alt="projectData.title"></img>
                </a>
            </div>
        </div>
        )
    }
}
