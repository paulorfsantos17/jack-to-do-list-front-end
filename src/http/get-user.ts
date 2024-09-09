import type { AxiosResponse } from 'axios'

import { api } from '../libs/axios'
import type { GetUserApiResponse } from './types/get-user-api-response'

export async function GetUserFromAPI() {
  const result: AxiosResponse<GetUserApiResponse> = await api.get('/users')
  const data = await result.data.user
  return data
}
