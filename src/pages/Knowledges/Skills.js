import SkillComponent from './SkillComponent';
import skillsData from '../../data/skillsData.json';

const Skills = (props) => {
    const { mobile } = props;
    
    return (
        <div className='knowledges__container'>
            {
                skillsData.map((item, index) => {
                    return (
                        <SkillComponent key={index} item={item} mobile={mobile}/>
                    )
                })
            }
        </div>
    );        
}

export default Skills;