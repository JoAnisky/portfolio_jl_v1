import React from 'react';
import Skills from './Skills';
import SectionsTitles from '../../components/SectionsTitles';

const Knowledges = () => {
    return (
        <section className='knowledges'>
            <SectionsTitles name="Compétences"/>
            <Skills/>
        </section>
    );
}

export default Knowledges;
