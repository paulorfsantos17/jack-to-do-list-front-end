import { http, HttpResponse } from 'msw'

import type { CreateTaskApiResponse } from '../types/create-task-api-response'

export const createTaskMock = http.post<
  never,
  never,
  CreateTaskApiResponse
>('/tasks', async () => {
  return HttpResponse.json({
    task: {
      id: 'new-task-test',
      title: 'New Task Test',
      description: 'This is a sample task',
      createdAt: new Date(2024, 9, 2),
      completionDate: null,
    },
  })
})
