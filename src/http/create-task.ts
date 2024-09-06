import type { AxiosResponse } from 'axios'

import type { createTaskDTO } from '../dto/create-task-dto'
import { api } from '../libs/axios'
import { taskMapper } from './mappers/task-mapper'
import type { CreateTaskApiResponse } from './types/create-task-api-response'

export async function createTaskFromApi(taskCreate:createTaskDTO) {
  const response: AxiosResponse<CreateTaskApiResponse> =
    await api.post('tasks', taskCreate)

  const { task } = response.data

  return taskMapper(task)
}
