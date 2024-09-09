import { http, HttpResponse } from 'msw'

interface UpdateTaskBodySchema {
  title: string
  description: string
}

export const updateTaskMock = http.put<
  { id: string },
  UpdateTaskBodySchema
>('/tasks/:id', async () => {
  return new HttpResponse(null, { status: 200 })
})
