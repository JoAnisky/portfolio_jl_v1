import {useState, useMemo, useEffect} from 'react';

const useIntersectionObserver = (options, targetRef) => {

    const [isVisible, setIsVisible] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);

    const callbackFunction = entries => {
        const[entry] = entries;
        if (entry.isIntersecting && !hasIntersected){
            setIsVisible(true);
            setHasIntersected(true);
        }
    };

    const optionsMemo = useMemo(() => {
        return options
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if(currentTarget) observer.observe(currentTarget);

        return() => {
            if (currentTarget) observer.unobserve(currentTarget);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetRef, optionsMemo]);

    return isVisible;
}

export default useIntersectionObserver;