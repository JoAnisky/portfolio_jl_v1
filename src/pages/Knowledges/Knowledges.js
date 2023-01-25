import React from 'react';
import Languages from './Languages';
import Frameworks from './Frameworks';
import SoftwareSkills from './SoftwareSkills';

const Knowledges = () => {
    return (
        <section className='knowledges'>
            <h2 className='sections-titles'>Comp&eacute;tences</h2>
            <Languages/>
            <Frameworks/>
            <SoftwareSkills/>
        </section>
    );
}

export default Knowledges;
