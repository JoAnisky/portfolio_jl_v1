import SectionsTitles from '../../components/SectionsTitles';
import ProjectList from './ProjectList';

const Portfolio = () => {
    return (
        <section className='portfolio' id="portfolio">
            <SectionsTitles name="Portfolio"/>
            <ProjectList/>
        </section>
    );
}

export default Portfolio;
