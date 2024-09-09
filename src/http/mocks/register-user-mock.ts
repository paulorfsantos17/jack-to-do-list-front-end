import { http, HttpResponse } from 'msw'

import type { UserRequest } from '../register'

export const registerRestaurantMock = http.post<
  never,
  UserRequest
>('/register', async ({ request }) => {
  const { name, email, password } = await request.json()

  if (
    name === 'John Doe' &&
    email === 'johndoe@example.com' &&
    password === 'password'
  ) {
    return new HttpResponse(null, { status: 201 })
  } else if (email === 'emailexist@example.com') {
    return new HttpResponse(null, { status: 409 })
  } else {
    return new HttpResponse(null, { status: 400 })
  }
})
