import {useEffect, useState} from 'react';

export default function useDeviceDetect(){
    const mobileSize = 720;
    const [isMobile, setMobile] = useState(false);

    const [windowSize, setWindowSize] = useState({
        sizeX: window.innerWidth,
        lastSizeX: 0
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(prevState => {
                return {                    
                    sizeX: window.innerWidth,
                    lastSizeX: prevState.sizeX
                }                
            })
 
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Detect if mobile size with window size :
    useEffect(() => {

        windowSize.sizeX < mobileSize ? setMobile(true) : setMobile(false);
        windowSize.lastSizeX > windowSize.sizeX ? setMobile(true) : setMobile(false);
        
    },[isMobile, windowSize]);


    // !!! VOIR MISE EN PROD SI CES DEUX HOOKS FONCTIONNENT ENSEMBLE

    // Detect device with window userAgent :

    // useEffect(() => {

    //     const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
    //     const mobile = Boolean(
    //         userAgent.match(
    //           /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    //         )
    //     );

    //     setMobile(mobile);        
    // }, []);

    return { isMobile };
}