import type { EditTaskDTO } from '../dto/edit-task-dto'
import { api } from '../libs/axios'

export async function updateTaskFromApi(taskUpdate:EditTaskDTO) {
  const { id, description, title } = taskUpdate
  await api.put(`tasks/${id}`,
    {
      title,
      description,
    },
  )
}
