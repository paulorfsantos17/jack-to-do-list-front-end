import { http, HttpResponse } from 'msw'

import type { TaskListApiResponse } from '../types/task-list-api-response'

export const fetchAllTasksMock = http.get<
  never,
  never,
  TaskListApiResponse
>('/tasks', async () => {
  return HttpResponse.json({
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        description: 'This is a sample task',
        createdAt: new Date(2024, 9, 2),
        completionDate: null,
      },
      {
        id: '2',
        title: 'Task 2',
        description: 'Another sample task',
        createdAt: new Date(2024, 8, 2),
        completionDate: new Date(),
      },
    ],
  })
})
