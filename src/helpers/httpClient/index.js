import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from './LocalStorageTokenHandler';
import { loginApi } from './LoginApi';
const apiUrl = process.env.REACT_APP_API_URL;
const apiTokenRefreshUrl = process.env.REACT_APP_API_TOKEN_REFRESH_URL;

// axios instances
const axiosMainInstance = axios.create();
const axiosRefreshInstance = axios.create();

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) => {
    const refToken = getRefreshToken();
    
    return new Promise(async (resolve, reject) => {
        // refresh token error catch -> trigger login api
        axiosRefreshInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                try {
                    if(error.response.status === 401){
                        const loginResp = await loginApi().catch(e => { throw new Error(e) });
                        setRefreshToken(loginResp.data.refresh);
                        setAccessToken(loginResp.data.access);
                        failedRequest.response.config.headers['Authorization'] = `Bearer ${loginResp.data.access}`;
                        resolve();
                    }
                    else {
                        throw new Error(error);
                    }
                } catch (error) {
                    console.log(error);
                    reject();
                }
            }
        )
        axiosRefreshInstance.post(apiTokenRefreshUrl, { refresh: refToken || '.' })
            .then((tokenRefreshResponse) => {
                if(tokenRefreshResponse){
                    setAccessToken(tokenRefreshResponse.data.access);
                    failedRequest.response.config.headers['Authorization'] = `Bearer ${tokenRefreshResponse.data.access}`;
                    resolve();
                }
            });
    });

}

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(axiosMainInstance, refreshAuthLogic);

/**
 * httpClient
 * @param {createAuthRefreshInterceptor.AxiosAuthRefreshRequestConfig} config 
 */
function httpClient(config) {
    return new Promise((resolve, reject) => {
        axiosMainInstance({
            ...config,
            baseURL: apiUrl,
            headers: {
                'Authorization': `Bearer ${getAccessToken()}`
            }
        }).then((resp) => {
            resolve(resp);
        }).catch(error => {
            reject(error);
        });
    });
}

export default httpClient;
