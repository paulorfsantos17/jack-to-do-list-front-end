/* eslint-disable no-unused-vars */
import type { EditTaskDTO } from '../../dto/edit-task-dto'
import type { TaskDto } from '../../dto/task-dto'

export enum actionsTypes {
  ADD_TASK = 'ADD_TASK',
  SET_TASKS = 'SET_TASKS',
  REMOVE_TASKS = 'REMOVE_TASKS',
  COMPLETED_TASK = 'COMPLETED_TASK',
  EDIT_TASK = 'EDIT_TASK',
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
  type: actionsTypes.REMOVE_TASKS |
        actionsTypes.COMPLETED_TASK,
  payload: { taskId: string }
} |
{
  type: actionsTypes.EDIT_TASK,
  payload: { updateTask: EditTaskDTO }
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
export function completedTasksAction(taskId:string): Actions {
  return {
    type: actionsTypes.COMPLETED_TASK,
    payload: { taskId },
  }
}

export function editTaskAction(updateTask: EditTaskDTO): Actions {
  return {
    type: actionsTypes.EDIT_TASK,
    payload: { updateTask },
  }
}
