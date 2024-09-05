import { api } from '../libs/axios'

interface AuthRequest {
  email: string
  password: string
}

export async function authenticateUser({ email, password }: AuthRequest) {
  const response = await api.post('/sessions', {
    email,
    password,
  })
  return response.data
}
