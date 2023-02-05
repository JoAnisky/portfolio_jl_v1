import React from 'react';

const Project = props => {
    let project = props.item;
    console.log(project)
    return (
        <div className='project'>
            <div className="project__data">
                <div>
                    <p className="project__type">{project.type}</p>
                    <h3 className="project__title">{project.title}</h3>
                    <div className="project_details">
                        <div className="project__description">
                            <p>{project.description}</p>
                        </div>
                        <div className="project__description-task">
                            <p>{project.tasks}</p>
                        </div>
                    </div>
                    <ul className="project__technos">
                        {
                            project.technos.map((techno, index) => {
                                return <li key={index}>{techno}</li>
                            })
                        }
                        
                    </ul>
                    <div className="project__links">
                        <a href={project.github} title="Github">
                            svg Github
                        </a>
                        <a href={project.external} title="Lien externe"> 
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
    );
}

export default Project;
