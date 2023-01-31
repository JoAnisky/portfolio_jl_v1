import React from 'react';
import SectionsTitles from '../../components/SectionsTitles';
import Skills from './Skills';

const Knowledges = () => {
    return (
        <section className='knowledges'>
            <SectionsTitles name="Compétences"/>
            <Skills/>
        </section>
    );
}

export default Knowledges;
