import SkillComponent from './SkillComponent';
import skillsData from '../../data/skillsData.json';

const Skills = () => {

    return (
        <div className='knowledges__container'>
            {skillsData.map((skills, index) => <SkillComponent key={index} values={skills}/>)}
        </div>
    );    
}
export default Skills