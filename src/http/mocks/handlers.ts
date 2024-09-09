import { authUserMock } from './auth-user-mock'
import { createTaskMock } from './create-task-mock'
import { deleteTaskMock } from './delete-task-mock '
import { fetchAllTasksMock } from './fetch-all-tasks-mock'
import { registerRestaurantMock } from './register-user-mock'

export const handlers = [
  registerRestaurantMock,
  authUserMock,
  fetchAllTasksMock,
  deleteTaskMock,
  createTaskMock,
]
