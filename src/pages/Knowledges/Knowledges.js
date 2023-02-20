import React from 'react';
import SectionsTitles from '../../components/SectionsTitles';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import Skills from './Skills';

const Knowledges = () => {
    const {isMobile} = useDeviceDetect();
    return (
        <section className='knowledges' id="knowledges">
            <SectionsTitles name="Technos"/>
            <Skills mobile={isMobile}/>
        </section>
    );
}

export default Knowledges;
