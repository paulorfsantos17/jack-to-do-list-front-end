import axios from 'axios'
import { Cookies } from 'react-cookie'

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
  },
})

const cookies = new Cookies()

api.interceptors.request.use(
  config => {
    const token = cookies.get('accessToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export { api }
