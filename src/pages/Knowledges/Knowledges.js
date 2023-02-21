import { lazy, Suspense } from 'react';
import SectionsTitles from '../../components/SectionsTitles';
import useDeviceDetect from '../../hooks/useDeviceDetect';
const Skills = lazy(() => import  ('./Skills'));

const Knowledges = () => {
    const {isMobile} = useDeviceDetect();
    return (
        <section className='knowledges' id="knowledges">
            <SectionsTitles name="Technos"/>
            <Suspense fallback={<div>Chargement...</div>}>
                <Skills mobile={isMobile}/>
            </Suspense>
        </section>
    );
}

export default Knowledges;
