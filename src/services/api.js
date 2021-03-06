import axios from 'axios'

const api = axios.create({
    baseURL: 'https://printshotgenerator.herokuapp.com'
})

export default api