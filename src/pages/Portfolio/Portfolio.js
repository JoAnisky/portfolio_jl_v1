import SectionsTitles from '../../components/SectionsTitles';
import ProjectList from './ProjectList';

const Portfolio = () => {
    return (
        <section className='portfolio' id="portfolio">
            <SectionsTitles name="Portfolio"/>
            <p className='section-subtitle'>Quelques une de mes dernières réalisations</p>
            <ProjectList/>
        </section>
    );
}

export default Portfolio;
