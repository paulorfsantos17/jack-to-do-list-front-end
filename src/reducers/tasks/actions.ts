/* eslint-disable no-unused-vars */
import type { TaskDto } from '../../dto/taskDto'

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

export function addTaskAction(task: TaskDto) {
  return {
    type: actionsTypes.ADD_TASK,
    payload: { task },
  }
}
export function setTasksAction(tasks: TaskDto[]) {
  return {
    type: actionsTypes.SET_TASKS,
    payload: { tasks },
  }
}
