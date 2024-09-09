import { http, HttpResponse } from 'msw'

import type { GetUserApiResponse } from '../types/get-user-api-response'

export const GetUserMock = http.get<
  never,
  never,
  GetUserApiResponse
>('/users', async () => {
  return HttpResponse.json({
    user:
      {
        id: 'ff744011-a507-43bc-80b7-5915deac1aec',
        email: 'johndoe@example.com',
        name: 'John Doe',
      },
  })
})
