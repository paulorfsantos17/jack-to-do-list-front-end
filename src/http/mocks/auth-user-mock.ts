import { http, HttpResponse } from 'msw'

import type { UserRequest } from '../register'

export const authUserMock = http.post<
  never,
  UserRequest
>('/sessions', async ({ request }) => {
  const { email, password } = await request.json()

  if (
    email === 'paulo@example.com' &&
    password === 'password'
  ) {
    return new HttpResponse('{ access-token : token }', {
      status: 201,
      headers: { 'Content-Type': 'application/json' },

    })
  } else {
    return new HttpResponse(null, { status: 401 })
  }
})
