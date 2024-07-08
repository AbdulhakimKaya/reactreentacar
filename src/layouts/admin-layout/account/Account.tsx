import React, {useEffect, useState} from 'react';
import {getUserInfoFromToken} from "../../../hooks/getUserInfoFromToken";

const Account = () => {
    const [userInfo, setUserInfo] = useState<{ firstName: string; lastName: string; email: string }>({
        firstName: '',
        lastName: '',
        email: ''
    });

    useEffect(() => {
        const token = sessionStorage.getItem('jwtToken'); // veya localStorage.getItem('jwtToken')
        console.log("Token:", token); // Hata ayıklama için
        if (token) {
            const userInfo = getUserInfoFromToken(token);
            console.log("User Info:", userInfo); // Hata ayıklama için
            if (userInfo) {
                setUserInfo(userInfo);
            }
        }
    }, []);

    return (
        <div>
            <h1>Hoşgeldiniz, {userInfo.firstName} {userInfo.lastName}</h1>
            <p>Email: {userInfo.email}</p>
        </div>
    );
};

export default Account;