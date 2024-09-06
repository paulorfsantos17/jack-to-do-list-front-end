import type { AxiosResponse } from 'axios'

import { api } from '../libs/axios'
import { taskMapper } from './mappers/task-mapper'
import type { TaskListApiResponse } from './types/task-list-api-response'

export async function fetchAllTasks() {
  const result: AxiosResponse<TaskListApiResponse> = await api.get('/tasks')
  const data = await result.data.tasks
  const tasks = data.map(taskMapper)
  return tasks
}
