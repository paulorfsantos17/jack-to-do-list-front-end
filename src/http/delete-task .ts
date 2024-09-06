import { api } from '../libs/axios'

export async function deleteTaskFromApi(taskId : string) {
  await api.delete(`tasks/${taskId}`)
}
