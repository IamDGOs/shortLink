import axios from "axios";

export const key = "5b64d7cc0fe2b7299039e1bbbe90bb10990f303f";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;