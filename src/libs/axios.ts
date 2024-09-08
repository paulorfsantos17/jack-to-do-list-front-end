import axios from 'axios'
import { Cookies } from 'react-cookie'

import { env } from '../env'

const api = axios.create({
  baseURL: env.VITE_API_URL,
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
