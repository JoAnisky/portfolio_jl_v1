import React, { Component } from 'react';
import projectsData from '../../data/projectsData.json';
import Project from './ProjectCard';
export default class ProjectList extends Component {

    state = {
        id: 0,
        projects: projectsData
    }

    render() {
        let {projects} = this.state;
        return (
        // Projects component begin
        <>
        {
            projects.map((project, index) => {
                return <Project key={index} item={project}/>
            })
        }
        </>
        )
    }
}
