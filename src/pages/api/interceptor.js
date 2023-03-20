import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 60000,
    mode: 'cors',
    cache: 'no-cache',
    withCredentials: true,
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
});

axiosInstance.interceptors.request.use(
    (req) => {
        if(req.url === '/token' || req.url === '/auth'){
            req.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                authorization: `Basic ${btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)}`
            };
            req.baseURL = process.env.REACT_APP_APIGEE_AUTH_URL;
        } else {
            const accessToken = localStorage.getItem('accessToken');
            req.headers = {
                'Content-Type': 'application/json',
                authorization: `Bearer ${accessToken}`
            };

            if(process.env.REACT_APP_MODE === 'local'){
                req.withCredentials = false;
                req.baseURL = process.env.REACT_APP_ENDPOINT_LOCAL;
            } else {
                req.baseURL = process.env.REACT_APP_APIGEE_SERVICE_URL;
            }
        }
        return req;
    },
    (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        if(error?.response?.data.errorCode){
            switch (error?.response?.data.errorCode) {
                case 301: 
                    const prvReq = error?.config;
                    const refreshToken = localStorage.getItem('refreshToken');

                    const { data } = await axios.post(
                        `${process.env.REACT_APP_APIGEE_AUTH_URL}/token`,
                        `grant_type=refresh_token&refresh_token=${refreshToken}`,
                        {
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                authorization: `Basic ${btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)}`
                            }
                        }
                    );
                    await localStorage.setItem('refreshToken', data.refresh_token);
                    prvReq.headers.authorization = `Bearer ${data.access_token}`;
                    return axios(prvReq);
                case 302:
                case 303:
                case 304:
                case 305:
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('googleEmail');
                    window.location.href = '/';
                    break;
                default:
                    console.log('interceptor error', error);
                    throw error;
            }
        }

        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        if(error?.response?.data.errorCode){
            switch (error?.response?.data.errorCode) {
                case 301: 
                    const prvReq = error?.config;
                    const refreshToken = localStorage.getItem('refreshToken');

                    const { data } = await axios.post(
                        `${process.env.REACT_APP_APIGEE_AUTH_URL}/token`,
                        `grant_type=refresh_token&refresh_token=${refreshToken}`,
                        {
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                authorization: `Basic ${btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)}`
                            }
                        }
                    );
                    await localStorage.setItem('refreshToken', data.refresh_token);
                    prvReq.headers.authorization = `Bearer ${data.access_token}`;
                    return axios(prvReq);
                case 302:
                case 303:
                case 304:
                case 305:
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('googleEmail');
                    window.location.href = '/';
                    break;
                default:
                    console.log('interceptor retry error', error);
                    throw error;
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;