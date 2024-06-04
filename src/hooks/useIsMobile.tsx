import {useEffect, useState} from 'react';

export const _md = 768;

const useIsMobile = (width: number = _md) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const body = document.querySelector('body');
            if (body) {
                setIsMobile(body.clientWidth <= width);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isMobile;
};

export default useIsMobile;
