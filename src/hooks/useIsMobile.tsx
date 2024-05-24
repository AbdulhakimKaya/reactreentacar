import { useEffect, useState } from 'react';

const useIsMobile = (initialWidth = 768) => {
    const [isMobile, setIsMobile] = useState(false);
    const [mobileWidth, setMobileWidth] = useState(initialWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= mobileWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // İlk renderda boyut kontrolü yapılıyor

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileWidth]);

    return isMobile;
};

export default useIsMobile;
