import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (url, option = {}) => {
    const response = await request.get(url, option);
    return response.data;
};

export default request;
