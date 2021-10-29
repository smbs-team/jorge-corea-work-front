import axios from 'axios';

const apiLoginUrl = process.env.REACT_APP_API_LOGIN_URL;

/**
 * login beonshop api
 * @returns { Promise } save localstorage token response
 */
export function loginApi(){
    const username = process.env.REACT_APP_API_USER;
    const password = process.env.REACT_APP_API_PASSWORD;

    return new Promise((resolve, reject) => {
        axios.post(apiLoginUrl, { username, password })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                console.log(error);
                reject('Api login error');
            })
    });
    
}
