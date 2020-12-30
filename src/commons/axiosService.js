import axios from "axios"

class axiosService {
    constructor() {
        const instance = axios.create()
        instance.interceptors.response.use(this.handleSuccess, this.handleError)
        this.instance = instance
    }

    handleSuccess(res) {
        return res
    }

    handleError(err) {
        return Promise.reject(err)
    }

    get(url) {
        return this.instance.get(url)
    }

    post(url, id) {
        return this.instance.post(`${url}/${id}`)
    }
}

export default new axiosService();