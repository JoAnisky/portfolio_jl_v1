import CV from '../resume/CV_jonathan_lore.pdf';

const BtnResume = (props) => {
    const handleShowLinks = props.handleShow;

    return (
        <>
            <a href={CV} target="_blank" rel="noreferrer" onClick={handleShowLinks}>CV</a>
        </>

    );
}

export default BtnResume;
