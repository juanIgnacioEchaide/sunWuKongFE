import { Cookies } from "react-cookie"
import { localStorage } from "react"

export const getBrowserCookie = () => {
    const cookies = new Cookies();
    const token = cookies.get('id_token');
    return token;
}

export const setBrowserCookie = token => {
    const cookies = new Cookies();
    localStorage.setItem('loggedIn',true);    
        return cookies.set('id_token', token);  
}

export const getAuthHeader = () => {
    const token = getBrowserCookie();
        return token ? `bearer ${token}` : ''
}

export const getRefreshedHeader = () =>{

    return token;
}
