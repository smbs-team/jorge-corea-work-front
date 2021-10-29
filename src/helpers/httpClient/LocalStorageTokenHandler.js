/** access token key */
export const ACCESS_TOKEN = 'accessToken';
/** refresh token key */
export const REFRESH_TOKEN = 'refreshToken';

/**
 * Obtain the access token
 * @returns {string} access token
 */
export function getAccessToken(){
    return localStorage.getItem(ACCESS_TOKEN);
}

/**
 * obtain the refresh token
 */
export function getRefreshToken(){
    return localStorage.getItem(REFRESH_TOKEN);
}

/**
 * Set access token in local storage
 * @param {*} value 
 */
export function setAccessToken(value){
    try {
        localStorage.setItem(ACCESS_TOKEN, value);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Set refresh token in local storage
 * @param {*} value 
 */
export function setRefreshToken(value){
    try {
        localStorage.setItem(REFRESH_TOKEN, value);
        return true;
    } catch (error) {
        return false;
    }
}