import axios from 'axios';

axios.interceptors.response.use(
    response => (response && response.data ? response.data : response),
    error => Promise.reject(error),
);

export function httpGet() {
    return axios.get.apply(this, arguments);
}








