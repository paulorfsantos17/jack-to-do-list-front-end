import { api } from '../libs/axios'

export interface UserRequest {
  name: string
  email: string
  password: string
}

export async function registerUser({ name, email, password }: UserRequest) {
  await api.post('/register', {
    name,
    email,
    password,
  })
}
