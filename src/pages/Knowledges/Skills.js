import SkillComponent from './SkillComponent';
import skillsData from '../../data/skillsData.json';

const Skills = () => {
    return (
        <div className='knowledges__container'>
            {
                skillsData.map((item, index) => {
                    return (
                        <SkillComponent key={index} item={item}/>
                    )
                })
            }
        </div>
    );        
}

export default Skills;