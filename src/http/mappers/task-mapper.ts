import { TaskDto } from '../../dto/task-dto'
import { TaskApiResponse } from '../types/task-api-response'

export function taskMapper(task : TaskApiResponse) : TaskDto {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    completionDate: task.completionDate &&
      new Date(task.completionDate),
  }
}
