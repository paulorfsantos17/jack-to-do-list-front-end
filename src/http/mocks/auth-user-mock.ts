import { http, HttpResponse } from 'msw'

import type { UserRequest } from '../register'

export const authUserMock = http.post<
  never,
  UserRequest
>('/sessions', async ({ request }) => {
  const { email, password } = await request.json()

  if (
    email === 'johndoe@example.com' &&
    password === 'password'
  ) {
    return HttpResponse.json({
      access_token: 'token',
    })
  } else {
    return new HttpResponse(null, { status: 401 })
  }
})
