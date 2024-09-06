import type { TaskDto } from '../../dto/task-dto'
import type { Actions } from './actions'

interface TasksListState {
  tasksList: TaskDto[]
}

export function tasksReducer(
  state:TasksListState,
  action : Actions,
): TasksListState {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        tasksList: action.payload.tasks,
      }
    case 'ADD_TASK': {
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload.task],
      }
    }
    case 'REMOVE_TASKS': {
      const tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.taskId,
      )
      return {
        ...state,
        tasksList,
      }
    }
    case 'COMPLETED_TASK': {
      const taskIndex = state.tasksList.findIndex(
        (task) => task.id === action.payload.taskId,
      )

      if (taskIndex === -1) {
        return state
      }

      const updateTask = state.tasksList[taskIndex]
      updateTask.completionDate = new Date()
      state.tasksList[taskIndex] = updateTask

      return {
        ...state,
      }
    }
    case 'EDIT_TASK': {
      const taskIndex = state.tasksList.findIndex(
        (task) => task.id === action.payload.updateTask.id,
      )

      if (taskIndex === -1) {
        return state
      }

      const updateTask = state.tasksList[taskIndex]

      updateTask.title = action.payload.updateTask.title
      updateTask.description = action.payload.updateTask.description

      state.tasksList[taskIndex] = updateTask

      return {
        ...state,
      }
    }
    default:
      return state
  }
}
