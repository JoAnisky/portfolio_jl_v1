import {useState, useEffect, useRef} from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Project = props => {
    const {type, title, image, description, tasks, technos, github, external} = props.item;
    const workPicturePath = "./media/work/";
    const [pair, setIsPair] = useState(false);
    const targetRef = useRef(null);
    const isVisible = useIntersectionObserver({
        root: null,
        rootMargin: '-50px',
        threshold: 0.3
    }, targetRef);

    useEffect(() => {
        const checkPair = () => {
            const id = props.id;
            (id % 2 === 0) ? setIsPair(true) : setIsPair(false);
        }
        checkPair();
    }, [props.id]);

    return (
        <div ref={targetRef} className={`project-card ${!isVisible ? "" : "slideup-anim"} ${!pair ? "left" : ""}`}>
            <div className={`project-card__type-title ${!pair ? "left" : ""}`}>
                <p className="project-card__type">{type}</p>
                <h3 className="project-card__title">{title}</h3>
            </div>
            <div className={`project-card__image ${!pair ? "left" : ""}`}>
                <a href={external.link} target="_blank" rel='noreferrer' aria-label={external.title}>
                    <div className="work-image-wrapper">
                        <picture>
                            <source srcSet={`${workPicturePath}${image}-S.webp`} media="(max-width: 340px)" />
                            <source srcSet={`${workPicturePath}${image}-M.webp`} media="(max-width: 1260px)" />
                            <source srcSet={`${workPicturePath}${image}.webp`} />
                            <img className='work-img'src={`${workPicturePath}${image}.webp`} width="800" height="401" alt={external.title} title={title} loading={"lazy"}/>
                        </picture>
                    </div>
                </a>
            </div>

            <div className={`project-card__data ${!pair ? "left" : ""}`}>
                    <div className="project-card__details">
                        <div className="project-card__description">
                            <p>{description}</p>
                        </div>
                        <div className="project-card__description-task">
                            <p>Tâches : <span className='green-texts'>{tasks}</span></p>
                        </div>
                    </div>
                    <div className='project-card__technos'>
                        <ul>
                            {
                                technos.map((techno, index) => {
                                    return <li key={index}>{techno}</li>
                                })
                            }

                        </ul>
                    </div>
                    <div className="project-card__links">
                        {github != null &&
                        <a href={github} target="_blank" rel='noreferrer' aria-label="Github">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" role="img">
                                <title>{`${title} sur Github`}</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M21 11.2535C21 15.7811 18.1374 19.6215 14.1665 20.9811C13.6585 21.0815 13.4792 20.762 13.4792 20.4877C13.4792 20.1514 13.4917 19.0449 13.4917 17.6747C13.4917 16.7172 13.1709 16.0919 12.8124 15.777C15.0395 15.5215 17.3792 14.6557 17.3792 10.7174C17.3792 9.59821 16.9918 8.68089 16.3499 7.96424C16.4541 7.7046 16.7957 6.66402 16.25 5.25119C16.25 5.25119 15.4124 4.97681 13.5041 6.30242C12.7062 6.07473 11.8501 5.9617 11 5.95761C10.1499 5.9617 9.29384 6.07473 8.49589 6.30242C6.58763 4.97681 5.74598 5.25119 5.74598 5.25119C5.20225 6.66402 5.54589 7.7046 5.65015 7.96424C5.00818 8.68089 4.61883 9.59821 4.61883 10.7174C4.61883 14.6451 6.95413 15.526 9.17515 15.7831C8.88965 16.0407 8.63142 16.492 8.5396 17.1534C7.9686 17.4175 6.52067 17.8704 5.6293 16.3024C5.6293 16.3024 5.1 15.3196 4.09796 15.2471C4.09796 15.2471 3.12077 15.2344 4.02899 15.8704C4.02899 15.8704 4.68539 16.1853 5.1397 17.3684C5.1397 17.3684 5.72513 19.3644 8.50832 18.7431C8.51233 19.6002 8.52075 20.2452 8.52075 20.4877C8.52075 20.76 8.33951 21.0749 7.83949 20.9811C3.86459 19.626 1 15.7831 1 11.2535C1 5.58945 5.47692 1 11 1C16.5231 1 21 5.58945 21 11.2535Z" />
                            </svg>
                        </a>
                        }
                        <a href={external.link} target="_blank" rel='noreferrer' aria-label={external.title}>
                            <svg className="icon-external" width="22" height="22" viewBox="0 0 18 17" fill="none" strokeWidth="1" stroke="currentColor" role="img"
                            xmlns="http://www.w3.org/2000/svg">
                                <title>{external.title}</title>
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0544 15.6222H15.4544V15.2222V11.1778H16.4267V15.2222C16.4267 15.588 16.2818 15.9386 16.0243 16.1969C15.7669 16.4551 15.4179 16.6 15.0544 16.6H2.64774C2.28416 16.6 1.93522 16.4551 1.67776 16.1969C1.42025 15.9386 1.27537 15.588 1.27537 15.2222V2.77778C1.27537 2.41198 1.42025 2.0614 1.67776 1.80311C1.93522 1.54486 2.28416 1.4 2.64774 1.4H6.67868V2.37778H2.64774H2.24774V2.77778V15.2222V15.6222H2.64774H15.0544Z"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.27052 10.5073C7.0641 10.7302 7.07691 11.0787 7.29913 11.2858C7.52135 11.4929 7.86882 11.4801 8.07524 11.2573L7.27052 10.5073ZM17.3755 0.979833C17.3644 0.675821 17.1096 0.4384 16.8065 0.449537L11.8674 0.631039C11.5643 0.642177 11.3276 0.897656 11.3388 1.20167C11.35 1.50568 11.6047 1.7431 11.9078 1.73196L16.2982 1.57063L16.46 5.97433C16.4712 6.27834 16.7259 6.51577 17.029 6.50463C17.3321 6.49349 17.5688 6.23801 17.5576 5.934L17.3755 0.979833ZM8.07524 11.2573L17.2291 1.37498L16.4244 0.625024L7.27052 10.5073L8.07524 11.2573Z"/>
                            </svg>
                        </a>
                    </div>
            </div>
        </div>
    );
}

export default Project;