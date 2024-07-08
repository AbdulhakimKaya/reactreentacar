import {jwtDecode, JwtPayload} from 'jwt-decode';

interface MyJwtPayload extends JwtPayload {
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
    email: string;
}

export const getUserInfoFromToken = (token: string): { firstName: string; lastName: string; email: string } | null => {
    try {
        const decodedToken = jwtDecode<MyJwtPayload>(token);
        console.log("Decoded Token:", decodedToken); // Hata ayıklama için
        const fullName = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        const email = decodedToken.email;
        const [firstName, lastName] = fullName.split(' ');

        return {firstName, lastName, email};
    } catch (error) {
        console.error("Token decoding error:", error);
        return null;
    }
};