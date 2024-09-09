import { http, HttpResponse } from 'msw'

export const deleteTaskMock = http.delete<
  { taskId: string },
  never,
  never
>('/tasks/:id', async () => {
  return new HttpResponse(null, { status: 200 })
})
