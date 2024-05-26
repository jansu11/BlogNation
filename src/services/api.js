import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.65:5050/api',
});

export default instance;