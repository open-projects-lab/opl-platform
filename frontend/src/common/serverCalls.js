import axios from 'axios';
import {API_URL} from './constants';


const getRequestHeaders = () => {
    let token = localStorage.getItem('token');
    if (!token){
        token = Math.random().toString(36).substr(-8);
        localStorage.setItem('token', token);
    }
    return {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: token
    };
};

export const configObj = {
    headers: getRequestHeaders()
};

const getServerUrl = requestUrl => `${API_URL}/${requestUrl}`;

export const apiGet = requestUrl => axios.get(getServerUrl(requestUrl), configObj);

export const apiPost = (requestUrl, postData) => axios.post(getServerUrl(requestUrl), postData, configObj);

export const apiPostUser = (requestUrl, postData) => axios.post(getServerUrl(requestUrl), postData);

export const apiPatch = (requestUrl, postData) => axios.patch(getServerUrl(requestUrl), postData, configObj);

export const apiPut = (requestUrl, postData) => axios.put(getServerUrl(requestUrl), postData, configObj);

export const apiDelete = requestUrl => axios.delete(getServerUrl(requestUrl), configObj);