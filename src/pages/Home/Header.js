import {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar';

const Header = () => {

    const [scrollData, setScrollData] = useState({
        posY : 0,
        lastY : 0
    });

    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrollData(prevState => {
                return {
                    posY: window.scrollY,
                    lastY : prevState.posY
                }
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, []);

    useEffect(() => {
        scrollData.posY > 85 ? setHideHeader(true) : setHideHeader(false)

        scrollData.lastY < scrollData.posY ? setHideHeader(true) : setHideHeader(false)

    }, [scrollData]);

    return (
        <header className={hideHeader ? `header-nav hide-header` : `header-nav`}>
            <Navbar/>                     
        </header>
    );
}

export default Header;