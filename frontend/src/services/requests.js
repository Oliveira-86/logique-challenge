import axios from 'axios';

const BASE_URL = 'http://localhost:8080'

export const makeRequest = (url) => {
    return axios({
        url: `${BASE_URL}${url}`
    }); 
}