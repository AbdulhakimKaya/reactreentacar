import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.clear();
        navigate('/giris-yap');
        window.location.reload();
    }, []);
    return (<></>);
};

export default Logout;