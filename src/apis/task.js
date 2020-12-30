import axiosService from '../commons/axiosService'
import { API_ENDPOINT } from '../constants/index'
import callApi from '../commons/axiosCallApi'
import qs from 'query-string'

const url = 'task'

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`)
}

export const getListByAxios = (params) => {
    const ObjectParams = {
        q: params
    }
    let queryParam = ''
    if (Object.keys(ObjectParams).length > 0) {
        queryParam = qs.stringify(ObjectParams)
    }
    return callApi(`/task?${queryParam}`, 'get', null)
}

export const addTask = (body) => {
    return callApi('/task', 'post', body)
}

export const deleteTask = (id) => {
    return callApi(`/task/${id}`, 'delete', null)
}

export const updateTask = (id, body) => {
    return callApi(`/task/${id}`, 'put', body)
}