import { api } from '../libs/axios'

export async function completedTaskFromApi(taskId : string) {
  await api.patch(`tasks/${taskId}/completed`)
}
