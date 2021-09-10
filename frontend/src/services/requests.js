import axios from 'axios';

export const makeRequest = (params) => {
    return axios({
        ...params,
        baseURL: URL_BASE
    }); 
}