/* eslint-disable no-unused-vars */
import type { TaskDto } from '../../dto/task-dto'

export enum actionsTypes {
  ADD_TASK = 'ADD_TASK',
  SET_TASKS = 'SET_TASKS',
}

export type Actions = |
{
  type: actionsTypes.ADD_TASK,
  payload: { task: TaskDto }
} |
{
  type: actionsTypes.SET_TASKS,
  payload: { tasks: TaskDto[] }
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
