import axios from "axios";

const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    return config
},(error) => {
    return new Promise.reject(error)
})

requests.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export default requests