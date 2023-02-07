import projectsData from '../../data/projectsData.json';
import Project from './ProjectCard';

const ProjectList = () => {

    return (        
    // Projects component begin
        <>
            {
                projectsData.map((project, index) => {
                    return <Project key={index} id={index} item={project}/>
                })
            }
        </>
    )
}

export default ProjectList;