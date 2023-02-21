import { lazy, Suspense } from 'react';
import projectsData from '../../data/projectsData.json';

const Project = lazy(() => import('./ProjectCard'));

const ProjectList = () => {

    return (
    // Projects component begin
        <>
            {
                projectsData.map((project, index) => {
                    return (
                        <Suspense fallback={<div>Chargement...</div>}>
                            <Project key={index} id={index} item={project}/>
                        </Suspense>
                    )
                })
            }
        </>
    )
}

export default ProjectList;