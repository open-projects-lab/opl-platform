import axios from 'axios';
import {API_URL} from './constants';

if (API_URL === 'http://localhost:8000') {
    axios.defaults.withCredentials = true;
}

const getRequestHeaders = () => ({
    'Cache-Control': 'no-cache',
    Authorization: `Bearer ${localStorage.getItem('token')}`
});

export const getConfigObject = () => ({
    headers: getRequestHeaders()
});

const getServerUrl = requestUrl => `${API_URL}/${requestUrl}`;

export const apiGet = requestUrl => axios.get(getServerUrl(requestUrl), getConfigObject());

export const apiPost = (requestUrl, postData) => axios.post(getServerUrl(requestUrl), postData, getConfigObject());

export const apiPostUser = (requestUrl, postData) => axios.post(getServerUrl(requestUrl), postData);

export const apiPatch = (requestUrl, postData) => axios.patch(getServerUrl(requestUrl), postData, getConfigObject());

export const apiPut = (requestUrl, postData) => axios.put(getServerUrl(requestUrl), postData, getConfigObject());

export const apiDelete = requestUrl => axios.delete(getServerUrl(requestUrl), getConfigObject());
