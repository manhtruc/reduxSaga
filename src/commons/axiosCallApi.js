import axios from "axios"
import { API_ENDPOINT } from '../constants/index'

const callApi = (endpoint, method = 'get', body) => {
    return axios({
        method: method,
        url: `${API_ENDPOINT}${endpoint}`,
        data: body
    }).catch(err => console.log(err))
};

export default callApi;