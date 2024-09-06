/* eslint-disable no-unused-vars */
import type { TaskDto } from '../../dto/task-dto'

export enum actionsTypes {
  ADD_TASK = 'ADD_TASK',
  SET_TASKS = 'SET_TASKS',
  REMOVE_TASKS = 'REMOVE_TASKS',
}

export type Actions = |
{
  type: actionsTypes.ADD_TASK,
  payload: { task: TaskDto }
} |
{
  type: actionsTypes.SET_TASKS,
  payload: { tasks: TaskDto[] }
} |
{
  type: actionsTypes.REMOVE_TASKS,
  payload: { taskId: string }
}

export function addTaskAction(task: TaskDto): Actions {
  return {
    type: actionsTypes.ADD_TASK,
    payload: { task },
  }
}
export function setTasksAction(tasks: TaskDto[]): Actions {
  return {
    type: actionsTypes.SET_TASKS,
    payload: { tasks },
  }
}

export function removeTasksAction(taskId:string): Actions {
  return {
    type: actionsTypes.REMOVE_TASKS,
    payload: { taskId },
  }
}
