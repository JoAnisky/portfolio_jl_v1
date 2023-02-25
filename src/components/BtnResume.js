import CV from '../resume/CV_jonathan_lore.pdf';
import useAnalyticsEventTracker from '../hooks/useAnalyticsEventTracker';

const BtnResume = (props) => {
    const gaEventTracker = useAnalyticsEventTracker('CV');
    const handleShowLinks = props.handleShow;

    return (
        <>
            <a href={CV} target="_blank" rel="noreferrer" onClick={handleShowLinks}>CV</a>
        </>

    );
}

export default BtnResume;
